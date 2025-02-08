import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

import Section from "./section";
export default function ContactSection(){
    return <Section id="contact" title="Get In Touch" content={
    <ul>
        <li><a href="https://wa.me/+201150838594"><FaWhatsapp></FaWhatsapp>+201150838594</a></li>
        <li><a href="mailto:h9553014@gmail.com"><MdEmail/>h9553014@gmail.com</a></li>
        <li><a href="https://www.linkedin.com/in/hazem-mohamed-b296a6267/"><FaLinkedin/>Hazem Mohamed</a></li>
        <li><a href="https://github.com/hazemxiii"><IoLogoGithub/>hazemxiii</a></li>
    </ul>}></Section>
}