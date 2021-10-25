import React from 'react';
import { Link } from 'gatsby';

// eslint-disable-next-line react/prop-types
const Menu = ({ menuOpen, setMenuOpen }) => {
  const menuBarHandler = () => setMenuOpen(false);
  return (
    <div className={`menu ${menuOpen && 'active'}`}>
      <ul>
        <li>
          <Link to="#hero" onClick={menuBarHandler}>
            Home
          </Link>
        </li>
        <li>
          <Link to="#about" onClick={menuBarHandler}>
            About
          </Link>
        </li>
        <li>
          <Link to="#projects" onClick={menuBarHandler}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="#contact" onClick={menuBarHandler}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
