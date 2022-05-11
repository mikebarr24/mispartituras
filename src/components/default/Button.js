import React from "react";

function Button(props) {
  let buttonColor = "#efefef";
  let textColor;
  if (props.shade === "dark") {
    buttonColor = "#014652";
    textColor = "#efefef";
  }
  const styles = {
    borderRadius: "40px",
    border: "none",
    display: "flex",
    fontWeight: "600",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: buttonColor,
    color: textColor,
  };

  const arrowStyle = {
    fontSize: "1.5rem",
    display: "flex",
    marginRight: "0.5rem",
  };

  return (
    <button
      className={props.className}
      style={styles}
      onClick={props.onClick}
      name={props.name}
    >
      {props.before && <div style={arrowStyle}>{props.before}</div>}
      {props.name} {props.after && `(${props.after})`}
    </button>
  );
}

export default Button;
