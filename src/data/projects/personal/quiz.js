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
      desc: "시작, 과목 선택, 문제 풀이, 결과, 해설 등 학습 단계가 바뀔 때마다 화면 배경이 자동으로 바뀜. 단색이 아니라 은은한 그라데이션과 직접 만든 그래픽을 섞어서, 각 단계에 맞는 차분하고 집중하기 좋은 분위기를 연출.",
    },
    {
      num: "02",
      title: "스마트 해설 문장 하이라이팅",
      desc: "오답 노트와 해설을 볼 때 긴 글을 통째로 읽는 부담을 줄이기 위해, 해설을 문장 단위로 나눠서 정답과 관련된 핵심 문장에만 붉은 밑줄과 강조 효과를 자동으로 적용. 학습자의 읽는 부담을 크게 줄임.",
    },
    {
      num: "03",
      title: "인지 딜레이와 동적 진행률 바",
      desc: "사용자가 보기를 클릭했을 때 즉각 화면이 넘어가면 피드백을 놓치기 쉬우므로, 0.5초의 자연스러운 딜레이(setTimeout) 후 다음 문제로 페이드인 전환. 전체 문항 수 대비 푼 문제 수를 실시간으로 계산해 상단 진행 바를 부드럽게 채움.",
    },
    {
      num: "04",
      title: "훅 기반의 유기적인 상태 흐름 설계",
      desc: "퀴즈 진행 상태, 누적 점수, 과목 선택, 3단 화면 전환(풀이 ↔ 결과 ↔ 해설)을 useState 중앙 집중 구조로 제어하여 불필요한 리렌더링을 방지하고 가벼운 렌더링 반응 속도 확보.",
    },
  ],
};
