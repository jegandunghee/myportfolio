import closecallMobile from "../../../assets/images/closecallmockup.gif";

export const closecallData = {
  id: "closecall",
  type: "personal",
  category: "personal",
  name: "시킬뻔 (Close Call)",
  title: "시킬뻔 (Close Call)",
  subtitle: "주문하는 손맛은 그대로, 지갑과 야식 방어는 확실하게",
  summary:
    "밤마다 찾아오는 충동적인 야식 유혹을 가짜 주문·0원 결제·배달 시뮬레이션의 손맛과 시각적 도파민으로 방어하는 1인 개발 모바일 반응형 웹 서비스입니다.",
  badge: "1인 기획 · 디자인 · 개발 100%",
  date: "2026.02",
  period: "2026.02 (1인 개발)",
  team: "1인 기획 · 디자인 · 개발 100%",
  tags: [
    "#TypeScript",
    "#React19",
    "#TailwindCSS",
    "#Supabase",
    "#Context_API",
    "#Figma",
  ],
  links: {
    site: "https://close-call-three.vercel.app",
    github: "https://github.com/jegandunghee/close-call",
  },
  images: {
    mobile: closecallMobile,
  },
  // UI/UX 설계 및 퍼블리싱 포인트 (Design Highlights)
  designPoints: [
    {
      title: "배달 앱 99% 모방 UI 및 옵션 바텀시트 설계",
      desc: "10종 음식 카테고리별 매장 조회, 메뉴 상세, 다중 옵션 선택 바텀시트 등 실제 배달 플랫폼의 인터페이스 흐름을 정밀하게 재현하여 즉각적인 사용 몰입감 제공.",
    },
    {
      title: "모바일 뷰 최적화 및 인터페이스 간섭 방어",
      desc: "모바일 해상도(375px~430px) 중심 설계. 깊은 옵션 모달 오픈 시 하단 고정 결제 CTA 바와의 터치 간섭을 차단하고, 스켈레톤 UI와 빈 장바구니 예외 화면을 체계적으로 구현.",
    },
    {
      title: "타이머 기반 가상 배달 시뮬레이션 및 도파민 해소",
      desc: "0원 가상 결제 완료 후 [접수 ➔ 조리 ➔ 배달] 상태가 실시간으로 전이되는 동적 인터랙션을 구현하여, 충동 결제 욕구를 안전하게 완화하고 최종 방어 성공 영수증 적재.",
    },
  ],
  // 주요 기능 및 아키텍처 (Key Features & Architecture)
  features: [
    {
      title: "단일화 영수증 테이블 설계 (close_call_orders)",
      desc: "다중 옵션 선택 데이터를 프론트엔드에서 단일 규격 문자열로 결합 후 1회 적재하여, 불필요한 트랜잭션 에러 위험과 테이블 조인 오버헤드를 차단하고 빠른 렌더링 성능 확보.",
    },
    {
      title: "DB 트리거 기반 유저 프로필 자동 동기화",
      desc: "Supabase Auth 회원가입 시 PostgreSQL 트리거 함수를 통해 프로필 레코드가 원자적으로 생성되도록 설계하여 계정 간 불일치 원천 방지.",
    },
  ],
  // 트러블슈팅 (Troubleshooting)
  troubleshooting: [
    {
      issue: "비동기 타이머 종료 시점의 영수증 중복 적재 방어",
      problem:
        "가상 배달 타이머 완료 처리 중 비동기 이벤트가 중복 호출되어 DB에 방어 성공 영수증이 중복 INSERT될 위험 발생.",
      solution:
        "주문 완료 진입 함수에 useRef 기반의 1회성 실행 가드(Guard Lock)를 구현하여, 완료 처리된 주문 건에 대한 중복 호출을 원천 차단하고 데이터 정합성 확보.",
      takeaway:
        "비동기 타이머와 비즈니스 로직이 결합된 인터랙션에서는 프론트엔드 차원의 1회성 멱등성 가드(Idempotent Guard)가 데이터 무결성 보장의 핵심임을 체득했습니다.",
    },
    {
      issue: "Supabase RLS 정책 수립을 통한 데이터 보안 제어",
      problem:
        "프론트엔드 통신 시 permission denied(403) 에러로 인해 방어 이력 데이터 적재가 차단되는 현상 발생.",
      solution:
        "PostgreSQL Row Level Security(RLS) 정책을 정밀 수립하여, auth.uid() 기준의 권한 검증을 통과한 본인 데이터만 안전하게 읽고 쓸 수 있도록 보안 접근 제어 완료.",
      takeaway:
        "BaaS 아키텍처에서는 클라이언트 단의 검증뿐만 아니라 데이터베이스 레이어의 RLS 정책이 엔드포인트 보안의 최후 방어선임을 학습했습니다.",
    },
  ],
};
