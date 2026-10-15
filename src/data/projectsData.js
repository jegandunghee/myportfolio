// 프로젝트 목록 및 상세 정보를 정의하는 데이터 파일
import { zariData } from "./projects/team/zari";
import { dangdangData } from "./projects/team/dangdang";
import { closecallData } from "./projects/personal/closecall";
import { ifmoonData } from "./projects/personal/ifmoon";
import { quizData } from "./projects/personal/quiz";
import { mydayData } from "./projects/clone/myday";
import { kakaoData } from "./projects/clone/if-kakao";
import { airbnbData } from "./projects/clone/airbnb";
import { connectwaveData } from "./projects/clone/connectwave";

const projectData = {
  team: [zariData, dangdangData],
  personal: [closecallData, ifmoonData, quizData],
  clone: [mydayData, kakaoData, airbnbData, connectwaveData],
};

export default projectData;