import "./SearchItem.scss";
import {
  easy,
  intermediate,
  difficult,
  professional,
} from "../../levelsExport.js";

function SearchItem(props) {
  let levelImage = "";
  //Select the color linked to "Nivel"
  switch (props.nivel) {
    case "Básico":
      levelImage = easy;
      break;
    case "Intermedio":
      levelImage = intermediate;
      break;
    case "Avanzado":
      levelImage = difficult;
      break;
    default:
      console.log("No nivel recieved");
      break;
  }

  return (
    <div
      className="search-results-item"
      onClick={() => props.onClick(props.id)}
    >
      <p className="search-results-piece">{props.piece}</p>
      <p className="search-results-composer">{props.composer}</p>
      <img src={levelImage} />
    </div>
  );
}

export default SearchItem;
