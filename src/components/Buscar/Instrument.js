import "./Instrument.scss";
import { useParams } from "react-router-dom";

function Instrument() {
  const instrumentName = useParams().instrument;
  return (
    <div className="instrument-wrapper">
      <h1>{instrumentName}</h1>
    </div>
  );
}

export default Instrument;
