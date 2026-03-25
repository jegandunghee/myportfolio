// 로직의 재사용성, 코드의 구조화를 위한 커스텀 훅 제작
// 데스크탑 창 관리

import { useEffect, useState, useRef } from "react";

// 모달 크기 지정
const MODAL_SIZE = {
  welcome: { maxW: 720, minW: 400,  H: 560 },
  about: { maxW: 1000, minW: 500,  H: 750 },
  playground: { maxW: 1000, minW: 500,  H: 750 },
  projects: { maxW: 1000, minW: 500,  H: 750 },
  contact: { maxW: 1000, minW: 400,  H: 750 },
};
//공통 상수 지정 
const BOTTOM_SAFE = 90;
const TOP_SAFE = 40;

const useWindowManagement = () => {
  //welcome 창 닫았는지 확인하는 state
  const [welcomeClosed, setWelcomeClosed] = useState(
    localStorage.getItem("welcomeClosed") === "1",
  );
  //열려있는 모달의 정보(배열 형식) state ->  id, title,,,등의 객체 저장
  const [windows, setWindows] = useState([]);
  //z-index 관리용
  const zRef = useRef(100);
  // 브라우저 현재 너비 관리 state
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  //브라우저의 너비 변화 감지 이벤트
  useEffect(() => {
    const handleResize = () => setBrowserWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // 클린업
  }, []);

  // 브라우저 너비가 바뀔 때마다 열린 모달 크기 및 위치 업데이트
  useEffect(() => {
    setWindows((prev) =>
      prev.map((i) => {
        const config = MODAL_SIZE[i.type] || { maxW : 1000, minW : 500, H : 750 };

        // 너비 계산: 브라우저 90% 와 최대치 중 작은 값 -> 그 결과와 최소치 중 큰 값 선택
        // 최소 ~ 최대 사이에서만 크기 변하도록 지정
        let newWidth = Math.max(
          config.minW,
          Math.min(config.maxW, browserWidth * 0.8),
        );

        // 모달 잘리지 않도록 방지하기
        let nextX = i.x;
        if (nextX + newWidth > browserWidth) {
          // nextX : 브라우저 너비 - 모달 너비
          nextX = Math.max(0, browserWidth - newWidth);
        }

        //높이 계산 
        const vh = window.innerHeight;
        let newHeight = Math.min(i.h, vh -BOTTOM_SAFE - TOP_SAFE);

        // 변경된 좌표값 반환하기
        return { ...i, w: newWidth, h: newHeight, x: nextX };
      }),
    );
  }, [browserWidth]);

  //welcome 모달 자동 실행
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

  //모달 관리 함수
  // 처음 모달이 열릴 때 화면 중앙에 오도록 설정
  // project 모달 path 추가
  const openWindow = ({ type, title, data, path }) => {
    setWindows((prev) => {
      //같은 창이 열려있는지 확인하기
      const existing = prev.find((i) => i.type === type);

      //열려있으면 새로 열지 않고 앞으로 올리기
      if (existing) {
        return prev.map((i) =>
          i.type === type
            ? { ...i, minimized: false, zIndex: ++zRef.current }
            : i,
        );
      }

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const config = MODAL_SIZE[type] || { maxW : 1000, H : 750};


      //모달 열릴 때 기본 최대 크기 설정
      const initW = Math.min(config.maxW, vw*0.9);
      const initH = config.H;


      //모달 열릴 때 계단식 구조, 가운데 정렬
      const baseX = Math.max(0, (vw - initW) / 2);
      const baseY = Math.max(0, (vh - BOTTOM_SAFE - initH) / 2);
      const offset = prev.length * 28;

      return [
        ...prev,
        {
          id : `${type}-${Date.now()}`,
          type,
          title,
          data: data || null,
          path: path || undefined,
          minimized: false,
          zIndex: ++zRef.current,
          x: baseX + offset,
          y: baseY + offset,
          w: initW,
          h: initH,
        },
      ];
    });
  };

  //모달 닫기 함수
  const closeWindow = (id) => {
    // 특정 id 창을 배열에서 제거
    setWindows((prev) => {
      const target = prev.find((w) => w.id === id);

      //welcome 창이면 다시 못 열도록
      if (target?.type === "welcome") {
        setWelcomeClosed(true);
        localStorage.setItem("welcomeClosed", "1");
      }

      return prev.filter((w) => w.id !== id);
    });
  };

  //모달 앞으로
  const focusWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: ++zRef.current, minimized: false } : w,
      ),
    );
  };

  //모달 최소화 토글 (작업 표시줄 클릭 용도)
  const toggleMinimize = (id) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id !== id) return w;

        const nextMin = !w.minimized;
        return {
          ...w,
          minimized: nextMin,
          zIndex: nextMin ? w.zIndex : ++zRef.current,
        };
      }),
    );
  };

  // 모달 위치 업데이트 함수
  const updateWindowPosition = (id, x, y) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
  };

  //project 폴더 클릭 시 경로 추가되도록 설정
  const goProjectsInto = (id, key) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              path: [...(w.path || ["projects"]), key],
              minimized: false,
              zIndex: ++zRef.current,
            }
          : w,
      ),
    );
  };

  //project 모달 내 뒤로가기 기능
  const projectsBack = (id) => {
    setWindows((prev) =>
      prev.map((w) => {
        if (w.id !== id) return w;

        const path = w.path || ["projects"];
        //첫 화면이면 그대로 유지
        if (path.length <= 1) return w;

        //테스트
        console.log("BACK 호출됨:", id);
        console.log("현재 path:", path);

        return { ...w, path: path.slice(0, -1), zIndex: ++zRef.current };
      }),
    );
  };

  return {
    windows,
    welcomeClosed,
    openWindow,
    closeWindow,
    focusWindow,
    toggleMinimize,
    updateWindowPosition,
    goProjectsInto,
    projectsBack,
    //welcome 모달 열렸을 때 계산(딤 처리 위함)
    isWelcomeOpen: windows.some((i) => (i.type === "welcome") && !i.minimized),
  };
};

export  default useWindowManagement;
