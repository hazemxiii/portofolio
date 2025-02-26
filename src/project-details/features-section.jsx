import { useState } from "react";
import Section from "../sections/section";
import FeatureCard from "./feature-card";
export default function FeaturesSection({ features }) {
  const [selectedI, setSelectedI] = useState(0);

  var imgIndicators = [];

  return (
    <Section
      id="features"
      title="App Features"
      content=<>
        <div className="features-card-cont">
          {features.map((feature, i) => {
            imgIndicators.push(
              <li onClick={() => setSelectedI(i)}>
                <div
                  className={`indicator${i == selectedI ? " active" : ""}`}
                ></div>
              </li>
            );
            return (
              <span key={feature.title} onClick={() => setSelectedI(i)}>
                {" "}
                <FeatureCard feature={feature} isSelected={i == selectedI} />
              </span>
            );
          })}
        </div>
        <div className="img-cont">
          <img src={features[selectedI].getImageSrc()} alt="" />
          <ul className="img-indicators">{...imgIndicators}</ul>
        </div>
      </>
    ></Section>
  );
}
