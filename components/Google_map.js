import React from "react";

const Google_map = () => {
  const mapContainer = {
    width: "100%",
    height: "35vw",
    minHeight: "260px",
  };
  return (
    <div style={mapContainer}>
      <iframe
        src="https://goo.gl/maps/USYV31sSCGkSbptr8"
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1161.9563752976228!2d104.92579167926769!3d11.59910541296794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951def85fcf25%3A0xb231d7b61e45f6a9!2sVectorasoft%20Co.%2C%20Ltd!5e0!3m2!1skm!2skh!4v1682044616348!5m2!1skm!2skh"
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
