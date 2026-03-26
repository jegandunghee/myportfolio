export const zariData = {
  id: "zari",
  type: "team",
  name: "ZIO - zari it o(자리있어)",
  summary: "공유 주차장 시스템 기반의 실시간 주차 정보 확인 및 예약 서비스",
  period: "2026.01.02 - 01.13 (2 weeks)",
  team: "6명",
  tags: [
    "#Supabase",
    "#React_Context",
    "#PostgreSQL",
    "#DB_Design",
    "#API_Implementation",
    "#State_Management",
  ],
  links: {
    site: "https://...",
    github: "https://...",
    pdf: "https://...",
  },
  // 담당 역할
  roles: [
    {
      title: "Supabase 기반 데이터 인프라 구축 및 API 설계",
      desc: "주차장 정보, 예약 리스트, 회원 정보 등 서비스 핵심 데이터 테이블 설계 및 관계 설정. 데이터 조회, 추가, 수정 로직을 API 형태로 분리하여 유지보수성 향상.",
    },
    {
      title: "Context API를 활용한 전역 상태 관리",
      desc: "사용자 로그인 상태 및 주차 예약 데이터를 앱 전체에 공유하여 페이지 간 끊김 없는 데이터 흐름 구현.",
    },
  ],
  //기술 스택
  stack: {
    frontend: "React, JavaScript, SCSS",
    backend: "Supabase, PostgreSQL",
    tool: "GitHub, Figma, Kakao Map API",
  },
  // 핵심 구현 포인트
  features: [
    {
      title: "실시간 주차 데이터 구조 설계",
      desc: "빈자리 유무, 예약 현황 등 변화가 잦은 데이터를 효율적으로 추적하기 위한 확장성 있는 테이블 설계.",
    },
    {
      title: "위치 기반 통합 대시보드",
      desc: "Kakao Map API와 Supabase를 연동하여 실제 지도 위에 실시간 주차 정보를 직관적으로 시각화.",
    },
  ],
  // 문제 해결 사례
  troubleshooting: [
    {
      issue: "설계 의도 공유 부족으로 인한 협업 혼선",
      problem:
        "팀원들이 DB 구조와 전체적인 데이터 흐름을 충분히 이해하지 못해, 기능 구현 과정에서 코드 충돌 발생.",
      solution:
        "Context API가 각 페이지의 API와 어떻게 연결되는지 시각화한 데이터 흐름도를 제작하여 공유. 명확한 문서화를 바탕으로 코드 구조 재정비.",
      takeaway:
        "협업 프로젝트에서는 코드만큼이나 설계 의도를 설명하는 문서가 팀의 생산성과 직결됨을 체감함.",
    },
  ],
  // 이미지 경로 (목업 이미지)
  images: {
    thumbnail: "/assets/images/zari-thumb.png",
    mockup: "/assets/images/zari-mockup.png",
    architecture: "/assets/images/zari-arch.png",
  },
};
