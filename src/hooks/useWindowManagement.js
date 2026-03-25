// 로직의 재사용성, 코드의 구조화를 위한 커스텀 훅 제작 
// 데스크탑 창 관리 커스텀 훅 

import { useEffect, useState , useRef} from "react"


const useWindowManagement = () => {

  const [welcomeClosed, setWelcomeClosed] = useState(localStorage.getItem("welcomeClosed") === "1"); 
  const [windows, setWindows] = useState([]);
  //z-index 관리용 
  const zRef = useRef(100);

  //welcome 모달 자동 실행 
  useEffect(() => {
    if(!welcomeClosed) openWindow({ type : "welcome", title : "Welcome"});
  }, [welcomeClosed]);
  
  //열린 창 관리 state(배열)
  /* windows 안에 객체가 저장됨 
  {
    id: "projects-170...",
    type: "projects",
    title: "Projects",
    data: null,
    minimized: false,
    zIndex: 101
  }
   */


  //모달 관리 함수
  // 처음 모달이 열릴 때 화면 중앙에 오도록 설정 
  // project 모달 path 추가
  const openWindow = ({type , title, data, path}) => {
    setWindows((prev) => {

      //같은 창이 열려있는지 확인하기
      const existing = prev.find((i) => i.type === type);

      //열려있으면 새로 열지 않고 앞으로 올리기 
      if(existing) {
        return prev.map((i) => 
          i.type === type ? {...i, minimized: false, zIndex: ++zRef.current} : i
        );
      }

      const id = `${type}-${Date.now()}`;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      //모달 사이즈 지정
      const SIZE_MODAL = {
        welcome: {w:720, h:560},
        about: { w: 1000, h: 750 },
        playground: { w: 1000, h: 750 },
        projects: { w: 1000, h: 750 },
        contact: { w: 1000, h: 750 }
      };

      const {w:w0, h: h0} = SIZE_MODAL[type] || {w:1000, h:750};

      // 모달이 화면 밖으로 나가지 않도록 지정 
      // 화면보다 크면 자동으로 줄여서 밖으로 안나가도록 
      const bottomSafe = 90;

      //모달 열릴 때 계단식 구조, 가운데 정렬 
      const baseX = Math.max(0, (vw - w0) / 2);
      const baseY = Math.max(0, (vh -bottomSafe - h0) / 2);
      const offset = prev.length * 28;

      return [...prev, {
        id, type, title, data:data || null, path:path || undefined,
        minimized: false, zIndex : ++zRef.current,
        x:baseX + offset, y:baseY + offset, w: w0, h : h0,
      }];
    })
  }

  //모달 닫기 함수 
  const closeWindow = (id) => {
    // 특정 id 창을 배열에서 제거
    setWindows((prev) => {
      const target = prev.find((w) => w.id === id);

      //welcome 창이면 다시 못 열도록 
      if(target?.type === "welcome"){
        setWelcomeClosed(true);
        localStorage.setItem("welcomeClosed","1");
      }

      return prev.filter((w) => w.id !== id);
    });
  };

  //모달 앞으로 
  const focusWindow = (id) => {
    setWindows((prev) => 
      prev.map((w) => 
        w.id === id ? {...w,zIndex: ++zRef.current, minimized : false} : w
      )
    );
  };

  //모달 최소화 토글 (작업 표시줄 클릭 용도)
  const toggleMinimize = (id) => {
    setWindows((prev) => 
      prev.map((w) => {
        if(w.id !== id) return w;
        
        const nextMin = !w.minimized;
        return {
          ...w,
          minimized : nextMin,
          zIndex : nextMin ? w.zIndex : ++zRef.current,
        };
      })
    );
  };

  // 모달 위치 업데이트 함수
  const updateWindowPosition = (id, x, y) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w,x,y } : w))
    );
  };

  //project 폴더 클릭 시 경로 추가되도록 설정 
  const goProjectsInto = (id, key) => {
    setWindows((prev) => 
      prev.map((w) => 
        w.id === id
          ? {...w, path:[...(w.path || ["projects"]), key],
              minimized:false, zIndex : ++zRef.current}
          : w
      )
    );
  };

  //project 모달 내 뒤로가기 기능 
  const projectsBack = (id) => {
    setWindows((prev) => 
      prev.map((w) => {
        if(w.id !== id) return w;

        const path = w.path || ["projects"];
        //첫 화면이면 그대로 유지 
        if(path.length <= 1) return w;

        //테스트
        console.log("BACK 호출됨:", id);
        console.log("현재 path:", path);

        return {...w, path: path.slice(0, -1), zIndex: ++zRef.current};
      })
    );
  };



  return {windows, welcomeClosed, openWindow, closeWindow, focusWindow, toggleMinimize, updateWindowPosition,
    goProjectsInto, projectsBack, 
    //welcome 모달 열렸을 때 계산(딤 처리 위함)
    isWelcomeOpen : windows.some((i) => i.type === "welcome" & !i.minimized)
  };
};

export default useWindowManagement