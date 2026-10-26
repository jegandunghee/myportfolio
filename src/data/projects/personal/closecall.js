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
  // UI/UX 설계 및 퍼블리싱 포인트
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
  // 주요 기능 및 구현 포인트
  features: [
    {
      title: "단일화 영수증 테이블 설계",
      desc: "메뉴 옵션 선택 데이터를 앱에서 하나의 문장으로 합쳐 한 번에 저장하여, 저장 중 오류가 생길 가능성과 여러 표를 이어 붙이는 과정을 줄이고 화면이 빠르게 표시되도록 함.",
    },
    {
      title: "DB 트리거 기반 유저 프로필 자동 동기화",
      desc: "Supabase Auth 회원가입 시 PostgreSQL 트리거 함수를 통해 프로필 레코드가 원자적으로 생성되도록 설계하여 계정 간 불일치 원천 방지.",
    },
  ],
  // 트러블슈팅
  troubleshooting: [
    {
      issue: "메뉴 상세 옵션 바텀시트와 하단 결제 바의 겹침 현상 해결",
      problem:
        "옵션이 많은 메뉴의 바텀시트를 열면 하단 고정 바와 겹치고 버튼이 가려지는 문제 발생.",
      solution:
        "바텀시트를 이미지, 옵션 목록, 담기 버튼 영역으로 나누고 옵션 목록만 스크롤되게 해서 담기 버튼이 항상 보이도록 해결함. 시트가 하단 바보다 위에 표시되도록 화면 요소의 앞뒤 순서를 정리하고, 스토어 화면은 장바구니 바가 나타날 때만 목록 아래 여백을 늘려 마지막 메뉴가 가려지지 않게 해결함.",
      takeaway:
        "고정 요소는 하나씩 보면 문제가 없어도, 화면이 합쳐지면 서로 가리는 일이 생깁니다. 디자인 단계에서 고정 영역과 스크롤 영역의 경계, 레이어 순서를 먼저 정해 두는 것이 중요하다고 느꼈습니다.",
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
