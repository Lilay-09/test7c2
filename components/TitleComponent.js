import React from "react";

const TitleComponent = ({ children, mr, cap }) => {
  const styles = {
    color: "#643617",
    width: "fit-content",
    margin: "1rem",
    textTransform: cap ? `capitalize` : `uppercase`,
    fontWeight: "800",
    display: "flex",
    fontSize: "25px",
    flexDirection: "column",
    gap: "0.4rem",
  };
  const underLine = {
    backgroundColor: "#EF7832",
    height: "1px",
    margin: `0 ${mr}px`,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bolder",
    color: "#643617",
  };
  const thickUnderLine = {
    backgroundColor: "#EF7832",
    width: "50%",
    height: "5px",
    borderRadius: "2px",
  };
  return (
    <div style={styles}>
      <span>{children}</span>
      <div style={underLine}>
        <div style={thickUnderLine}></div>
      </div>
    </div>
  );
};

export default TitleComponent;
