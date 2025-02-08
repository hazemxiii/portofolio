import Skill from "./skill";
import Section from "../section";

export default function SkillsSection(){
    return <Section id="skills" title="Skills" content={<>
        <Skill name="Flutter/Dart"></Skill>
        <Skill name="Android Development Background"></Skill>
        <Skill name="State Management"></Skill>
        <Skill name="Integration of REST APIs and third-party libraries"></Skill>
        <Skill name="Firebase"></Skill>
        <Skill name="OOP/Design Patterns"></Skill>
        <Skill name="SQL"></Skill>
        <Skill name="Git/GitHub"></Skill>
        <Skill name="IoT Background"></Skill>
        </>}/>

    
}