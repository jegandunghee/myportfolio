// 자기소개 및 기술 요약을 표시하는 About 섹션 컴포넌트
import { skillsData, keywords, educationData, certificationsData } from "../data/aboutData";
import profileImg from "../assets/images/profile.png";
import "./about.scss";

const About = () => {
  return (
    <section className="page about">
      <div className="page__body about__body">
        {/* TOP */}
        <div className="about__top">
          <aside className="about__profile">
            <div className="about__avatar">
              <img src={profileImg} alt="정재희 프로필 사진" className="about__avatarImg" />
            </div>
            <div className="about__nameWrap">
              <p className="about__name">정재희</p>
              <p className="about__role">웹 디자이너 &amp; 웹 퍼블리셔</p>
            </div>
          </aside>

          <article className="about__intro">
            <h3 className="about__headline">No Compromise on Pixels.</h3>
            <p className="about__sub">타협한 디테일은 결과물에 남기지 않습니다.</p>

            <div className="about__desc">
              <p>
                브라우저 해상도와 디바이스 환경에 구애받지 않고 일관된 사용성을 제공하도록 화면을 설계하는 웹 디자이너 정재희입니다.
              </p>
              <p>
                Figma 설계 단계부터 컴포넌트 단위로 모듈화하고, 로딩·에러 등 예외 상황까지 고려한 UI 가이드를 정의해 구현 오차를 줄입니다.
              </p>
              <p>
                설계한 화면을 직접 마크업하고 테스트하며 발견한 문제점을 즉각 개선하는 과정을 거쳐 완성도 높은 인터페이스를 구축합니다.
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

        {/* [1] SKILLS */}
        <section className="about__section">
          <p className="about__label">SKILLS</p>

          <div className="about__cards">
            {skillsData.map((card) => (
              <div
                key={card.title}
                className="aboutCard"
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
        </section>

        <div className="about__divider" />

        {/* [2] EDUCATION */}
        <section className="about__section">
          <p className="about__label">EDUCATION</p>
          <ul className="about__timeline">
            {educationData.map((edu, idx) => (
              <li key={idx} className="aboutInfoCard">
                <div className="aboutInfoCard__meta">
                  <span className="aboutInfoCard__badge">{edu.period}</span>
                  <h4 className="aboutInfoCard__title">{edu.institution}</h4>
                </div>
                <p className="aboutInfoCard__desc">{edu.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="about__divider" />

        {/* [3] CERTIFICATIONS */}
        <section className="about__section">
          <p className="about__label">CERTIFICATIONS</p>
          <ul className="about__timeline">
            {certificationsData.map((cert, idx) => (
              <li key={idx} className="aboutInfoCard">
                <div className="aboutInfoCard__meta">
                  <span className="aboutInfoCard__badge">{cert.date}</span>
                  <h4 className="aboutInfoCard__title">{cert.name}</h4>
                </div>
                <p className="aboutInfoCard__desc">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default About;
