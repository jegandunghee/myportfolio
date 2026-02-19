// 열린 창 목록, active 창, z-index, 최소화 및 이동 상태를 관리하는 윈도우 상태 관리 훅
// Desktop(바탕화면), WindowFrame(창 UI), Taskbar(작업표시줄)를 조합해서 OS 레이아웃 만드는 컴포넌트

import { useEffect, useRef, useState } from "react"
import Desktop from "./Desktop";
import WindowFrame from "./WindowFrame";
import Taskbar from "./Taskbar";


const WindowManager = () => {

  //처음 접속 시 보여지는 welcome 창 관리 state 
  // 새로고침해도 다시 안보여지도록 localstorage로 관리 
  const [welcomeClosed, setWelcomeClosed] = useState(
    localStorage.getItem("welcomeClosed") === "1"
  );
  //처음 한 번만 welcome 모달 자동 오픈
  useEffect(() => {
    if (!welcomeClosed) openWindow({ type: "welcome", title: "Welcome" });
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
  const [windows, setWindows] = useState([ ]);

  //z-index 관리용 
  const zRef = useRef(100);

  //모달 열기 함수 
  // 처음 모달이 열릴 때 화면 중앙에 오도록 설정 
  // project 모달 path 추가 
  const openWindow = ({type, title, data, path}) => {
    setWindows((prev) => {

      //같은 창이 열려있는지 확인하기 
      const existing = prev.find((w) => w.type === type);

      //열려있으면 새로 열지 않고 앞으로 올리기 
      if(existing){
        return prev.map((w) => 
          w.type === type
            ?{...w, minimized: false, zIndex: ++zRef.current}
            :w
        );
      }


      const id = `${type}-${Date.now()}`;

      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const w0 = 560;
      const h0 = 420;
      const bottomSafe = 90;

      const baseX = Math.max(0, (vw - w0) /2);
      const baseY = Math.max(8, (vh - bottomSafe - h0) /2);

      const offset = prev.length * 28;

      
      const newWindow = {
        id,
        type,
        title,
        data: data || null,
        path : path || undefined,
        minimized: false,
        zIndex: ++zRef.current,
        x: baseX + offset,
        y: baseY + offset,
        w: w0,
        h: h0,
      };
      return [...prev, newWindow];
    });
  };

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


  return (
    <>
      {/* 바탕화면 : 아이콘 클릭 시 openWindow 함수 호출  */}
      {/* Desktop 컴포넌트 내에서 아이콘 클릭 시 props로 넘긴 함수 openwindow가 실행 */}
      <Desktop onOpen={openWindow} welcomeClosed={welcomeClosed}/>

      {/* 작업표시줄 */}
      <Taskbar windows={windows} onClickItem={toggleMinimize} />

      {/* 창 레이어 */}
      {windows
        .filter((w) => !w.minimized)
        .map((w) => (
          <WindowFrame
            key={w.id}
            win={w}
            onClose={() => closeWindow(w.id)}
            onFocus={() => focusWindow(w.id)}
            onMinimize={() => toggleMinimize(w.id)}
            onMove={(x,y) => updateWindowPosition(w.id, x,y)}
            goProjectsInto={goProjectsInto}
            projectsBack={projectsBack}
          />
        ))}
    </>
    
  )
}

export default WindowManager