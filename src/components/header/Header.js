import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <NavLink className="navbar-brand" to="/">
          <img
            className="image"
            src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg"
            alt="logo"
          ></img>
        </NavLink>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <div className="title">Catalogo</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
