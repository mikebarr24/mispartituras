import { GrClose } from "react-icons/gr";

function CloseButton(props) {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: 600,
    width: "40px",
    height: "40px",
    backgroundColor: "#08B9B8",
    color: "#efefef",
    cursor: "pointer",
    textAlign: "center",
    border: "4px solid #014652",
    borderRadius: "50px",
  };
  return (
    <div style={styles} onClick={props.onClick} className={props.className}>
      <GrClose />
    </div>
  );
}

export default CloseButton;
