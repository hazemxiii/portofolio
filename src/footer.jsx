export default function Footer() {
  return (
    <div className="footer">
      <div className="copyrights">
        &copy; 2024 - {new Date().getFullYear()} Flutter Developer. All rights
        Reserved
      </div>
      <ul className="links"></ul>
    </div>
  );
}
