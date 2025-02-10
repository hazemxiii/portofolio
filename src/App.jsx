import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style.css'
import Header from "./header/header.jsx"
import Landing from './landing.jsx'
import AboutSection from './sections/about-section.jsx'
import SkillsSection from './sections/skills-section/skills-section.jsx'
import ProjectsSection from './sections/projects-section/projects-section.jsx'
import EducationSection from './sections/education-section.jsx'
import ContactSection from './sections/contact-section.jsx'
import Footer from './footer.jsx'
import ProjectDetails from "./project-details/project-details.jsx";

function App() {

  return (
   <> <Router>
      <Routes>
        <Route path="/" element={
        <>
         <Header/>
     <Landing/>
     <AboutSection></AboutSection>
     <SkillsSection></SkillsSection>
     <ProjectsSection></ProjectsSection>
     <EducationSection></EducationSection>
     <ContactSection></ContactSection>
     </>
    }></Route>
    <Route path="/project-details" element = {<ProjectDetails></ProjectDetails>}></Route>
     </Routes>
    </Router>
    <Footer></Footer></>
  )
}

export default App
