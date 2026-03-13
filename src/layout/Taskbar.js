// 열린 창 및 최소화된 창 아이콘을 표시하는 작업표시줄 컴포넌트
import { useEffect, useState } from "react";
import "./Taskbar.scss";

// 시계 로직을 분리하여 Taskbar 컴포넌트에 넣기 
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = time.toLocaleTimeString("ko-KR", {
    hour: "2-digit", minute: "2-digit", hour12: true 
  }).replace("AM", "오전").replace("PM", "오후");

  const dateStr = `${time.getFullYear()}-${String(time.getMonth() + 1).padStart(2, "0")}-${String(time.getDate()).padStart(2, "0")}`;

  return (
    <div className="taskbar__clock">
      <span className="clock__time">{timeStr}</span>
      <span className="clock__date">{dateStr}</span>
    </div>
  );
};

const Taskbar = ({ windows, onClickItem }) => {
  return (
    <div className="taskbar" role="toolbar" aria-label="taskbar">
      <div className="taskbar__left">
        {windows.map((w) => (
          <button
            key={w.id}
            className={`taskbar_item ${w.minimized ? "is-min" : "is-active"}`}
            onClick={() => onClickItem(w.id)}
          >
            <span className="taskbar_title">{w.title}</span>
          </button>
        ))}
      </div>

      <div className="taskbar__right">
        <Clock />
      </div>
    </div>
  );
};
export default Taskbar