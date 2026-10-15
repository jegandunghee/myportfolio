// 연락처 및 외부 링크 정보를 표시하는 Contact 섹션 컴포넌트
import { useState } from "react";
import { FiMail, FiCopy, FiCheck, FiGithub, FiFileText, FiArrowUpRight } from "react-icons/fi";
import "./contact.scss";

// 안내: 본인의 실제 이메일 및 링크로 손쉽게 수정하실 수 있습니다.
const CONTACT_INFO = {
  email: "jeahee3161@naver.com",
  github: "https://github.com/jegandunghee",
  notion: "https://app.notion.com/p/UI-UX-d676d66d14a282be8b8e81a5f614df08?source=copy_link",
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(CONTACT_INFO.email);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = CONTACT_INFO.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("이메일 복사 실패:", err);
    }
  };

  return (
    <section className="page contact">
      <div className="page__body contact__body">
        {/* 상단 타이틀 & 안내 문구 (중앙 정렬) */}
        <header className="contact__intro">
          <h2 className="contact__headline">Let's connect &amp; build together.</h2>
          <div className="contact__desc">
            <p>
              사용성과 완성도를 함께 고민하는 웹 디자이너 정재희입니다.
            </p>
            <p>
              프로젝트 협업 및 채용에 관한 문의는 언제든 편하게 연락해 주세요.
            </p>
          </div>
        </header>

        <div className="contact__divider" />

        {/* 1) Direct Contact (이메일 카드) */}
        <section className="contact__section">
          <p className="contact__label">DIRECT CONTACT</p>
          <div
            className="contactCard contactCard--email"
            onClick={handleCopyEmail}
            title="클릭하여 이메일 복사"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCopyEmail();
              }
            }}
          >
            <div className="contactCard__main">
              <span className="contactCard__icon" aria-hidden="true">
                <FiMail size={22} />
              </span>
              <div className="contactCard__info">
                <span className="contactCard__sub">Email Address</span>
                <span className="contactCard__value">{CONTACT_INFO.email}</span>
              </div>
            </div>

            <button
              type="button"
              className={`contactCard__copyBtn ${copied ? "is-copied" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleCopyEmail();
              }}
              aria-label="이메일 주소 복사"
            >
              {copied ? (
                <>
                  <FiCheck size={14} />
                  <span>이메일이 복사되었습니다!</span>
                </>
              ) : (
                <>
                  <FiCopy size={14} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* 복사 성공 안내 피드백 */}
          <div className={`contact__feedback ${copied ? "is-show" : ""}`} role="status">
            <FiCheck size={14} />
            <span>이메일이 복사되었습니다!</span>
          </div>
        </section>

        <div className="contact__divider" />

        {/* 2) Channels & Links (외부 링크 카드 영역) */}
        <section className="contact__section">
          <p className="contact__label">CHANNELS &amp; LINKS</p>
          <div className="contact__grid">
            {/* GitHub */}
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="contactCard contactCard--link"
            >
              <div className="contactCard__main">
                <span className="contactCard__icon" aria-hidden="true">
                  <FiGithub size={24} />
                </span>
                <div className="contactCard__info">
                  <span className="contactCard__value">GitHub</span>
                  <span className="contactCard__desc">소스 코드 및 퍼블리싱 작업물 저장소</span>
                </div>
              </div>
              <span className="contactCard__arrow" aria-hidden="true">
                <FiArrowUpRight size={22} />
              </span>
            </a>

            {/* Notion */}
            <a
              href={CONTACT_INFO.notion}
              target="_blank"
              rel="noreferrer"
              className="contactCard contactCard--link"
            >
              <div className="contactCard__main">
                <span className="contactCard__icon" aria-hidden="true">
                  <FiFileText size={24} />
                </span>
                <div className="contactCard__info">
                  <span className="contactCard__value">Notion Portfolio</span>
                  <span className="contactCard__desc">Detailed Design Process &amp; Archive (프로젝트 기획 및 상세 디자인 프로세스 기록)</span>
                </div>
              </div>
              <span className="contactCard__arrow" aria-hidden="true">
                <FiArrowUpRight size={22} />
              </span>
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
