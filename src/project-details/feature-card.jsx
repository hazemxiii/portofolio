export default function FeatureCard({ feature, isSelected }) {
  return (
    <div className={`feature-card${isSelected ? " selected" : ""}`}>
      <div className="info">
        {feature.ico} {feature.title}
      </div>
      <p>{feature.desc}</p>
    </div>
  );
}
