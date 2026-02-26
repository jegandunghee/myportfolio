// 자기소개 및 기술 요약을 표시하는 About 섹션 컴포넌트
import { skillsData, keywords } from "../data/aboutData";
import "./about.scss";

const About = () => {
  return (
    <section className="page about">
      <div className="page__body about__body">
        {/* TOP */}
        <div className="about__top">
          <aside className="about__profile">
            <div className="about__avatar" />
            <div className="about__nameWrap">
              <p className="about__name">정재희</p>
              <p className="about__role">웹 퍼블리셔 &amp; 프론트엔드 개발자</p>
            </div>
          </aside>

          <article className="about__intro">
            <h3 className="about__headline">Error 404: Guesswork not found.</h3>
            <p className="about__sub">대충 만든 결과물은 존재하지 않습니다</p>

            <div className="about__desc">
              <p>
                디자인 의도를 정확하게 코드로 옮기는 과정에 집중합니다. 빠르게
                구현하는 것보다, 구조와 유지보수를 먼저 고려한 마크업과 컴포넌트
                설계를 목표로 합니다.
              </p>
              <p>
                아직 실무 경험은 없지만, 작은 기능 단위로 직접 만들고 깨보는
                과정을 반복하며 피드백을 반영해 개선하는 루프에 익숙해지는
                단계입니다.
              </p>
            </div>
          </article>
        </div>

        {/* KEYWORDS */}
        <section className="about__section">
          <p className="about__label">KEYWORDS</p>
          <ul className="about__chips">
            {keywords.map((item) => (
              <li key={item} className="about__chip">
                #{item}
              </li>
            ))}
          </ul>
        </section>

        <div className="about__divider" />

        {/* SKILLS */}
        <section className="about__section">
          <p className="about__label">SKILLS</p>

          <div className="about__cards">
            {skillsData.map((card) => (
              <div
                key={card.title}
                className={`aboutCard ${card.wide ? "aboutCard--wide" : ""}`}
              >
                <div className="aboutCard__head">
                  <span className="aboutCard__icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <h4 className="aboutCard__title">{card.title}</h4>
                </div>

                <ul className="aboutCard__tags">
                  {card.tags.map((tag) => (
                    <li key={tag} className="aboutTag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="about__cta">
            <a
              className="about__btn"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub ↗
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
