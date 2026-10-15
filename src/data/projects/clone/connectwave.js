import connectwaveDesk from "../../../assets/images/connectwave-desk.png";

export const connectwaveData = {
  id: "connectwave",
  type: "clone",
  category: "clone",
  layout: "matrix",
  name: "커넥트웨이브 클론",
  title: "커넥트웨이브 클론",
  subtitle: "GSAP ScrollTrigger와 세로-가로 복합 스크롤 인터랙션을 적용한 기업 웹 리팩토링",
  badge: "1인 UI 퍼블리싱 · 인터랙션 설계 100%",
  date: "2025",
  period: "2025 (1인 제작)",
  team: "1인 UI 퍼블리싱 · 인터랙션 설계 100%",
  tags: [
    "#React19",
    "#GSAP",
    "#ScrollTrigger",
    "#CSS3",
    "#React_Router_DOM",
    "#Responsive_Web",
  ],
  links: {
    site: "https://connectwave-amber.vercel.app",
    demo: "https://connectwave-amber.vercel.app",
    github: "https://github.com/jegandunghee/connectwave",
  },
  description:
    "이커머스 전문 기업 커넥트웨이브(ConnectWave)의 공식 웹사이트를 React 기반으로 재구성한 클론 프로젝트입니다. 따뜻한 크림 베이지 톤으로 디자인을 리팩토링하고, GSAP ScrollTrigger를 고도화하여 백그라운드 영상 스케일 변환, 세로에서 가로로 자연스럽게 이어지는 복합 핀(Pin) 스크롤, 무한 루프 마키 애니메이션을 매끄럽게 구현했습니다.",
  mockupImg: connectwaveDesk,
  images: {
    desk: connectwaveDesk,
  },
  keyFeatures: [
    {
      num: "01",
      title: "GSAP ScrollTrigger 영상 및 타임라인 연동",
      desc: "스크롤 진행도에 맞춰 배경 비디오의 Scale과 Border-radius가 유기적으로 축소/확대되도록 제어하고, 복합 타임라인을 통해 텍스트 페이드인 인터랙션을 정밀하게 동기화.",
    },
    {
      num: "02",
      title: "세로에서 가로로 이어지는 복합 핀 스크롤",
      desc: "특정 섹션 진입 시 화면을 핀(pin: true)으로 고정하고 세로 스크롤 값을 가로 이동값(x)으로 치환하여, 끊김 없이 부드럽게 이어지는 가로 브라우징 인터랙션 구현.",
    },
    {
      num: "03",
      title: "무한 루프 마키 및 패럴랙스 무빙",
      desc: "기술 스택 로고들이 멈춤 없이 순환하는 무한 롤링 마키 컴포넌트를 설계하고, 스크롤 속도에 따라 미세하게 Y축 위치가 반응하는 패럴랙스 효과 적용.",
    },
    {
      num: "04",
      title: "반응형 내비게이션 및 컴포넌트 모듈화",
      desc: "데스크톱 메가 드롭다운 메뉴와 모바일 햄버거 사이드바를 분기 설계하고, React Router v7과 기능별 스타일시트 1:1 매칭으로 유지보수성 최적화.",
    },
  ],
  matrixFeatures: [
    {
      num: "01",
      title: "GSAP ScrollTrigger 영상 및 타임라인 연동",
      desc: "스크롤 진행도에 맞춰 배경 비디오의 Scale과 Border-radius가 유기적으로 축소/확대되도록 제어하고, 복합 타임라인을 통해 텍스트 페이드인 인터랙션을 정밀하게 동기화.",
    },
    {
      num: "02",
      title: "세로에서 가로로 이어지는 복합 핀 스크롤",
      desc: "특정 섹션 진입 시 화면을 핀(pin: true)으로 고정하고 세로 스크롤 값을 가로 이동값(x)으로 치환하여, 끊김 없이 부드럽게 이어지는 가로 브라우징 인터랙션 구현.",
    },
    {
      num: "03",
      title: "무한 루프 마키 및 패럴랙스 무빙",
      desc: "기술 스택 로고들이 멈춤 없이 순환하는 무한 롤링 마키 컴포넌트를 설계하고, 스크롤 속도에 따라 미세하게 Y축 위치가 반응하는 패럴랙스 효과 적용.",
    },
    {
      num: "04",
      title: "반응형 내비게이션 및 컴포넌트 모듈화",
      desc: "데스크톱 메가 드롭다운 메뉴와 모바일 햄버거 사이드바를 분기 설계하고, React Router v7과 기능별 스타일시트 1:1 매칭으로 유지보수성 최적화.",
    },
  ],
};

// 하위 호환성을 위해 waveData로도 export
export const waveData = connectwaveData;
