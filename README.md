# Personal Portfolio

React(CRA) 기반으로 컴포넌트 모듈화와 반응형 웹 표준을 고려하여 설계한 웹 포트폴리오입니다.  
탐색기 형태의 프로젝트 목록과 프로젝트별 맞춤형 상세 모달을 통해 작업물을 체계적으로 확인할 수 있도록 구성했습니다.

---

## 🌐 링크

- **배포 링크:** [바로가기](https://portfolio-jegandunghee.vercel.app)

---

## 📌 주요 특징 (Key Features)

- **컴포넌트 기반 아키텍처 및 관심사 분리**
  - 프로젝트 메타데이터와 UI 컴포넌트를 분리하여 데이터 추가 및 유지보수가 용이하도록 설계
- **프로젝트 목록 및 상세 모달 시스템**
  - 카테고리별(Team, Personal, Clone) 작업물을 탐색할 수 있는 목록 UI
  - 프로젝트 특성과 미디어 비율에 최적화된 상세 모달 뷰 제공
- **유연한 반응형 레이아웃**
  - SCSS 믹스인(`_mixin.scss`)을 활용하여 데스크톱, 태블릿, 모바일 전 구간 반응형 뷰 구현

---

## 📂 수록 프로젝트 (Projects)

### 👥 Team Projects
- **ZIO** — 공공 데이터 및 REST API 연동 협업 웹 서비스
- **댕댕하네** — 반려동물 케어 서비스를 주제로 한 반응형 웹

### 💡 Personal Projects
- **시킬뻔 (closecall)** — 배달앱 인터페이스를 재해석한 모바일 뷰 프로젝트
- **IfMoon** — 캔버스 및 비주얼 그래픽을 활용한 웹 프로젝트
- **한국어 입문자용 퀴즈 앱 (Quiz)** — 태블릿 비율에 맞춘 학습 퀴즈 웹 (상태별 배경 테마 전환 및 스마트 해설 하이라이팅)

### 🖥️ Clone Projects
- **개인 맞춤형 대시보드** — 브라우저 내장 Web API(Geolocation, LocalStorage)를 활용한 위젯 대시보드
- **ifkakao 클론** — CSS Flexbox와 모바일 퍼스트 기준의 기업 컨퍼런스 웹 클론
- **에어비앤비 클론** — CSS Grid 가변 컬럼 제어 및 SCSS 모듈화를 적용한 숙소 예약 웹 클론
- **커넥트웨이브 클론** — GSAP ScrollTrigger 복합 핀 스크롤 및 마키 요소를 적용한 기업 웹 리팩토링

---

## 🛠️ 기술 스택 (Tech Stack)

- **Frontend:** React, JavaScript (ES6+)
- **Styling:** SCSS, CSS3, CSS Modules
- **Routing:** React Router DOM
- **Deployment:** Vercel, GitHub

---

## 📁 디렉토리 구조 (Directory Structure)

```text
src/
 ├─ assets/          # 목업 이미지, 아이콘 등 정적 리소스
 ├─ components/      # UI 모듈 (Header, Navigation, ProjectsList, ProjectsDetail 등)
 ├─ data/            # 카테고리별 프로젝트 데이터 (team, personal, clone)
 ├─ pages/           # 메인 페이지 및 라우트 컴포넌트
 ├─ styles/          # 공통 SCSS (_variables, _mixin, _reset 등)
 ├─ hooks/           # 커스텀 훅
 └─ App.js           # 루트 엔트리
