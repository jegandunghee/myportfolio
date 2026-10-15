// 프로젝트를 폴더 형태 UI로 그룹화하여 표시하는 컴포넌트

// import { FiFolder } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";
import "./ProjectFolders.scss";

const FOLDERS = [
  { key: "team", label: "team" },
  { key: "personal", label: "personal" },
  { key: "clone", label: "clone" },
];

const ProjectFolders = ({ onOpenFolder }) => {
  return (
    <section className="pFolders" aria-label="project folders">
      {FOLDERS.map((i) => (
        <button
          key={i.key}
          type="button"
          className="pFolders__item"
          onDoubleClick={() => onOpenFolder(i.key)}
        >
          <span className="pFolders__icon" aria-hidden="true">
            <FaFolder size={48} />
          </span>
          <span className="pFolders__label">{i.label}</span>
        </button>
      ))}
    </section>
  );
};

export default ProjectFolders;