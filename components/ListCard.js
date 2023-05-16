import React from "react";

const ListCard = ({ title, children }) => {
  const titleStyles = {
    // display: "flex",
    // alignItems: "center",
    // color: "#EF7832",
    // justifyContent: "center",
    // borderBottom: "3px solid #EF7832",
    // padding: "10px",
  };
  return (
    <div className="list__card">
      <div style={titleStyles} className="list_card_title__">
        <span style={{ fontSize: "18px", fontWeight: "700" }}>{title}</span>
      </div>
      <div className="children_lnk">{children}</div>
    </div>
  );
};

export default ListCard;
