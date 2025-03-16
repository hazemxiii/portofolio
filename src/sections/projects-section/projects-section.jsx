import ProjectCard from "./project-card";
import Section from "../section";
import Project from "../../project-details/app-data/project";
import "../../project-details/app-data/projects/moazzin";
import "../../project-details/app-data/projects/quote";
import "../../project-details/app-data/projects/account";
import "../../project-details/app-data/projects/team";

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      content={
        <>
          {Object.keys(Project.data).map((e) => (
            <ProjectCard key={e} project={Project.data[e]} />
          ))}
        </>
      }
    />
  );
}
