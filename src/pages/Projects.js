// 프로젝트 목록 섹션을 구성하고 프로젝트 상세 창을 여는 역할을 담당하는 페이지 컴포넌트

import projectData from "../data/projectsData";
import ProjectFolders from "../projects/ProjectFolders";
import ProjectsDetail from "../projects/ProjectsDetail";
import ProjectsList from "../projects/ProjectsList";


const Projects = ({win, goProjectsInto, projectsBack}) => {
  const path = win.path || ["projects"];
  const folder = path[1];
  const detailId = path[2];

  //첫 클릭 : 팀/개인/클론 프로젝트 폴더 보여짐 
  if(path.length === 1){
    return (
      <ProjectFolders 
        // win={win} 
        onOpenFolder={(folder) => goProjectsInto(win.id, folder)}
    />);
  }

  //두번째 클릭 : 팀/개인/클론 중 하나 택 (파일 리스트 보여주기)
  if(path.length === 2) {
    const items = projectData?.[folder] || [];
    return (
      <ProjectsList 
        // win={win} 
        folder={folder}
        items={items}
        onBack={() => projectsBack(win.id)}
        onOpenDetail={(id) => goProjectsInto(win.id, id)}
    />);
  }

  //상세 페이지 준비중 
  if (path.length === 3){
    const items = projectData?.[folder] ||[];
    const detailItem = items.find((i) => i.id === detailId);

    return (
      <ProjectsDetail 
        folder={folder} 
        item={detailItem} 
        onBack={() => projectsBack(win.id)}/>
    )
  } 
  
  return <div>잘못된 경로입니다.</div>;
};

export default Projects