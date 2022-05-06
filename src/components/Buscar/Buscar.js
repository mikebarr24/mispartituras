import "./Buscar.scss";
import React from "react";
import smallInstrumentPics from "../../smallInstrumentPics.js";
import { Link } from "react-router-dom";

export default function Buscar() {
  const instrumentPics = smallInstrumentPics();

  const instruments = instrumentPics.map((item) => {
    return (
      <Link key={item.id} to={item.name}>
        <div className="instrument-wrapper">
          <img src={item.link} alt={`${item.name} icon`} />
          <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
        </div>
      </Link>
    );
  });

  return (
    <section id="buscar" className="container">
      <h1 className="section-title">Buscar</h1>
      <div className="instrument-selection-wrapper">{instruments}</div>
    </section>
  );
}
