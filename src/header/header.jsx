import MenuItem from "./menuItem";
import { useState } from "react";

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <div className="header-container">
        <div className="logo">
          <span>HM</span>
        </div>
        <ul className={`menu ${isHidden ? "hidden" : ""}`}>
          <MenuItem name="about"></MenuItem>
          <MenuItem name="skills"></MenuItem>
          <MenuItem name="projects"></MenuItem>
          <MenuItem name="contact"></MenuItem>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );

  function toggleMenu() {
    setIsHidden((h) => !h);
  }
}
