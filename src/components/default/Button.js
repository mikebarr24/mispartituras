import React from "react";

function Button(props) {
  const styles = {
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    border: "none",
    display: "flex",
    fontSize: "1rem",
    fontWeight: "600",
    alignItems: "center",
    justifyContent: "center",
  };

  const arrowStyle = {
    fontSize: "1.5rem",
    display: "flex",
    marginRight: "0.5rem",
  };

  return (
    <button className={props.className} style={styles} onClick={props.onClick}>
      {props.arrow && <div style={arrowStyle}>{props.arrow}</div>} {props.name}
    </button>
  );
}

export default Button;
