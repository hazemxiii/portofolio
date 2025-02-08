import { PiGithubLogoFill } from "react-icons/pi";

export default function ProjectCard(props){
    return <div className="card">
        <div className="img-cont">
            <img src={props.img}/>
        </div>
        <div className="content">
        <h2>{props.title}</h2>
            <p>{props.brief}</p>
            <ul>
                {
                    props.tags.map((tag,i)=><li key={tag}>{tag}</li>)
                }
            </ul>
            <div className="options">
                <div className="details">Show Details</div>
                <div className="code">
                <PiGithubLogoFill />
                    Source Code</div>
            </div></div>
    </div>
}