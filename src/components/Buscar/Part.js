import "./Part.scss";
import ReactDOM from "react-dom";
import CloseButton from "../default/CloseButton";
import Button from "../default/Button";
function Part(props) {
  const OVERLAY = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
  };

  const PART = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return ReactDOM.createPortal(
    <div>
      <div
        className="part-overlay"
        style={OVERLAY}
        onClick={props.closeButton}
      ></div>
      <div className="part-wrapper" style={PART}>
        <CloseButton
          className="part-close-button"
          onClick={props.closeButton}
        />
        <h1>{props.partInfo[1]}</h1>
        <p>
          <span className="bold">Compositor</span> - {props.partInfo[2]}
        </p>
        <p>
          <span className="bold">Nivel</span> - {props.partInfo[4]}
        </p>
        {props.partInfo[5] !== "" && (
          <p>
            <span className="bold">Estilo</span> - {props.partInfo[5]}
          </p>
        )}

        <p>
          <span className="bold">Curso</span> - {props.partInfo[6]}
        </p>
        <div className="part-button-wrapper">
          <a href={props.partInfo[7]} target="_blank">
            <Button name="Partitura" shade="dark" />
          </a>
          <a href={props.partInfo[8]} target="_blank">
            <Button name="Escuchar" shade="dark" />
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Part;
