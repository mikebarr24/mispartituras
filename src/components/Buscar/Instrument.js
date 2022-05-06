import "./Instrument.scss";
import React from "react";
import levelColors from "../../levelsExport.js";
import { useParams } from "react-router-dom";

function Instrument() {
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

  return (
    <div className="instrument-wrapper container">
      <h1>{instrumentName}</h1>
      <div className="filter-results-wrapper">{apiList}</div>
    </div>
  );
}

export default Instrument;
