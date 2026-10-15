import dangdangDesk from "../../../assets/images/dangdang-desk.png";
import dangdangMobile from "../../../assets/images/dangdang-mobile.png";

export const dangdangData = {
  id: "dangdang",
  type: "team",
  name: "댕댕하네's",
  summary: "JSON 기반 상품 데이터 구조 설계와 장바구니 상태 관리를 중심으로 구현한 반응형 반려견 쇼핑몰",
  period: "2025.12.19 ~ 2025.12.26 (1 weeks)",
  team: "4명",
  tags: [
    "#React",
    "#JavaScript",
    "#SCSS",
    "#Component_Design",
    "#State_Management",
    "#Shopping_Cart",
  ],
  links: {
    site: "https://jegandunghee.github.io/daengdaengharness/",
    github: "https://github.com/jegandunghee/daengdaengharness",
  },
  // 담당 역할
  roles: [
    {
      title: "장바구니 시스템 통합 설계 및 상태 관리",
      desc: "상품 상세 페이지의 선택 옵션(사이즈, 컬러, 수량 등) 데이터를 장바구니로 전달하는 데이터 파이프라인 구축. 장바구니 내 수량 증감 및 옵션 수정 시 실시간으로 반영되는 상태 관리 로직 구현 및 총 결제 금액 계산 최적화.",
    },
    {
      title: "컴포넌트 모듈화 및 반응형 레이아웃 마크업",
      desc: "상품 카드, 옵션 실렉터 등 반복 사용되는 UI를 재사용 가능한 독립 컴포넌트로 분리하고, 미디어쿼리 기반 중단점 설계를 통해 모바일과 데스크탑 환경에 최적화된 반응형 인터페이스 구축.",
    },
  ],
  // 기술 스택
  stack: {
    frontend: "React, JavaScript, SCSS",
    mockData: "JSON",
    tool: "GitHub, Figma",
  },
  // 핵심 구현 포인트
  features: [
    {
      title: "동적 JSON 기반의 카탈로그 렌더링",
      desc: "상품 및 카테고리 계층 구조를 효율적으로 관리하고 데이터 변경 시 안정적으로 렌더링하는 JSON 데이터 파이프라인 설계.",
    },
    {
      title: "실시간 연동 장바구니 UX",
      desc: "상품 옵션 선택, 수량 실시간 변경, 조건별 배송비 산출 및 선택 삭제 등 일관성 있는 쇼핑 프로세스 구현.",
    },
    {
      title: "반응형 디바이스 최적화",
      desc: "다양한 뷰포트 환경에서 요소 깨짐 없이 부드럽게 재배치되는 반응형 그리드 및 터치 친화적 인터페이스 제공.",
    },
  ],
  // 문제 해결 사례 (트러블슈팅)
  troubleshooting: [
    {
      issue: "페이지 라우팅 간 동적 옵션 데이터 유실 및 상태 동기화 이슈 해결",
      problem:
        "상품 상세 페이지에서 장바구니로 넘어가는 과정에서 선택된 옵션 객체(사이즈, 컬러, 수량)의 상태 전달 체계가 모호하여, 페이지 이동 또는 리렌더링 시 기존 담은 상품 데이터가 덮어써지거나 초기화되는 결함이 발생했습니다.",
      solution:
        "장바구니 상태 모델의 데이터 스키마를 단일 규격으로 정규화하고, 불변성(Immutability) 기반의 배열 업데이트 파이프라인을 구축하여 페이지 이동 간에도 옵션 데이터가 유실 없이 안정적으로 유지되도록 데이터 흐름을 정돈했습니다.",
      takeaway:
        "컴포넌트 구현에 앞서 엔티티 간 데이터 라이프사이클과 상태 보존 전략을 먼저 수립하는 것이 결함 방지와 유지보수성 확보의 핵심임을 학습했습니다.",
    },
  ],
  // 이미지 경로 (목업 이미지)
  images: {
    desk: dangdangDesk,
    mobile: dangdangMobile,
  },
};