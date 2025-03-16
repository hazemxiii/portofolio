import Section from "../sections/section";
export default function OtherFeaturesSection({ features }) {
  return (
    <Section
      id="other-features"
      title="Other Features"
      content={
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      }
    ></Section>
  );
}
