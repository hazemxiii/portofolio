export default function Section(props){
    return <div className="section" id={props.id}>
        <h1>{props.title}</h1>
        <div className="content">
        {props.content}
        </div>
    </div>
}