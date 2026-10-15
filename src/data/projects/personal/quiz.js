import quizDesk from "../../../assets/images/quiz-desk.gif";

export const quizData = {
  id: "quiz",
  type: "personal",
  category: "personal",
  layout: "splitLab",
  name: "한국어 입문자용 퀴즈 앱 (Korean Beginner Quiz)",
  title: "한국어 입문자용 퀴즈 앱 (Korean Beginner Quiz)",
  subtitle: "동적 상태 피드백과 반응형 텍스트 위계를 고려한 인터랙티브 학습 웹",
  badge: "1인 기획 · 반응형 UI 설계 · 프론트엔드 개발 100%",
  date: "2025.10",
  period: "2025.10 (1인 제작)",
  team: "1인 기획 · 반응형 UI 설계 · 프론트엔드 개발 100%",
  tags: [
    "#React",
    "#CSS3",
    "#Responsive_Web",
    "#Hooks_Architecture",
  ],
  links: {
    site: "https://quiz-five-wine.vercel.app/",
    github: "https://github.com/jegandunghee/quiz",
  },
  description:
    "입문 수준의 한국어 학습자를 위해 자음/모음, 발음, 단어/어휘, 문장/표현 등 다양한 과목의 퀴즈를 제공하는 웹 애플리케이션입니다. 데스크톱과 태블릿/모바일 환경을 아우르는 반응형 웹 디자인을 적용하고, React Hooks를 활용해 화면 전환과 학습 피드백이 매끄럽게 이어지도록 설계했습니다.",
  media: {
    type: "gif",
    src: quizDesk,
    device: "tablet",
  },
  images: {
    desk: quizDesk,
    tablet: quizDesk,
  },
  uxHighlights: [
    {
      num: "01",
      title: "상태별 감성 배경 전환",
      desc: "시작, 과목 선택, 문제 풀이, 결과창, 해설창 등 사용자의 학습 흐름에 맞춰 App.js에서 CSS 클래스(bg-1 ~ bg-5, bg-review)를 동적으로 주입. 단순 단색이 아닌 radial-gradient와 커스텀 그래픽을 조합하여 각 학습 단계에 맞는 부드럽고 집중도 높은 분위기를 연출.",
    },
    {
      num: "02",
      title: "스마트 해설 문장 하이라이팅",
      desc: "오답 노트 및 해설을 볼 때 장문의 텍스트를 통째로 읽는 피로를 줄이기 위해, 문장 단위로 분할(split) 파싱하여 정답과 연관된 핵심 문장에만 자동으로 붉은 밑줄과 하이라이트 효과를 부여. 학습자의 인지 부하 대폭 감소.",
    },
    {
      num: "03",
      title: "인지 딜레이와 동적 진행률 바",
      desc: "사용자가 보기를 클릭했을 때 즉각 화면이 넘어가면 피드백을 놓치기 쉬우므로, 0.5초의 자연스러운 딜레이(setTimeout) 후 다음 문제로 페이드인 전환. 전체 문항 수 대비 푼 문제 수를 실시간 비례식(width: ${progress}%)으로 계산해 상단 프로그레스 바를 부드럽게 채움.",
    },
    {
      num: "04",
      title: "훅 기반의 유기적인 상태 흐름 설계",
      desc: "퀴즈 진행 상태, 누적 점수, 과목 선택, 3단 화면 전환(풀이 ↔ 결과 ↔ 해설)을 useState 중앙 집중 구조로 제어하여 불필요한 리렌더링을 방지하고 가벼운 렌더링 반응 속도 확보.",
    },
  ],
};
