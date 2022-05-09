import "./Instrument.scss";
import React from "react";
import levelColors from "../../levelsExport.js";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../default/Button.js";
import { BsFillArrowLeftCircleFill as BackArrow } from "react-icons/bs";

function Instrument() {
  const navigate = useNavigate();
  const instrumentName = useParams().instrument;
  const [levels] = levelColors();
  const [apiData, setApiData] = React.useState([]);

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
  }, []);

  //map through item in api array
  const apiList = apiData.map((item) => {
    return (
      <div key={item[0]} className="results-item">
        <p className="results-composer-name">{item[1]}</p>
        <p className="results-piece-name">{item[2]}</p>
        <img src={levels[item[4]]} alt="" className="level-image" />
      </div>
    );
  });

  //click functions
  function clickHandle() {
    navigate("/buscar");
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
          arrow={<BackArrow />}
          onClick={clickHandle}
        />
        <Button name={"Filtro"} className="filter-button" />
      </div>
      <div className="filter-results-wrapper">{apiList}</div>
    </div>
  );
}

export default Instrument;
