import ifkakaoDesk from "../../../assets/images/ifkakako-desk.png";

export const kakaoData = {
  id: "if-kakao",
  type: "clone",
  category: "clone",
  layout: "matrix",
  name: "ifkakao 클론",
  title: "ifkakao 클론",
  subtitle: "CSS Flexbox 아키텍처와 유동형 반응형 인터랙션을 집약한 기업 컨퍼런스 웹 클론",
  badge: "1인 UI 퍼블리싱 · 인터랙션 설계 100%",
  date: "2025",
  period: "2025 (1인 제작)",
  team: "1인 UI 퍼블리싱 · 인터랙션 설계 100%",
  tags: [
    "#HTML5",
    "#CSS3",
    "#Flexbox",
    "#Vanilla_JS",
    "#Responsive_Web",
    "#Mobile_First",
  ],
  links: {
    site: "https://if-kakao.vercel.app",
    demo: "https://if-kakao.vercel.app",
    github: "https://github.com/jegandunghee/ifKakao",
  },
  description:
    "카카오의 연례 개발자 컨퍼런스인 if(kakao) 웹사이트를 100% 클론 퍼블리싱한 프로젝트입니다. 미디어 쿼리와 유연한 CSS Flexbox 시스템을 체계적으로 설계하여 모바일 퍼스트 기준의 유연한 화면 대응을 구현했으며, 바닐라 자바스크립트를 활용한 동적 슬라이더 및 아코디언 인터랙션을 완성도 높게 결합했습니다.",
  mockupImg: ifkakaoDesk,
  images: {
    desk: ifkakaoDesk,
  },
  matrixFeatures: [
    {
      num: "01",
      title: "Flexbox 기반 유연한 1차원 레이아웃",
      desc: "헤더 네비게이션, 카드 리스트, 반응형 정렬 구조에 Flexbox 시스템을 전면 적용하여 flex-wrap과 min/max-width를 조합한 유동형(Fluid) 구조 설계.",
    },
    {
      num: "02",
      title: "모바일 퍼스트 반응형 & 시각 순서 제어",
      desc: "min-width 기반 모바일 퍼스트로 설계하여 유지보수 비용을 낮추고, 맵/안내 영역 등에서 flex-direction: column-reverse를 활용해 마크업 순서 왜곡 없이 뷰 순서 최적화.",
    },
    {
      num: "03",
      title: "동적 키노트 슬라이더 & 카드 인터랙션",
      desc: "Vanilla JS로 메인 하이라이트 배너와 세션 카드의 좌우 페이징 슬라이더를 구현하고, z-index와 position 레이어 설계를 통한 입체적 UI 연출.",
    },
    {
      num: "04",
      title: "아코디언 트러블 슈팅 인터페이스",
      desc: "기술적 고민과 구현 원리를 사용자가 즉각 펼쳐볼 수 있도록 토글형 아코디언 메뉴로 모듈화하여 직관적인 정보 탐색 경험 제공.",
    },
  ],
};
