import Section from "./section";
import photo from "../assets/images/me.jpg";
export default function AboutSection() {
  return (
    <Section
      id="about"
      title="About me"
      content={
        <>
          {" "}
          <div className="img-cont">
            <img src={photo}></img>
          </div>
          <div className="text">
            <p>
              Hi, I'm <span>Hazem</span>, a passionate Flutter developer with a
              year of experience in creating cross-platform mobile applications.
              I love turning ideas into reality through clean, efficient, and
              user-friendly code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies.
            </p>
          </div>
        </>
      }
    />
  );
}
