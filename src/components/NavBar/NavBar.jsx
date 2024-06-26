import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="app">
      <ul>
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/contact">Contacts</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
