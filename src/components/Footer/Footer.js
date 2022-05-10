import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

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
        <div className="footer-social">
          <a href="/" className="footer-social-link">
            <FaTwitter />
          </a>
          <a href="/" className="footer-social-link">
            <FaInstagram />
          </a>
          <a href="/" className="footer-social-link">
            <FaFacebook />
          </a>
        </div>
      </div>
      <p className="copyright">
        © All Rights Reserved MisPartituras {new Date().getFullYear()}
      </p>
    </footer>
  );
}
