// import React from "react";
import { FiChevronLeft, FiExternalLink } from "react-icons/fi";
import "./ProjectDetail.scss";

const ProjectsDetail = ({ folder, item, onBack }) => {
  if (!item) {
    return (
      <section className="pDetail" aria-label="project detail">
        <div className="pDetail__empty">상세 데이터를 찾을 수 없음</div>
      </section>
    );
  }

  return (
    <section className="pDetail" aria-label="project detail">
      <header className="pDetail__header">
        <button type="button" className="pDetail__back" onClick={onBack} aria-label="back">
          <FiChevronLeft size={18} />
        </button>

        <div className="pDetail__titleWrap">
          <div className="pDetail__crumb">
            Projects <span className="pDetail__sep">/</span> {folder}
          </div>
          <div className="pDetail__title">{item.name}</div>
        </div>
      </header>

      <div className="pDetail__body">
        {!item.desc && !item.stack && !item.link && (
          <p className="pDetail__desc">
            상세 페이지 준비중. (프로젝트 설명/기술스택/링크는 추후 업데이트 예정)
          </p>
        )}

        {item.desc && <p className="pDetail__desc">{item.desc}</p>}

        {item.stack && (
          <div className="pDetail__row">
            <div className="pDetail__key">Stack</div>
            <div className="pDetail__val">{item.stack}</div>
          </div>
        )}

        {item.link && (
          <div className="pDetail__row">
            <div className="pDetail__key">Link</div>
            <a className="pDetail__link" href={item.link} target="__blank" rel="noreferrer">
              <span className="pDetail__linkText">{item.link}</span>
              <FiExternalLink size={14} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsDetail;