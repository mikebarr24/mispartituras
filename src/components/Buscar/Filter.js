import CloseButton from "../default/CloseButton";
import Button from "../default/Button";
import ReactDOM from "react-dom";
import "./Filter.scss";

function Filter(props) {
  const STYLES_OVERLAY = {
    position: "fixed",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0,0.7)",
  };
  return ReactDOM.createPortal(
    <>
      <div
        style={STYLES_OVERLAY}
        className="overlay"
        onClick={() => props.onClick((state) => !state)}
      ></div>
      <div className="filter-wrapper">
        <CloseButton
          className="filter-close-button"
          onClick={() => props.onClick((state) => !state)}
        />
        <h1>Filtro</h1>
        <div className="filter-options">
          <input
            type="text"
            placeholder=" Buscar"
            onChange={props.onChange}
            value={props.values.buscar}
            name="buscar"
          />
          <select
            onChange={props.onChange}
            value={props.values.nivel}
            name="nivel"
          >
            <option value="">-- Nivel --</option>
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
          <select
            onChange={props.onChange}
            value={props.values.estilo}
            name="estilo"
          >
            <option value="">-- Estilo --</option>
            <option value="Barrocco">Barrocco</option>
            <option value="Clasicismo">Clasicismo</option>
            <option value="Romanticismo">Romanticismo</option>
            <option value="Contemperánea">Contemperánea</option>
          </select>
          <select
            onChange={props.onChange}
            value={props.values.curso}
            name="curso"
          >
            <option value="">-- Curso --</option>
            <option value="1º de Enseñanzas Básicos">
              1º de Enseñanzas Básicos
            </option>
            <option value="2º de Enseñanzas Básicos">
              2º de Enseñanzas Básicos
            </option>
            <option value="3º de Enseñanzas Básicos">
              3º de Enseñanzas Básicos
            </option>
            <option value="4º de Enseñanzas Básicos">
              4º de Enseñanzas Básicos
            </option>
            <option value="1º de Enseñanzas Profesionales">
              1º de Enseñanzas Profesionales
            </option>
            <option value="2º de Enseñanzas Profesionales">
              2º de Enseñanzas Profesionales
            </option>
            <option value="3º de Enseñanzas Profesionales">
              3º de Enseñanzas Profesionales
            </option>
            <option value="4º de Enseñanzas Profesionales">
              4º de Enseñanzas Profesionales
            </option>
            <option value="5º de Enseñanzas Profesionales">
              5º de Enseñanzas Profesionales
            </option>
            <option value="6º de Enseñanzas Profesionales">
              6º de Enseñanzas Profesionales
            </option>
          </select>
        </div>
        <div className="filter-button-wrapper">
          <Button name="Reset" shade="dark" onClick={props.onChange} />
          <Button
            name="Filter"
            shade="dark"
            onClick={() => props.onClick((state) => !state)}
          />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Filter;
