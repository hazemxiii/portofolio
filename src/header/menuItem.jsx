export default function MenuItem(props){
    return (<>
    <li><a href={`#${props.name}`}>{capitalize(props.name)}</a></li>
    </>)
}

function capitalize(s){
    return `${s[0].toUpperCase()}${s.slice(1)}`
}