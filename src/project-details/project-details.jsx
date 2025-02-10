import Section from "../sections/section";
import Project from "./app-data";
import { FaExternalLinkAlt } from "react-icons/fa";
import FeaturesSection from "./features-section";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { id } = useParams();

  return (
    <>
      <Section
        id="app-landing"
        content={
          <div className="content">
            <h1>{Project.data[id].title}</h1>
            <p>{Project.data[id].description}</p>
            <span>
              <FaExternalLinkAlt />
              Get It
            </span>
          </div>
        }
      ></Section>
      <FeaturesSection features={Project.data[id].features} />
    </>
  );
}
