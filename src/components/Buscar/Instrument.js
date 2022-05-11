import "./Instrument.scss";
import React from "react";
import levelColors from "../../levelsExport.js";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../default/Button.js";
import Filter from "./Filter";
import { BsFillArrowLeftCircleFill as BackArrow } from "react-icons/bs";
import Part from "./Part";

function Instrument() {
  let filterInit = {
    buscar: "",
    nivel: "",
    estilo: "",
    curso: "",
  };

  const [apiData, setApiData] = React.useState([]);
  const [display, setDisplay] = React.useState({ filter: false, part: false });
  const [filterValues, setFilterValues] = React.useState(filterInit);
  const [part, setPart] = React.useState([]);
  const navigate = useNavigate();
  const instrumentName = useParams().instrument;
  const [levels] = levelColors();
  //Fetch apiData from Google Sheets API
  React.useEffect(() => {
    const fetchApiData = async () => {
      const apiData = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1b2l5fS3N3QM7zvNGtmHrlYC344j5v9HATf8d4JykhQw/values/${instrumentName}?key=AIzaSyDMk6p2-FZDwC1Cn56PVTJJF4-kw6znd24`
      );
      const processedApiData = await apiData.json();
      setApiData(processedApiData.values.slice(1));
    };
    fetchApiData();
  }, [instrumentName]);

  //map through item in api array
  const numFilters = Object.values(filterValues).filter(
    (item) => item !== ""
  ).length;

  function DisplayResults() {
    let localData = apiData;
    if (filterValues.buscar !== "") {
      localData = localData.filter(
        (item) =>
          item[1].toLowerCase().includes(filterValues.buscar.toLowerCase()) ||
          item[2].toLowerCase().includes(filterValues.buscar.toLowerCase())
      );
    }
    if (filterValues.nivel !== "") {
      localData = localData.filter((item) => item[4] === filterValues.nivel);
    }
    if (filterValues.estilo !== "") {
      localData = localData.filter((item) => item[5] === filterValues.estilo);
    }
    if (filterValues.curso !== "") {
      localData = localData.filter((item) => item[6] === filterValues.curso);
    }
    return localData.map((item) => {
      return (
        <div
          key={item[0]}
          className="results-item"
          onClick={() => partClick(item[0])}
        >
          <p className="results-composer-name">{item[1]}</p>
          <p className="results-piece-name">{item[2]}</p>
          <img src={levels[item[4]]} alt="" className="level-image" />
          <Button name="Ver Mas" shade="dark" className="ver-mas-button" />
        </div>
      );
    });
  }

  //click functions
  function changeFilter(event) {
    if (event.target.name === "Reset") {
      setFilterValues(filterInit);
    }
    setFilterValues((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }

  function partClick(part) {
    setDisplay((state) => ({
      ...state,
      part: !state.part,
    }));
    const selectedPart = apiData.find((item) => item[0] === part);
    setPart(selectedPart);
  }

  //stops scroll with modal
  if (display.part === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }
  return (
    <div className="instrument-wrapper container">
      <h1>
        {instrumentName.charAt(0).toUpperCase() + instrumentName.slice(1)}
      </h1>
      <div className="search-button-wrapper">
        <Button
          name={"Instrumentos"}
          className="back-button"
          before={<BackArrow />}
          onClick={() => navigate("/buscar")}
        />
        <Button
          name="Filtro"
          className="filter-button"
          onClick={() =>
            setDisplay((state) => ({
              ...state,
              filter: !state.filter,
            }))
          }
          after={numFilters > 0 && numFilters}
        />
      </div>
      <div className="filter-results-wrapper">{DisplayResults()}</div>
      {display.filter === true && (
        <Filter
          onClick={setDisplay}
          onChange={changeFilter}
          values={filterValues}
        />
      )}
      {display.part === true && (
        <Part
          partInfo={part}
          closeButton={() =>
            setDisplay((state) => ({
              ...state,
              part: !state.part,
            }))
          }
        />
      )}
    </div>
  );
}

export default Instrument;
