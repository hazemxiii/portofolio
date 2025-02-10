export default function Section({ id, title, content }) {
  return (
    <div className="section" id={id}>
      <h1>{title}</h1>
      <div className="content">{content}</div>
    </div>
  );
}
