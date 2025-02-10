import ProjectCard from "./project-card";
import Section from "../section";
import Project from "../../project-details/app-data";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
