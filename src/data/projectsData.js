// 프로젝트 목록 및 상세 정보를 정의하는 데이터 파일
import {zariData} from "./projects/team/zari";
import {dangdangData} from "./projects/team/dangdang";
import {blogData} from "./projects/personal/blog-corp";
import {testData} from "./projects/personal/k-test";
import {gsapData} from "./projects/personal/gsap-nightday";
import {airbnbData} from "./projects/clone/airbnb";
import {mydayData} from "./projects/clone/myday";
import {waveData} from "./projects/clone/connectwave";
import {kakaoData} from "./projects/clone/if-kakao"; 

const projectData = {
  team: [ zariData, dangdangData],

  personal: [ blogData, testData, gsapData  ],

  clone: [ airbnbData, mydayData, waveData, kakaoData],
};

export default projectData;