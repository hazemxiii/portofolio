import Section from "./section"
export default function EducationSection(){
    return     <Section id="education" title="Education" content={<div className="content">
    <h2>Faculty Of Computer And DataScience</h2>
    <div className="info">
        <p>Alexandria University</p>
        <p>2021-2025</p>
    </div>
    <p>Relevant coursework: Mobile App Development, Software Engineering, Data Structures & Algorithms</p>
</div>}/>
}