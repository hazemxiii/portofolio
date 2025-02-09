import ProjectCard from "./project-card";
import Section from "../section";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default function ProjectsSection(){
    return     <Section id="projects" title="Projects" content={<>
        <ProjectCard title="Prayer App" brief="Muslim prayer times companion" 
        tags = {["Location Services","Shared Preferences","Provider","Background Services","SQL lite","Third-party API"]}

        ></ProjectCard>

<ProjectCard title="Home Quotes" brief="Displays user text on a homescreen widget" 
        tags = {["File management", "SharedPreferences", "Provider", "work manager", "Android home screen widget"]}
        ></ProjectCard>

<ProjectCard title="Accounts' Safe" brief="Saves user accounts" 
        tags = {["File management", "SharedPreferences", "Provider", "Encryption"]}
        ></ProjectCard>

<ProjectCard title="TeamHive" brief="Team or Class Management" 
        tags = {["SharedPreferences", "Provider","Firebase","Third-party API"]}
        ></ProjectCard>
       
    </>}/>

}