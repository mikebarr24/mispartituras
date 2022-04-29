import "./SearchResults.scss";
import React from "react";
import SearchItem from "./SearchItem.js";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Part from "./Part.js";
import Filter from "./Filter";

function SearchResults(props) {
  const initialFilter = {
    search: "",
    nivel: "",
    estilo: "",
    curso: "",
  };
  const [apiData, setApiData] = React.useState([]);
  const [display, setDisplay] = React.useState({
    partOpen: false,
    filterOpen: false,
    partInfo: [],
    filterInfo: initialFilter,
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

  function setFilterData(event) {
    setDisplay((state) => ({
      ...state,
      filterInfo: {
        ...state.filterInfo,
        [event.target.name]: event.target.value,
      },
    }));
  }

  function openFilter() {
    setDisplay((state) => ({
      ...state,
      filterOpen: true,
    }));
  }

  /*   const partsList = apiData.map((item) => {
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
  }); */

  const partsList = apiData
    .filter((item) => item[4] === display.filterInfo.nivel)
    .map((item) => {
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
    <div className="search-results">
      <div className="search-results-button-wrapper">
        <button onClick={() => props.onClick("instSelect")}>
          <span>
            <AiOutlineArrowLeft />
          </span>
          Instrumentos
        </button>
        <button className="filtro-button" onClick={openFilter}>
          Filtro
        </button>
      </div>
      {/* Lists parts on main page */}
      <div className="search-results-wrapper">{partsList}</div>
      {display.partOpen && (
        <Part setDisplay={setDisplay} partInfo={display.partInfo} />
      )}
      {display.filterOpen && (
        <Filter
          onChange={setFilterData}
          stateData={display.filterInfo}
          setDisplay={setDisplay}
        />
      )}
    </div>
  );
}

export default SearchResults;
