import "./Filter.scss";
import ReactDom from "react-dom";
import CloseButton from "../default/CloseButton";

function Filter(props) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
  }
  function resetForm() {
    props.setDisplay((state) => ({
      ...state,
      filterInfo: {
        search: "",
        nivel: "",
        estilo: "",
        curso: "",
      },
    }));
  }
  function submitForm() {
    props.setDisplay((state) => ({
      ...state,
      filterOpen: false,
    }));
  }

  function closeFilter() {
    props.setDisplay((state) => ({
      ...state,
      filterOpen: false,
      filterInfo: {
        search: "",
        nivel: "",
        estilo: "",
        curso: "",
      },
    }));
  }

  return ReactDom.createPortal(
    <div>
      <div className="filter-overlay"></div>
      <div className="filter-wrapper">
        <CloseButton className="filter-close-button" onClick={closeFilter} />
        <h1>Filtro</h1>
        <form onSubmit={handleSubmit}>
          <fieldset className="fitler-form">
            <input
              placeholder="Buscar"
              onChange={props.onChange}
              name="search"
              value={props.stateData.search}
            />
            <select
              name="nivel"
              onChange={props.onChange}
              value={props.stateData.nivel}
            >
              <option value="">-- Nivel --</option>
              <option value="Básico">Basico</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
              <option value="profesional">Profesional</option>
            </select>
            <select
              name="estilo"
              onChange={props.onChange}
              value={props.stateData.estilo}
            >
              <option value="">-- Estilo --</option>
              <option value="barroco">Barroco</option>
              <option value="classicismo">Classicismo</option>
              <option value="romanticismo">Romanticismo</option>
              <option value="contemporanea">Contemporánea</option>
            </select>
            <select
              name="curso"
              onChange={props.onChange}
              value={props.stateData.curso}
            >
              <option value="">-- Curso --</option>
              <option value="1">1º de Enseñanzas Básicos</option>
              <option value="2">2º de Enseñanzas Básicos</option>
              <option value="3">3º de Enseñanzas Básicos</option>
              <option value="4">4º de Enseñanzas Básicos</option>
              <option value="5">1º de Enseñanzas Profesionales</option>
              <option value="6">2º de Enseñanzas Profesionales</option>
              <option value="7">3º de Enseñanzas Profesionales</option>
              <option value="8">4º de Enseñanzas Profesionales</option>
              <option value="9">5º de Enseñanzas Profesionales</option>
              <option value="10">6º de Enseñanzas Profesionales</option>
            </select>
          </fieldset>
          <div className="filter-button-wrapper">
            <button className="filter-button" type="button" onClick={resetForm}>
              Reset
            </button>
            <button
              className="filter-button"
              type="button"
              onClick={submitForm}
            >
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Filter;
