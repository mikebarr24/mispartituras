import "./Footer.scss";
import { Link } from "react-router-dom";
import SocialIcons from "../default/SocialIcons";

export default function Footer() {
  return (
    <footer className="container">
      <h2 className="footer-logo">MisPartituras</h2>
      <ul className="footer-nav">
        <li>
          <Link to="/mispartituras">Inicio</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/buscar">Buscar</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
      <div className="footer-contact">
        <h3 className="footer-contact-title">Contacto</h3>
        <p>Email: info@mispartituras.com</p>
      </div>
      <SocialIcons color="#014652" className="footer-social" />
      <p className="copyright">
        © All Rights Reserved MisPartituras {new Date().getFullYear()}
      </p>
    </footer>
  );
}
