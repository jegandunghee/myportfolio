import airbnbDesk from "../../../assets/images/airbnb-desk.png";

export const airbnbData = {
  id: "airbnb",
  type: "clone",
  category: "clone",
  layout: "matrix",
  name: "에어비앤비 클론",
  title: "에어비앤비 클론",
  subtitle: "CSS Grid 가변 컬럼 제어와 SCSS 모듈화를 적용한 반응형 숙소 예약 웹 클론",
  badge: "1인 UI 퍼블리싱 · 인터랙션 설계 100%",
  date: "2026.04",
  period: "2026.04 (1인 제작)",
  team: "1인 UI 퍼블리싱 · 인터랙션 설계 100%",
  tags: [
    "#HTML5",
    "#CSS3",
    "#SCSS",
    "#CSS_Grid",
    "#Vanilla_JS",
    "#Responsive_Web",
  ],
  links: {
    site: "https://airbnb-beige-zeta.vercel.app",
    demo: "https://airbnb-beige-zeta.vercel.app",
    github: "https://github.com/jegandunghee/Airbnb_Clone",
  },
  description:
    "에어비앤비(StayNest)의 핵심 인터페이스를 클론 퍼블리싱한 반응형 웹 프로젝트입니다. CSS Grid 시스템(grid-auto-flow: column)과 SCSS 믹스인 모듈화를 기반으로 디바이스 뷰포트에 따라 2열, 3열, 6열로 유연하게 반응하는 카드 슬라이더를 구현했으며, 바닐라 자바스크립트로 탭 및 찜하기 인터랙션을 완성했습니다.",
  mockupImg: airbnbDesk,
  images: {
    desk: airbnbDesk,
  },
  keyFeatures: [
    {
      num: "01",
      title: "CSS Grid 기반 동적 가변 슬라이더",
      desc: "grid-auto-flow: column과 grid-auto-columns calc 공식을 활용하여 모바일(2열), 태블릿(3열), 데스크톱(6열) 환경에 맞춰 표시 개수가 유연하게 제어되는 슬라이더 구조 설계.",
    },
    {
      num: "02",
      title: "SCSS 디자인 토큰 및 믹스인 모듈화",
      desc: "브랜드 컬러, 타이포그래피, 브레이크포인트 미디어 쿼리를 _variables 및 _mixin 모듈로 구조화하여 rem 단위 비례 축소 대응과 스타일 재사용성 극대화.",
    },
    {
      num: "03",
      title: "뷰포트 연동 인디케이터 제어",
      desc: "Vanilla JS로 현재 윈도우 폭(window.innerWidth)을 실시간 감지하여 섹션별 슬라이드 이동량 및 첫/끝 페이지 네비게이션 버튼 비활성화 로직 구현.",
    },
    {
      num: "04",
      title: "이벤트 캡처링 방지 찜하기 토글",
      desc: "카드 컴포넌트 내 하트 아이콘 클릭 시 e.stopPropagation()을 적용하여 숙소 상세 이동 이벤트와의 간섭 없이 독립적인 찜 활성화 인터랙션 제공.",
    },
  ],
  matrixFeatures: [
    {
      num: "01",
      title: "CSS Grid 기반 동적 가변 슬라이더",
      desc: "grid-auto-flow: column과 grid-auto-columns calc 공식을 활용하여 모바일(2열), 태블릿(3열), 데스크톱(6열) 환경에 맞춰 표시 개수가 유연하게 제어되는 슬라이더 구조 설계.",
    },
    {
      num: "02",
      title: "SCSS 디자인 토큰 및 믹스인 모듈화",
      desc: "브랜드 컬러, 타이포그래피, 브레이크포인트 미디어 쿼리를 _variables 및 _mixin 모듈로 구조화하여 rem 단위 비례 축소 대응과 스타일 재사용성 극대화.",
    },
    {
      num: "03",
      title: "뷰포트 연동 인디케이터 제어",
      desc: "Vanilla JS로 현재 윈도우 폭(window.innerWidth)을 실시간 감지하여 섹션별 슬라이드 이동량 및 첫/끝 페이지 네비게이션 버튼 비활성화 로직 구현.",
    },
    {
      num: "04",
      title: "이벤트 캡처링 방지 찜하기 토글",
      desc: "카드 컴포넌트 내 하트 아이콘 클릭 시 e.stopPropagation()을 적용하여 숙소 상세 이동 이벤트와의 간섭 없이 독립적인 찜 활성화 인터랙션 제공.",
    },
  ],
};
