import "./SearchResults.scss";
import React from "react";
import SearchItem from "./SearchItem.js";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Part from "./Part.js";

function SearchResults(props) {
  const [apiData, setApiData] = React.useState([]);
  const [display, setDisplay] = React.useState({
    partOpen: false,
    partInfo: [],
  });

  //Fetch apiData from Google Sheets API
  React.useEffect(() => {
    const fetchapiData = async () => {
      const apiData = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/1b2l5fS3N3QM7zvNGtmHrlYC344j5v9HATf8d4JykhQw/values/${props.instrument}?key=AIzaSyDMk6p2-FZDwC1Cn56PVTJJF4-kw6znd24`
      );
      const processedApiData = await apiData.json();
      setApiData(processedApiData.values.slice(1));
    };
    fetchapiData();
  }, []);

  function getPart(partId) {
    const selectedPart = apiData.filter((item) => item[0] === partId);
    setDisplay((state) => ({
      ...state,
      partOpen: true,
      partInfo: selectedPart[0],
    }));
  }

  const partsList = apiData.map((item) => {
    return (
      <SearchItem
        key={item[0]}
        id={item[0]}
        piece={item[1]}
        composer={item[2]}
        nivel={item[4]}
        onClick={getPart}
      />
    );
  });

  return (
    <div className="filter">
      <div className="filter-button-wrapper">
        <button onClick={() => props.onClick("instSelect")}>
          <span>
            <AiOutlineArrowLeft />
          </span>
          Instrumentos
        </button>
        <button className="filtro-button">Filtro</button>
      </div>
      {/* Lists parts on main page */}
      <div className="filter-wrapper">{partsList}</div>
      {display.partOpen && (
        <Part setDisplay={setDisplay} partInfo={display.partInfo} />
      )}
    </div>
  );
}

export default SearchResults;
