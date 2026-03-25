// 화면 구성 컴포넌트

import useWindowManagement from "../hooks/useWindowManagement";
import Desktop from "./Desktop";
import WindowFrame from "./WindowFrame";
import Taskbar from "./Taskbar";
import Overlay from "./Overlay";
// import Playground from "../pages/Playground";


const WindowManager = () => {

  // useWindowManagement에서 필요한 데이터와 함수 뽑아오기
  const { 
    windows, welcomeClosed, openWindow,
    closeWindow, focusWindow, toggleMinimize, 
    updateWindowPosition, goProjectsInto, projectsBack, isWelcomeOpen 
  } = useWindowManagement();

  return (
    <>
      {/* 바탕화면 : 아이콘 클릭 시 openWindow 함수 호출  */}
      {/* Desktop 컴포넌트 내에서 아이콘 클릭 시 props로 넘긴 함수 openwindow가 실행 */}
      <Desktop onOpen={openWindow} welcomeClosed={welcomeClosed}/>

      {/* welcome 모달 열릴 때 딤 처리 */}
      {isWelcomeOpen && <Overlay/>}

      {/* 작업표시줄 */}
      <Taskbar windows={windows} onClickItem={toggleMinimize} />

      {/* 창 레이어 */}
      {windows
        .filter((w) => !w.minimized) // 최소화되지 않은 모달만 선택 
        .map((w) => (
          <WindowFrame
            key={w.id}
            win={w} //모달의 모든 정보(x,y,w,h)를 전달
            onClose={() => closeWindow(w.id)}
            onFocus={() => focusWindow(w.id)}
            onMinimize={() => toggleMinimize(w.id)}
            onMove={(x,y) => updateWindowPosition(w.id, x,y)} //위치 업데이트
            goProjectsInto={goProjectsInto}
            projectsBack={projectsBack}
          />
        ))}
    </>
    
  )
}

export default WindowManager