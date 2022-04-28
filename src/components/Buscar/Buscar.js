import "./Buscar.scss";
import React from "react";
import Instrument from "./Instrument.js";
import SearchResults from "./SearchResults.js";
import {
  flute,
  bassoon,
  cello,
  clarinet,
  horn,
  piano,
  trombone,
  trumpet,
  viola,
  violin,
} from "../../instrumentExport";

export default function Buscar() {
  const [display, setDisplay] = React.useState("instSelect");
  const [instrument, setInstrument] = React.useState("");

  window.onpopstate = function () {
    setDisplay("instSelect");
  };

  function pageSelect(page, instrument) {
    let urlOption = "";
    page === "searchResults"
      ? (urlOption = instrument.toLowerCase())
      : (urlOption = "");
    setDisplay(page);
    setInstrument(instrument);
    window.history.pushState({ id: display }, null, `/buscar/${urlOption}`);
  }

  return (
    <section id="buscar" className="container">
      <h1 className="section-title">Buscar</h1>
      {display === "instSelect" && (
        <div className="instrument-selection-wrapper">
          <h3>Select your Instrument</h3>
          <Instrument image={piano} instrument="Piano" onClick={pageSelect} />
          <Instrument image={flute} instrument="Flauta" onClick={pageSelect} />
          <Instrument image={bassoon} instrument="Fagot" onClick={pageSelect} />
          <Instrument
            image={clarinet}
            instrument="Clarinete"
            onClick={pageSelect}
          />
          <Instrument
            image={violin}
            instrument="Violino"
            onClick={pageSelect}
          />
          <Instrument image={viola} instrument="Viola" onClick={pageSelect} />
          <Instrument image={cello} instrument="Cello" onClick={pageSelect} />
          <Instrument
            image={trumpet}
            instrument="Trumpet"
            onClick={pageSelect}
          />
          <Instrument image={horn} instrument="Trompa" onClick={pageSelect} />
          <Instrument
            image={trombone}
            instrument="Trombón"
            onClick={pageSelect}
          />
        </div>
      )}
      {display === "searchResults" && (
        <SearchResults onClick={pageSelect} instrument={instrument} />
      )}
    </section>
  );
}
