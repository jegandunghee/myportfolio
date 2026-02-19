// OS 스타일 윈도우 프레임(타이틀바, 최소화/닫기 버튼, 콘텐츠 영역)을 구성하는 컴포넌트
// 창 뜨고 / 닫히고 / 최소화 되고 / 앞으로 오고 / 드래그 되는 기능 구현 
// UI 담당 컴포넌트 (직접 상태관리 x , props로 전달받음)
// WindowManager.js(부모)에서 넘긴 props로 동작함

import { useRef } from "react"
import { FiMinus, FiX } from "react-icons/fi";
import "./WindowFrame.scss";
import About from "../pages/About";
import Playground from "../pages/Playground";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Welcome from "../pages/Welcome";

//모달안에 내용 매핑하기 
const CONTENT_MAP = {
  welcome : Welcome,
  about : About, 
  playground: Playground,
  contact: Contact,
  projects: Projects,
};

// win : 창 하나의 데이터 객체 { id, title, x, y, w, h, zIndex, minimized, type, data }
// onFocus : z-index 값 올림으로 창 맨 앞으로 올리기
// onClose : 닫기 버튼 클릭 시 window배열에서 제거 
// onMinimize : 최소화 버튼 클릭 시 minimized 토글 
// onMove : 드래그 중 좌표 변경 시 부모 state(x,y) 업데이트 
// children : 창 안에 들어갈 내용들(about me, projects..)
const WindowFrame = ({win, onFocus, onClose, onMinimize, onMove,goProjectsInto,projectsBack}) => {

  //테스트 
  // console.log('현재 win 객체 : ', win);
  console.log("현재 경로 :",win.path)


  // 내용 매핑하기 
  const Content = CONTENT_MAP[win.type];

  const dragRef = useRef({
    //현재 드래그중인지
    dragging : false,
    //드래그 시작 순간 마우스 좌표
    startX : 0,
    startY: 0,
    //드래그 시작 순간 창의 좌표
    originX: 0,
    originY: 0,

  });

  const handleHeaderDown = (e) => {
    if(e.button !== 0) return;

    onFocus?.();

    dragRef.current.dragging = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.originX = win.x;
    dragRef.current.originY = win.y;

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  };

  //모달이 화면 밖으로 나가지 않도록 제한
  const clamp = (v, min, max) => Math.min(Math.max(v,min),max);

  const handleMove = (e) => {
    if(!dragRef.current.dragging) return;

    /*
    현재 마우스 위치 - 시작 마우스 위치 = 이동한 거리(dx,dy)
    시작 창 위치 + 이동거리 = 새로운 창 위치(x,y)
    */
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    let nextX = dragRef.current.originX + dx;
    let nextY = dragRef.current.originY + dy;

    //경계 제한
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    
    //타이틀바는 항상 보이도록 설정 
    const topSafe = 8;

    //하단은 taskbar 높이만큼 여유있도록 
    const bottomSafe = 50;

    //좌 우는 0 이상 
    const minX = 0;
    const minY = topSafe;

    //창이 화면 밖으로 못 나가게 
    const maxX = Math.max(0, vw - win.w);
    const maxY = Math.max(topSafe, vh - bottomSafe - win.h);

    nextX = clamp(nextX, minX, maxX);
    nextY = clamp(nextY, minY, maxY);


    onMove?.(nextX, nextY);
  };

  //마우스 떼고나면 창 이동 안되도록 지정
  const handleUp = () => {
    dragRef.current.dragging = false;
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("mouseup", handleUp);
  };

  //창 최소화되면 렌더x -> 작업표시줄에서 클릭하면 minimized가 false 되면서 창 나타남 
  if(win.minimized) return null;

  return (
    <div 
      className="window" 
      style={{
        zIndex: win.zIndex,
        transform: `translate(${win.x}px, ${win.y}px)`,
        width: win.w,
        height: win.h,
      }}
      onMouseDown={() => onFocus?.()}
    >
      <div className="window_header" onMouseDown={handleHeaderDown}>
        <div className="window_title">{win.title}</div>
        <div className="window_actions">
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMinimize?.(win.id);}}
            aria-label="minimize"
          > 
            <FiMinus size={16} />
          </button>
          
          <button 
          className="window__close"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.(win.id);
          }}
          >
            <FiX size={16} />
          </button>
        </div>
      </div>

      <div className="window_body">
        {Content ? 
          <Content 
            win={win}
            goProjectsInto={goProjectsInto}
            projectsBack={projectsBack}
          /> : (<div><p>내용을 불러올 수 없습니다.</p></div>)}
      </div>
    </div>

    /* preventDefault 
        브라우저 기본 동작 막기 
        -> 드래그할 때 텍스트가 드래그 선택되는 기본 동작 막기
          모바일에서 터치 스크롤 같은 기본 동작 막기

      stopPropagation() 
        이벤트 전파(버블링/캡쳐링) 막음
        -> 부모로 올라가는 이벤트 전달을 끊음 
    */
  )
}

export default WindowFrame