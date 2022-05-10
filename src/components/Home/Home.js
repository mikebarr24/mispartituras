import "./Home.scss";
import { Link } from "react-router-dom";
import RecentPart from "./RecentPart";

export default function Home() {
  return (
    <section id="inicio" className="container">
      <h1 className="hero-title">
        Si no sabes qué tocar hoy, este es tu sitio
      </h1>
      <p className="hero-sub-title">
        Busca, escucha y encuentra partituras de tu nivel de la forma más
        sencilla.
      </p>
      <Link to="/buscar">
        <button className="buscar-button">Buscar Partituras</button>
      </Link>
    </section>
  );
}
