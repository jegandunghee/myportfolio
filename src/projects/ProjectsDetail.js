import React from "react";
import { FiChevronLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import "./ProjectDetail.scss";

const TeamLayout = ({ item }) => (
  <div className="pDetail__team">
    {/* 메인 요약 및 태그 */}
    <section className="pDetail__intro">
      <p className="pDetail__summary">{item.summary}</p>
      <div className="pDetail__tags">
        {item.tags?.map((tag, i) => (
          <span key={i} className="pDetail__tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="pDetail__meta">
        <span>📅 {item.period}</span>
        <span>👥 {item.team}</span>
      </div>
      {/* 링크 버튼들 */}
      <div className="pDetail__links">
        {item.links?.site && (
          <a
            href={item.links.site}
            target="_blank"
            className="pDetail__btn pDetail__btn--primary"
          >
            <FiExternalLink size={14} /> 사이트 방문
          </a>
        )}
        {item.links?.github && (
          <a href={item.links.github} target="_blank" className="pDetail__btn">
            <FiGithub size={14} /> GitHub
          </a>
        )}
      </div>
    </section>

    {/* 담당 역할 (Card UI) */}
    <section className="pDetail__sec">
      <h3 className="pDetail__secTitle">담당 역할</h3>
      <div className="pDetail__cardGrid">
        {item.roles?.map((role, idx) => (
          <div key={idx} className="pDetail__card">
            <h4 className="pDetail__cardTitle">{role.title}</h4>
            <p className="pDetail__cardDesc">{role.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 주요 기능 (아이콘 포함 레이아웃) */}
    <section className="pDetail__sec">
      <h3 className="pDetail__secTitle">주요 기능 & 구현 포인트</h3>
      <div className="pDetail__featureList">
        {item.features?.map((f, idx) => (
          <div key={idx} className="pDetail__feature">
            <div className="pDetail__featureHeader">
              <span className="pDetail__featureTitle">{f.title}</span>
            </div>
            <p className="pDetail__featureDesc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* 목업 이미지 */}
    {item.images && (
      <section className="pDetail__sec">
        <h3 className="pDetail__secTitle">UI Implementation</h3>
        
        {/* 목업 이미지 배치 영역 */}
        <div className="pDetail__mockupWrap">
          {/* 데스크탑 목업 */}
          {item.images.desk && (
            <div className="pDetail__mockup pDetail__mockup--main">
              <img src={item.images.desk} alt={`${item.name} 데스크탑 목업`} loading="lazy" />
            </div>
          )}
          
          {/* 모바일 목업*/}
          {item.images.mobile && (
            <div className="pDetail__mockup pDetail__mockup--sub">
              <img src={item.images.mobile} alt={`${item.name} 모바일 목업`} loading="lazy" />
            </div>
          )}
        </div>
      </section>
    )}

    {/* 문제 해결 및 성찰 */}
    <section className="pDetail__sec">
      <h3 className="pDetail__secTitle">문제해결 및 성찰</h3>
      {item.troubleshooting?.map((ts, idx) => (
        <div key={idx} className="pDetail__ts">
          <div className="pDetail__tsLabel">ISSUE {idx + 1}</div>
          <h4 className="pDetail__tsTitle">{ts.issue}</h4>
          <div className="pDetail__tsContent">
            <p>
              <strong>Problem:</strong> {ts.problem}
            </p>
            <p>
              <strong>Solution:</strong> {ts.solution}
            </p>
            <p className="pDetail__takeaway">
              <strong>Key Takeaway:</strong> {ts.takeaway}
            </p>
          </div>
        </div>
      ))}
    </section>
  </div>
);

const PersonalLayout = ({ item }) => (
  <div className="pDetail__layout--personal">
    {/* 개인 프로젝트용 간결한 레이아웃 */}
    <div className="pDetail__desc">{item.desc}</div>
  </div>
);

const CloneLayout = ({ item }) => (
  <div className="pDetail__layout--clone">
    {/* 클론 코딩용 기술 스택 강조 레이아웃 */}
    <div className="pDetail__stack">{item.stack?.frontend}</div>
  </div>
);

const ProjectDetail = ({ folder, item, onBack }) => {
  if (!item) {
    return (
      <section className="pDetail" aria-label="project detail">
        <div className="pDetail__empty">상세 데이터를 찾을 수 없음</div>
      </section>
    );
  }

  return (
    <section className="pDetail" aria-label="project detail">
      {/* [공통] 상단 헤더 영역 */}
      <header className="pDetail__header">
        <button
          type="button"
          className="pDetail__back"
          onClick={onBack}
          aria-label="back"
        >
          <FiChevronLeft size={18} />
        </button>
        <div className="pDetail__titleWrap">
          <div className="pDetail__crumb">
            Projects <span className="pDetail__sep">/</span> {folder}
          </div>
          <div className="pDetail__title">{item.name}</div>
        </div>
      </header>

      {/*  폴더 타입 별 레이아웃 렌더링 */}
      <div className="pDetail__body">
        {folder === "team" && <TeamLayout item={item} />}
        {folder === "personal" && <PersonalLayout item={item} />}
        {folder === "clone" && <CloneLayout item={item} />}
      </div>
    </section>
  );
};

export default ProjectDetail;
