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
  }, [props.instrument]);

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

  function DisplayResults(props) {
    let localData = apiData;
    if (display.filterInfo.search !== ""){
      localData = localData.filter(item => item[1].toLowerCase().includes(display.filterInfo.search.toLowerCase()) || item[2].toLowerCase().includes(display.filterInfo.search.toLowerCase()))
    } 
    if (display.filterInfo.nivel !== ""){
      localData = localData.filter(item => item[4] === display.filterInfo.nivel)
    } 
    if (display.filterInfo.estilo !== "") {
      localData = localData.filter(item => item[5] === display.filterInfo.estilo)
    }
    if (display.filterInfo.curso !== "") {
      localData = localData.filter(item => item[6] === display.filterInfo.curso)
    }
    const partInfo = localData.map(item => {
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
    })
    return partInfo
  }

  const filterNum = Object.values(display.filterInfo).filter(item => item !== "").length;
  
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
          Filtro {filterNum > 0 && `(${filterNum})`}
        </button>
      </div>
      {/* Lists parts on main page */}
      <div className="search-results-wrapper"><DisplayResults /></div>
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
