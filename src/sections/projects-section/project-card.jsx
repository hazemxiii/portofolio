import { PiGithubLogoFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project}) {
  const nav = useNavigate();

  return (
    <div className="card">
      <div className="img-cont">
        <img src={project.img} />
      </div>
      <div className="content">
        <h2>{project.title}</h2>
        <p>{project.brief}</p>
        <ul>
          {project.tags.map((tag, i) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="options">
          <div className="details" onClick={showDetails}>
            Show Details
          </div>
          <a href={project.gitHubLink} target="_blank" className="code">
            <PiGithubLogoFill />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );

  function showDetails() {
    nav(`/project-details/${project.id}`);
  }
}
