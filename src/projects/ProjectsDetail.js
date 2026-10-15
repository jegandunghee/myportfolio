import React from "react";
import {
  FiChevronLeft,
  FiExternalLink,
  FiGithub,
  FiArrowRight,
  FiCalendar,
  FiUsers,
  FiUser,
} from "react-icons/fi";
import "./ProjectDetail.scss";

const TeamLayout = ({ item }) => (
  <div className="pDetail__team">
    {/* 상단 2열 영역 (좌측: 개요/태그/메타/버튼, 우측: 목업 이미지) */}
    <div className="pDetail__topRow">
      {/* [좌측 컬럼]: 프로젝트 타이틀, 한 줄 요약, 기술 태그 뱃지, 기간/인원 메타 정보, 링크 버튼 */}
      <section className="pDetail__intro">
        <h2 className="pDetail__name">{item.name}</h2>
        <p className="pDetail__summary">{item.summary}</p>
        
        <div className="pDetail__tags">
          {item.tags?.map((tag, i) => (
            <span key={i} className="pDetail__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="pDetail__meta">
          <span><FiCalendar size={15} className="pDetail__metaIcon" /> {item.period}</span>
          <span><FiUsers size={15} className="pDetail__metaIcon" /> {item.team}</span>
        </div>

        {/* 링크 버튼들 */}
        <div className="pDetail__links">
          {item.links?.site && (
            <a
              href={item.links.site}
              target="_blank"
              rel="noreferrer"
              className="pDetail__btn pDetail__btn--primary"
            >
              <FiExternalLink size={16} /> 링크
            </a>
          )}
          {item.links?.github && (
            <a
              href={item.links.github}
              target="_blank"
              rel="noreferrer"
              className="pDetail__btn"
            >
              <FiGithub size={16} /> GitHub
            </a>
          )}
        </div>
      </section>

      {/* [우측 컬럼]: 디바이스 목업 이미지 (첫 화면에서 즉시 확인 가능) */}
      {item.images && (
        <aside className="pDetail__topMockup">
          <div className="pDetail__mockupWrap">
            {/* 데스크탑 목업 */}
            {item.images.desk && (
              <div className="pDetail__mockup pDetail__mockup--main">
                <img src={item.images.desk} alt={`${item.name} 데스크탑 목업`} loading="lazy" />
              </div>
            )}
            
            {/* 모바일 목업 */}
            {item.images.mobile && (
              <div className="pDetail__mockup pDetail__mockup--sub">
                <img src={item.images.mobile} alt={`${item.name} 모바일 목업`} loading="lazy" />
              </div>
            )}
          </div>
        </aside>
      )}
    </div>

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

    {/* 주요 기능 & 구현 포인트 */}
    {item.features && item.features.length > 0 && (
      <section className="pDetail__sec">
        <h3 className="pDetail__secTitle">주요 기능 &amp; 구현 포인트</h3>
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
    )}

    {/* 문제 해결 및 성찰 */}
    <section className="pDetail__sec">
      <h3 className="pDetail__secTitle">문제해결 및 성찰</h3>
      {item.troubleshooting?.map((ts, idx) => (
        <div key={idx} className="pDetail__ts">
          <div className="pDetail__tsLabel">ISSUE</div>
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
  <div className="pDetail__team pDetail__personal">
    {/* 상단 2열 영역 (목업 이미지가 있을 경우 2열 분할) */}
    <div className={item.images ? "pDetail__topRow" : "pDetail__topSingle"}>
      {/* [좌측 컬럼]: 1인 개발 프로젝트 개요 & 메타 */}
      <section className="pDetail__intro">
        {item.badge && (
          <span className="pDetail__badge">
            {item.badge}
          </span>
        )}
        <h2 className="pDetail__name">{item.name}</h2>
        {item.subtitle && <p className="pDetail__sub">{item.subtitle}</p>}
        <p className="pDetail__summary">{item.summary}</p>

        {/* 기술 스택 태그 뱃지 */}
        <div className="pDetail__tags">
          {item.tags?.map((tag, i) => (
            <span key={i} className="pDetail__tag">
              {tag}
            </span>
          ))}
        </div>

        {/* 기간 및 1인 개발 메타 정보 */}
        <div className="pDetail__meta">
          <span><FiCalendar size={15} className="pDetail__metaIcon" /> {item.period}</span>
          {item.team && <span><FiUser size={15} className="pDetail__metaIcon" /> {item.team}</span>}
        </div>

        {/* 링크 액션 버튼들 (데모 & GitHub) */}
        <div className="pDetail__links">
          {(item.links?.demo || item.links?.site) && (
            <a
              href={item.links.demo || item.links.site}
              target="_blank"
              rel="noreferrer"
              className="pDetail__btn pDetail__btn--primary"
            >
              <FiExternalLink size={16} /> 링크
            </a>
          )}
          {item.links?.github && (
            <a
              href={item.links.github}
              target="_blank"
              rel="noreferrer"
              className="pDetail__btn"
            >
              <FiGithub size={16} /> GitHub
            </a>
          )}
        </div>
      </section>

      {/* [우측 컬럼]: 모바일 디바이스 목업 이미지 (첫 화면에서 즉시 확인 가능) */}
      {item.images?.mobile && (
        <aside className="pDetail__topMockup pDetail__topMockup--mobileOnly">
          <div className="pDetail__mockupWrap">
            <div className="pDetail__mockup pDetail__mockup--singleMobile">
              <img
                src={item.images.mobile}
                alt={`${item.name} 모바일 목업`}
                loading="lazy"
              />
            </div>
          </div>
        </aside>
      )}
    </div>

    {/* UI/UX 설계 및 퍼블리싱 포인트 */}
    {item.designPoints && item.designPoints.length > 0 && (
      <section className="pDetail__sec">
        <h3 className="pDetail__secTitle">UI/UX 설계 및 퍼블리싱 포인트</h3>
        <div className="pDetail__cardGrid">
          {item.designPoints.map((point, idx) => (
            <div key={idx} className="pDetail__card">
              <h4 className="pDetail__cardTitle">{point.title}</h4>
              <p className="pDetail__cardDesc">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* 주요 기능 및 아키텍처 */}
    {item.features && item.features.length > 0 && (
      <section className="pDetail__sec">
        <h3 className="pDetail__secTitle">주요 기능 및 아키텍처</h3>
        <div className="pDetail__featureList">
          {item.features.map((f, idx) => (
            <div key={idx} className="pDetail__feature">
              <div className="pDetail__featureHeader">
                <span className="pDetail__featureTitle">{f.title}</span>
              </div>
              <p className="pDetail__featureDesc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* 문제해결 및 성찰 (트러블슈팅) */}
    {item.troubleshooting && item.troubleshooting.length > 0 && (
      <section className="pDetail__sec">
        <h3 className="pDetail__secTitle">문제해결 및 성찰</h3>
        {item.troubleshooting.map((ts, idx) => (
          <div key={idx} className="pDetail__ts">
            <div className="pDetail__tsLabel">ISSUE</div>
            <h4 className="pDetail__tsTitle">{ts.issue}</h4>
            <div className="pDetail__tsContent">
              <p>
                <strong>Problem:</strong> {ts.problem}
              </p>
              <p>
                <strong>Solution:</strong> {ts.solution}
              </p>
              {ts.takeaway && (
                <p className="pDetail__takeaway">
                  <strong>Key Takeaway:</strong> {ts.takeaway}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    )}
  </div>
);

const ShowcaseLayout = ({ item }) => (
  <div className="pDetail__showcase">
    {/* 1. 상단 미니멀 헤더 & 메타 바 */}
    <section className="pDetail__showcaseHeader">
      <div className="pDetail__showcaseTitleArea">
        <h2 className="pDetail__name">{item.name}</h2>
        {item.subtitle && (
          <p className="pDetail__showcaseSub">“{item.subtitle}”</p>
        )}
      </div>

      <div className="pDetail__showcaseMetaRow">
        {/* 뱃지 태그 */}
        <div className="pDetail__tags">
          {item.tags?.map((tag, i) => (
            <span key={i} className="pDetail__tag">
              {tag}
            </span>
          ))}
        </div>

        {/* 액션 링크 */}
        <div className="pDetail__links">
          {(item.links?.demo || item.links?.site) && (
            <a
              href={item.links.demo || item.links.site}
              target="_blank"
              rel="noreferrer"
              className="pDetail__btn pDetail__btn--primary"
            >
              <FiExternalLink size={16} /> 사이트 바로가기
            </a>
          )}
          {item.links?.github && (
            <a
              href={item.links.github}
              target="_blank"
              rel="noreferrer"
              className="pDetail__btn"
            >
              <FiGithub size={16} /> GitHub
            </a>
          )}
        </div>
      </div>
    </section>

    {/* 2. 메인 시네마틱 데스크톱 뷰포트 (Wide Screen Stage) */}
    <section className="pDetail__showcaseStage" aria-label="시네마틱 데스크톱 프리뷰">
      <div className="pDetail__browserFrame">
        <div className="pDetail__browserBar">
          <div className="pDetail__browserDots" aria-hidden="true">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <div className="pDetail__browserAddress">
            <span className="pDetail__browserUrl">ifmoon.vercel.app</span>
          </div>
        </div>
        <div className="pDetail__browserScreen">
          <img
            src={item.images?.desk}
            alt={`${item.name} 데스크톱 인터랙션 모션`}
            className="pDetail__browserMedia"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    {/* 3. 하단 3-Phases 타임라인 바 (수평 3열 인터랙션 플로우) */}
    {item.phases && item.phases.length > 0 && (
      <section className="pDetail__showcaseTimeline" aria-label="3-Phase 인터랙션 타임라인">
        <div className="pDetail__timelineFlow">
          {item.phases.map((phase, idx) => (
            <React.Fragment key={idx}>
              <div className="pDetail__phaseCard">
                <div className="pDetail__phaseHeader">
                  <span className="pDetail__phaseStep">{phase.step}</span>
                </div>
                <div className="pDetail__phaseKeywords">
                  {phase.keywords?.map((kw, kIdx) => (
                    <span key={kIdx} className="pDetail__phaseTag">
                      {kw}
                    </span>
                  ))}
                </div>
                <p className="pDetail__phaseDesc">{phase.desc}</p>
              </div>

              {idx < item.phases.length - 1 && (
                <div className="pDetail__phaseArrow" aria-hidden="true">
                  <FiArrowRight size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    )}
  </div>
);

const LearningLabLayout = ({ item }) => (
  <div className="pDetail__lab">
    {/* [좌측 컬럼]: 태블릿 디바이스 스테이지 */}
    <section className="pDetail__labStage" aria-label="태블릿 라이브 스테이지">
      <div className="pDetail__tabletStickyWrap">
        <div className="pDetail__tabletFrame">
          {/* 태블릿 상단 카메라 도트 */}
          <div className="pDetail__tabletCamera" aria-hidden="true">
            <span className="dot dot--lens" />
          </div>

          {/* 태블릿 스크린 */}
          <div className="pDetail__tabletScreen">
            <img
              src={item.media?.src || item.images?.desk || item.images?.tablet}
              alt={`${item.name} 태블릿 시연 화면`}
              className="pDetail__tabletMedia"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* [우측 컬럼]: UX 콘솔 및 상세 설명 */}
    <section className="pDetail__labConsole" aria-label="UX 인터랙션 콘솔">
      {/* 1. 프로젝트 개요 & 헤더 */}
      <div className="pDetail__labHeader">
        {item.badge && (
          <span className="pDetail__badge">{item.badge}</span>
        )}
        <h2 className="pDetail__name">{item.name}</h2>
        {item.subtitle && (
          <p className="pDetail__labSub">“{item.subtitle}”</p>
        )}

        {/* 기술 스택 태그 */}
        <div className="pDetail__tags">
          {item.tags?.map((tag, i) => (
            <span key={i} className="pDetail__tag">
              {tag}
            </span>
          ))}
        </div>

        {/* 메타 정보 */}
        <div className="pDetail__meta">
          <span><FiCalendar size={15} className="pDetail__metaIcon" /> {item.period}</span>
          {item.team && <span><FiUser size={15} className="pDetail__metaIcon" /> {item.team}</span>}
        </div>

        {/* 액션 링크 */}
        <div className="pDetail__links">
          {(item.links?.demo || item.links?.site) && (
            <a
              href={item.links.demo || item.links.site}
              target="_blank"
              rel="noreferrer"
              className="pDetail__btn pDetail__btn--primary"
            >
              <FiExternalLink size={16} /> 데모 바로가기
            </a>
          )}
          {item.links?.github && (
            <a
              href={item.links.github}
              target="_blank"
              rel="noreferrer"
              className="pDetail__btn"
            >
              <FiGithub size={16} /> GitHub
            </a>
          )}
        </div>
      </div>

      {/* 2. 중단 프로젝트 개요 설명 (description) */}
      {item.description && (
        <div className="pDetail__labDescBox">
          <h3 className="pDetail__labSecTitle">프로젝트 개요</h3>
          <p className="pDetail__labDescText">{item.description}</p>
        </div>
      )}

      {/* 3. 하단 주요 사용자 경험 및 인터랙션 포인트 (세로 라인 리스트) */}
      {item.uxHighlights && item.uxHighlights.length > 0 && (
        <div className="pDetail__labHighlights">
          <h3 className="pDetail__labSecTitle">주요 사용자 경험 및 인터랙션 포인트</h3>
          <div className="pDetail__labHighlightList">
            {item.uxHighlights.map((hl, idx) => (
              <div key={idx} className="pDetail__labHighlightItem">
                <div className="pDetail__labHighlightNum">{hl.num || `0${idx + 1}`}</div>
                <div className="pDetail__labHighlightContent">
                  <h4 className="pDetail__labHighlightTitle">{hl.title}</h4>
                  <p className="pDetail__labHighlightDesc">{hl.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  </div>
);

const CloneLayout = ({ item }) => (
  <div className="pDetail__matrix">
    {/* 1. 상단 인라인 헤더 바 (Top Meta Strip) */}
    <section className="pDetail__matrixHeader">
      <div className="pDetail__matrixTitleCol">
        {item.badge && <span className="pDetail__badge">{item.badge}</span>}
        <h2 className="pDetail__name">{item.name}</h2>
        {item.subtitle && <p className="pDetail__matrixSub">“{item.subtitle}”</p>}

        {/* 태그 목록 */}
        <div className="pDetail__tags">
          {item.tags?.map((tag, i) => (
            <span key={i} className="pDetail__tag">
              {tag}
            </span>
          ))}
        </div>

        {/* 기간 및 1인 제작 메타 정보 */}
        <div className="pDetail__meta">
          <span>
            <FiCalendar size={15} className="pDetail__metaIcon" /> {item.period}
          </span>
          {item.team && (
            <span>
              <FiUser size={15} className="pDetail__metaIcon" /> {item.team}
            </span>
          )}
        </div>
      </div>

      {/* 우측 인라인 액션 링크 버튼들 */}
      {(item.links?.demo || item.links?.site || item.links?.github) && (
        <div className="pDetail__links pDetail__matrixLinks">
          {(item.links?.demo || item.links?.site) && (
            <a
              href={item.links.demo || item.links.site}
              target="_blank"
              rel="noreferrer"
              className="pDetail__btn pDetail__btn--primary"
            >
              <FiExternalLink size={16} /> 링크
            </a>
          )}
          {item.links?.github && (
            <a
              href={item.links.github}
              target="_blank"
              rel="noreferrer"
              className="pDetail__btn"
            >
              <FiGithub size={16} /> GitHub
            </a>
          )}
        </div>
      )}
    </section>

    {/* 2. 중앙 풀 와이드 목업 스테이지 */}
    {(item.mockupImg || item.images?.desk) && (
      <section className="pDetail__matrixStage" aria-label={`${item.title} 목업 프리뷰`}>
        <div className="pDetail__matrixMockupWrap">
          <img
            src={item.mockupImg || item.images?.desk}
            alt={`${item.name} 데스크탑 목업`}
            className="pDetail__matrixMockupImg"
            loading="lazy"
          />
        </div>
      </section>
    )}

    {/* 3. 하단 4분할 주요 구현 포인트 그리드 */}
    {(item.matrixFeatures || item.keyFeatures) && (
      <section className="pDetail__matrixSec" aria-label="주요 구현 포인트">
        <h3 className="pDetail__secTitle">주요 구현 포인트</h3>
        <div className="pDetail__matrixGrid">
          {(item.matrixFeatures || item.keyFeatures).map((feat, idx) => (
            <div key={idx} className="pDetail__matrixCard">
              <div className="pDetail__matrixCardHeader">
                <span className="pDetail__matrixCardNum">{feat.num || `0${idx + 1}`}</span>
                <h4 className="pDetail__matrixCardTitle">{feat.title}</h4>
              </div>
              <p className="pDetail__matrixCardDesc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )}
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
        {folder === "personal" && (
          item.layout === "showcase" || item.id === "ifmoon" ? (
            <ShowcaseLayout item={item} />
          ) : item.layout === "splitLab" || item.id === "quiz" ? (
            <LearningLabLayout item={item} />
          ) : (
            <PersonalLayout item={item} />
          )
        )}
        {folder === "clone" && <CloneLayout item={item} />}
      </div>
    </section>
  );
};

export default ProjectDetail;
