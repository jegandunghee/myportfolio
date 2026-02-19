// 프로젝트 목록을 카드 또는 리스트 형태로 렌더링하는 컴포넌트

import { FiChevronLeft, FiFileText } from "react-icons/fi";
import "./ProjectList.scss";

/*
  items 예시
  [
    { id:"zari", name:"Zari-It-O", date:"2026-02-10", kind:"file" },
    { id:"sub", name:"subFolder", kind:"folder" }
  ]
 */

const ProjectsList = ({ folder, items = [], onBack, onOpenDetail }) => {
  return (
    <section className="pList" aria-label="projects list">
      <header className="pList__header">
        <button type="button" className="pList__back" onClick={onBack} aria-label="back">
          <FiChevronLeft size={18} />
        </button>

        <div className="pList__crumb">
          Projects <span className="pList__sep">/</span> {folder}
        </div>
      </header>

      <div className="pList__table">
        <div className="pList__row pList__row--head">
          <div className="pList__cell pList__cell--name">이름</div>
          <div className="pList__cell pList__cell--date">수정한 날짜</div>
        </div>

        {items.length === 0 ? (
          <div className="pList__empty">목록이 비어있음</div>
        ) : (
          items.map((i) => (
            <button
              key={i.id}
              type="button"
              className="pList__row pList__row--item"
              onDoubleClick={() => onOpenDetail?.(i.id)}
            >
              <div className="pList__cell pList__cell--name">
                <span className="pList__icon" aria-hidden="true">
                  <FiFileText size={16} />
                </span>
                <span className="pList__name">{i.name}</span>
                {i.status === "todo" && <span className="pList__badge">TODO</span>}
              </div>
              <div className="pList__cell pList__cell--date">{i.date || "-"}</div>
            </button>
          ))
        )}
      </div>
    </section>
  );
};

export default ProjectsList;