import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <li
      key={item.id}
      className={`nav-item ${item.cName}`}
      onMouseEnter={item.subMenu ? handleMouseEnter : null}
      onMouseLeave={item.subMenu ? handleMouseLeave : null}
    >
      <Link to={item.path}>{item.title}</Link>
      {item.subMenu && isOpen && (
        <ul className="accounting-submenu">
          {item.subMenu.map((subMenuItem) => (
            <li key={subMenuItem.id} className="submenu-item">
              <Link to={subMenuItem.path}>{subMenuItem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default Dropdown;
