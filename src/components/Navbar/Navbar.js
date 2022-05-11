import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  function handleClick() {
    document.querySelector(".nav-list").classList.toggle("active");
  }
  return (
    <header className="navbar">
      <Link className="navbar-logo" to="/mispartituras">
        MisPartituras
      </Link>
      <nav className="nav-list">
        <ul>
          <li className="nav-item">
            <Link to="/mispartituras" onClick={handleClick}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nosotros" onClick={handleClick}>
              Nosotros
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/buscar" onClick={handleClick}>
              Buscar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" onClick={handleClick}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      <div className="burger-button" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
