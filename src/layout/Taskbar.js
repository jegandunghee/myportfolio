// 열린 창 및 최소화된 창 아이콘을 표시하는 작업표시줄 컴포넌트
import "./Taskbar.scss";

const Taskbar = ({windows, onClickItem}) => {

  return (
    <div className="taskbar" role="toolbar" aria-label="taskbar">
      {windows.map((w) => (
        <button 
          key={w.id}
          type="button"
          className={`taskbar_item ${w.minimized ? "is-min" : "is-active"}`}
          onClick={() => onClickItem(w.id)}
          title={w.title}
        >
          <span className="taskbar_title">{w.title}</span>
        </button>
      ))}
    </div>
  )
}

export default Taskbar