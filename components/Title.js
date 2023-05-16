import React from "react";

const Title = ({ children, fs, cap }) => {
  const underLine = {
    backgroundColor: "#8C471D",
    width: "50%",
    height: "2px",
    margin: "0.2rem 0",
  };
  return (
    <div
      style={{
        width: "fit-content",
        color: "#643617",
        fontSize: fs ? `${2}vw` : `20px`,
        fontWeight: "700",
        textTransform: cap ? "capitalize" : "uppercase",
      }}
    >
      <span className="title_font">{children}</span>
      <div style={underLine}></div>
    </div>
  );
};

export default Title;
