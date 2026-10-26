import dashboardDesk from "../../../assets/images/dashboard-desk.png";

export const mydayData = {
  id: "myday",
  type: "clone",
  category: "clone",
  layout: "matrix",
  name: "구글 모멘텀 클론",
  title: "구글 모멘텀 클론",
  subtitle: "시간대별 테마 전환과 생산성 위젯을 집약한 개인화 대시보드 웹",
  badge: "1인 기획 · UI 퍼블리싱 · React 100%",
  date: "2025.11",
  period: "2025.11 (1인 제작)",
  team: "1인 기획 · UI 퍼블리싱 · React 100%",
  tags: [
    "#React19",
    "#CSS3",
    "#Glassmorphism",
    "#Geolocation_API",
    "#LocalStorage",
    "#Axios",
  ],
  description:
    "생산성과 일상 루틴 관리를 돕는 맞춤형 대시보드 웹 애플리케이션입니다. 브라우저 내장 Web API(Geolocation, LocalStorage)와 CSS Glassmorphism 디자인을 조화롭게 적용하여 외부 라이브러리 의존성을 낮추고 가벼운 구동성과 세련된 사용자 경험을 구현했습니다.",
  mockupImg: dashboardDesk,
  images: {
    desk: dashboardDesk,
  },
  matrixFeatures: [
    {
      num: "01",
      title: "시간대 기반 자동 테마 전환",
      desc: "접속 시간에 맞춰 주간(06~18시) 라이트 모드와 야간 다크 모드를 자동 전환하며, 시간대별 맞춤형 인사말과 실시간 시계를 중앙에 배치.",
    },
    {
      num: "02",
      title: "아코디언 사이드 위젯 드로어",
      desc: "중앙 작업 영역의 집중도를 해치지 않도록 좌측 슬라이딩 아코디언 메뉴로 포모도로 타이머, 북마크, 일정, 할 일(Todo)을 모듈화하여 필요 시에만 호출.",
    },
    {
      num: "03",
      title: "실시간 위치 기반 날씨 연동",
      desc: "Geolocation API를 통해 사용자의 현재 위치 날씨를 동기화하며, 권한 거부나 호출 실패 시 서울 기준 날씨로 안전하게 전환되는 폴백 로직 적용.",
    },
    {
      num: "04",
      title: "브라우저 로컬 데이터 영구 보존",
      desc: "LocalStorage를 연동하여 사용자의 핵심 목표와 할 일 목록이 새로고침이나 브라우저 재접속 후에도 유실 없이 안전하게 유지되도록 구현.",
    },
  ],
};
