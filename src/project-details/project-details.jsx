import Section from "../sections/section";
import Project from "./app-data/project";
import { FaExternalLinkAlt } from "react-icons/fa";
import FeaturesSection from "./features-section";
import { useParams } from "react-router-dom";
import { AiFillAndroid } from "react-icons/ai";
import { FaWindows } from "react-icons/fa";
import OtherFeaturesSection from "./other-features-section";

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
            {Project.data[id].note && (
              <div
                className="note"
                style={{ color: Object.values(Project.data[id].note)[0] }}
              >
                {Object.keys(Project.data[id].note)[0]}
              </div>
            )}
            <ul className="platforms">
              {Object.keys(Project.data[id].platforms).map((platformName) => {
                return (
                  <a
                    key={platformName}
                    className={`platform-btn ${platformName}`}
                    href={Project.data[id].platforms[platformName]}
                  >
                    {getPlatformIcon(platformName)}
                    {platformName}
                  </a>
                );
              })}
            </ul>
          </div>
        }
      ></Section>
      <FeaturesSection features={Project.data[id].features} />
      {getOtherFeaturesSection(id)}
    </>
  );
}

function getOtherFeaturesSection(id) {
  let otherFeatures = Project.data[id].otherFeatures;
  if (otherFeatures.length != 0) {
    return (
      <OtherFeaturesSection features={otherFeatures}></OtherFeaturesSection>
    );
  }
  return null;
}

function getPlatformIcon(platformName) {
  switch (platformName) {
    case "web":
      return <FaExternalLinkAlt></FaExternalLinkAlt>;
    case "android":
      return <AiFillAndroid></AiFillAndroid>;
    case "windows":
      return <FaWindows></FaWindows>;
    default:
      break;
  }
}
