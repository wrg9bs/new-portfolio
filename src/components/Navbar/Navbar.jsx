import React from 'react';
import { Link } from 'gatsby';

// eslint-disable-next-line react/prop-types
const Navbar = ({ menuOpen, setMenuOpen }) => {
  const handleKeypress = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div id="navbar" className={`navbar ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            onKeyPress={handleKeypress}
            role="button"
            tabIndex={0}
          >
            <span className="line1" />
            <span className="line2" />
            <span className="line3" />
          </div>
        </div>

        <div className="right">
          <div className="hr-line" />
          <Link to="#hero" className="logo">
            BO-AT
          </Link>
          <div className="hr-line" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
