import zioMokupDesk from "../../../assets/images/zari-desk.png";
import zioMokupMobile from "../../../assets/images/zari-mobile.png"

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
    github: "https://github.com/jegandunghee/ZIO-zari-it-o",
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
      issue: "초단기 병렬 개발 환경에서의 비동기 데이터 참조 에러 해결",
      problem:
        "8일간의 단기 스프린트 과정에서 DB 및 API 명세가 확립되기 전 병렬 개발이 진행되어, 비동기 데이터 호출 시점과 컴포넌트 렌더링 생명주기 불일치로 인한 undefined 참조 에러가 다수 발생했습니다.",
      solution:
        "호출 경로를 단계별로 역추적해 데이터 패칭 시점과 렌더링 타이밍을 동기화하고, 컴포넌트별 필수 데이터 수신 규격을 명문화한 인터페이스 가이드를 수립하여 병렬 작업 간 충돌을 해소했습니다.",
      takeaway:
        "빠른 구현에 앞서 명확한 데이터 인터페이스 규격을 정의하는 것이 협업 리스크와 기술 부채를 방어하는 핵심임을 체득했습니다.",
    },
  ],
  // 이미지 경로 (목업 이미지)
  images: {
    desk: zioMokupDesk,
    mobile: zioMokupMobile

  },
};
