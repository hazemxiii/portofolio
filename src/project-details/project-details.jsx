import Section from "../sections/section"
import data from "./app-data";
import { FaExternalLinkAlt } from "react-icons/fa";
import FeaturesSection from "./features-section";


export default function ProjectDetails(){
    const id = "1"
    
    return <>
    <Section id="app-landing" content={
    <div className="content">
        <h1>{data[id].title}</h1>
        <p>{data[id].description}</p>
        <span><FaExternalLinkAlt/>Get It</span>
    </div>
    }></Section>
    <FeaturesSection features={data[id].features}/>
    </>
}