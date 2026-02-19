// 포트폴리오 인트로 화면을 구성하는 메인 섹션 컴포넌트
import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome_inner">

        {/* OS 컨셉 인지용 타이틀 */}
        <h1 className="welcome_title">
          WELCOME TO MY
          <br />
          OS PORTFOLIO
        </h1>

        {/* 지원 직무 */}
        <p className="welcome_role">
          Frontend Developer · Web Publisher
        </p>

        {/* 교육과정 기반 설명 */}
        <p className="welcome_desc">
          UI/UX 기반 웹 퍼블리싱 및 프론트엔드 과정을 수료하며
          구현 중심으로 작업한 결과물을 정리했습니다.
        </p>

        {/* 이 포트폴리오의 목적 */}
        <p className="welcome_desc">
          이 공간은 단순히 결과물만 나열하는 것이 아니라,
          사용자가 직접 탐색하며 구조와 인터랙션을 경험할 수 있도록
          OS 데스크탑 형태로 설계되었습니다.
        </p>

        {/* CTA (기능 없음) */}
        <div className="welcome_cta">
          좌측 폴더 아이콘을 클릭해 프로젝트를 확인해보세요.
        </div>

      </div>
    </div>
  );
};

export default Welcome;