import React from "react";

const Google_map = ({ src }) => {
  const mapContainer = {
    width: "100%",
    height: "35vw",
    minHeight: "260px",
  };
  return (
    <div style={mapContainer}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Google_map;
