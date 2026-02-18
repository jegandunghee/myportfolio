// 바탕화면(배경 + 아이콘)을 렌더링하는 컴포넌트
// 아이콘 더블클릭 시 onOpen(type, title)을 호출해서 창을 연다.
import "./Desktop.scss";
import {  FaFolder, FaProjectDiagram, FaEnvelope, FaCode } from "react-icons/fa";


const Desktop = ({onOpen}) => {
  const icons = [
    { type: "about", title: "About me", Icon: FaFolder },
    { type: "playground", title: "Playground", Icon: FaCode },
    { type: "projects", title: "Projects", Icon: FaProjectDiagram },
    { type: "contact", title: "Connect", Icon: FaEnvelope },
  ];

  return (
    <div className="desktop" role="application" aria-label="desktop">
      <ul className="desktop_icons" aria-label="desktop icons">
        {icons.map(({type,title,Icon}) => (
          <li key={type} className="desktop_iconWrap">
            <button
              type="button"
              className="desktop_icon"
              onDoubleClick={() => onOpen({type, title})}
              title={`${title} 열기`}
            >
              <span className="desktop_iconImg" aria-hidden="true">
                <Icon/>
              </span>
              <span className="desktop_iconLabel">{title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Desktop