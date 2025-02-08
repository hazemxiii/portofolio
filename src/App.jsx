
import './style.css'
import Header from "./header/header.jsx"
import Landing from './landing.jsx'
import AboutSection from './sections/about-section.jsx'
import SkillsSection from './sections/skills-section/skills-section.jsx'
import ProjectsSection from './sections/projects-section/projects-section.jsx'
import EducationSection from './sections/education-section.jsx'
import ContactSection from './sections/contact-section.jsx'
import Footer from './footer.jsx'

function App() {

  return (
    <>
     <Header/>
     <Landing/>
     <AboutSection></AboutSection>
     <SkillsSection></SkillsSection>
     <ProjectsSection></ProjectsSection>
     <EducationSection></EducationSection>
     <ContactSection></ContactSection>
     <Footer></Footer>
    </>
  )
}

export default App
