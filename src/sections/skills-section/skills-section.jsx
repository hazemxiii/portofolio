import Skill from "./skill";
import Section from "../section";

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      content={
        <>
          <Skill name="Flutter/Dart"></Skill>
          <Skill name="React"></Skill>
          <Skill name="TypeScript"></Skill>
          <Skill name="Python"></Skill>
          <Skill name="MySQL"></Skill>
          <Skill name="Firebase"></Skill>
          <Skill name="MongoDB"></Skill>
          <Skill name="Git/GitHub"></Skill>
          <Skill name="Integration of REST APIs and third-party libraries"></Skill>
          <Skill name="State Management (Provider)"></Skill>
          <Skill name="OOP/Design Patterns"></Skill>
        </>
      }
    />
  );
}
