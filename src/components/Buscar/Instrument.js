import "./Instrument.scss";

function Instrument(props) {
  return (
    <div
      className="instrument-selector"
      onClick={() => props.onClick("searchResults", props.instrument)}
    >
      <img src={props.image} />
      <h3>{props.instrument}</h3>
    </div>
  );
}

export default Instrument;
