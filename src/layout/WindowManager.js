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
  //처음 한 번만 welcome 창 자동 오픈
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

  //창 열기 함수 
  const openWindow = ({type, title, data}) => {
    setWindows((prev) => {
      const id = `${type}-${Date.now()}`;
      const newWindow = {
        id,
        type,
        title,
        data: data || null,
        minimized: false,
        zIndex: ++zRef.current,
        x: 120 + prev.length * 24,
        y: 90 + prev.length * 24,
        w: 560,
        h: 420,
      };
      return [...prev, newWindow];
    });
  };

  //창 닫기 함수 
  const closeWindow = (id) => {
    // 특정 id 창을 배열에서 제거
    setWindows((prev) => {
      const target = prev.find((w) => w.id === id);

      //welcome 창이면 다시 못 열도록 
      if(target?.type === "wlecome"){
        setWelcomeClosed(true);
        localStorage.setItem("welcomeClosed","1");
      }

      return prev.filter((w) => w.id !== id);
    });
  };

  //창 앞으로 
  const focusWindow = (id) => {
    setWindows((prev) => 
      prev.map((w) => 
        w.id === id ? {...w,zIndex: ++zRef.current, minimized : false} : w
      )
    );
  };

  //최소화 토글 (작업 표시줄 클릭 용도)
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

  //위치 업데이트 함수
  const updateWindowPosition = (id, position) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, ...position } : w))
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
            onMove={updateWindowPosition}
          >
            {/* type 별 컴포넌트 지정 */}
            <div style={{ padding: "1rem" }}>{w.type} window</div>

          </WindowFrame>
        ))}
    </>
    
  )
}

export default WindowManager