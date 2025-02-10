import { PiGithubLogoFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({id,title,img,brief,tags}){
    const nav = useNavigate();

    return <div className="card">
        <div className="img-cont">
            <img src={img}/>
        </div>
        <div className="content">
        <h2>{title}</h2>
            <p>{brief}</p>
            <ul>
                {
                    tags.map((tag,i)=><li key={tag}>{tag}</li>)
                }
            </ul>
            <div className="options">
                <div className="details" onClick={showDetails}>Show Details</div>
                <div className="code">
                <PiGithubLogoFill />
                    Source Code</div>
            </div></div>
    </div>

    function showDetails(){
        nav(`/project-details?id=1`);
    }
}