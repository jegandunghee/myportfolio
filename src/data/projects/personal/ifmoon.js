import ifmoonDesk from "../../../assets/images/ifmoon-desk.gif";

export const ifmoonData = {
  id: "ifmoon",
  type: "personal",
  category: "personal",
  layout: "showcase",
  name: "IfMoon",
  title: "IfMoon",
  subtitle: "스크롤의 흐름에 따라 밤에서 낮으로 실체화되는 공간 서사",
  summary: "스크롤의 흐름에 따라 밤에서 낮으로 실체화되는 공간 서사",
  date: "2026.01",
  period: "2026.01 (1인 비주얼 인터랙션 실험작)",
  team: "1인 기획 · 디자인 · 인터랙션 개발 100%",
  tags: [
    "#React",
    "#GSAP",
    "#ScrollTrigger",
    "#SCSS",
    "#Micro_Interaction",
    "#Glassmorphism",
  ],
  links: {
    site: "https://ifmoon.vercel.app/",
    github: "https://github.com/jegandunghee/ifmoon",
  },
  images: {
    desk: ifmoonDesk,
  },
  phases: [
    {
      phaseNumber: "01",
      step: "01. Midnight",
      name: "Midnight",
      keywords: ["84개 파티클", "3D 패럴랙스"],
      desc: "심연의 밤하늘 속 84개 코드 파티클과 입체 패럴랙스 마우스 모션",
    },
    {
      phaseNumber: "02",
      step: "02. Dawn",
      name: "Dawn",
      keywords: ["코드 블록", "스크롤 조립"],
      desc: "ScrollTrigger 동기화를 통해 흩어진 파티클이 소스 코드로 조립되는 모핑 인터랙션",
    },
    {
      phaseNumber: "03",
      step: "03. Morning",
      name: "Morning",
      keywords: ["탄성 반응", "Glass UI"],
      desc: "코드가 탄성(elastic) 스프링 반응을 지닌 Glassmorphism UI로 치환되는 인터페이스",
    },
  ],
};
