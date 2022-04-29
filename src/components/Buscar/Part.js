import ReactDOM from "react-dom";
import CloseButton from "../default/CloseButton";
import "./Part.scss";

function Part(props) {
  function closePart() {
    props.setDisplay((state) => ({
      ...state,
      partOpen: false,
    }));
  }

  return ReactDOM.createPortal(
    <div className="part-section">
      <div className="overlay"></div>
      <div className="part-wrapper">
        <CloseButton onClick={closePart} className={"part-close-button"} />
        <div className="part-information">
          <h2 className="part-name">{props.partInfo[1]}</h2>
          <h3 className="part-composer-name">{props.partInfo[2]}</h3>
          <p>Instrumento - {props.partInfo[3]}</p>
          <p>Nivel - {props.partInfo[4]}</p>
          {props.partInfo[5] !== "" && <p>Estilo - {props.partInfo[5]}</p>}
          <p>Curso - {props.partInfo[6]}</p>
        </div>
        <div className="part-button-wrapper">
          <a href={props.partInfo[7]} target="_blank" rel="noreferrer">
            <button>Partitura</button>
          </a>
          <a href={props.partInfo[8]} target="_blank" rel="noreferrer">
            <button>Escuchar</button>
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Part;
