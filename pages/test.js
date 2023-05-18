import React from "react";

const Test = () => {
  // Replace the URL with your Google Maps URL
  var googleMapsUrl =
    "https://www.google.com/maps/place/Vectorasoft+Co.,+Ltd/@11.5992598,104.9234104,17z/data=!3m1!4b1!4m6!3m5!1s0x310951def85fcf25:0xb231d7b61e45f6a9!8m2!3d11.5992546!4d104.9259853!16s%2Fg%2F11qbgx1x9m";

  // Extract the latitude and longitude from the URL
  var latLngRegex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
  var match = googleMapsUrl.match(latLngRegex);
  var latitude = match[1];
  var longitude = match[2];

  // Create the embed code
  var embedCode =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d' +
    longitude +
    "!3d" +
    latitude +
    "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s" +
    encodeURIComponent(googleMapsUrl) +
    "!2m2!1d" +
    longitude +
    "!2d" +
    latitude +
    '!5e0!3m2!1sen!2sus!4v1629205665881" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
  console.log(embedCode);
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d104.9234104!3d11.5992598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1shttps%3A%2F%2Fwww.google.com%2Fmaps%2Fplace%2FVectorasoft%2BCo.%2C%2BLtd%2F%4011.5992598%2C104.9234104%2C17z%2Fdata%3D!3m1!4b1!4m6!3m5!1s0x310951def85fcf25%3A0xb231d7b61e45f6a9!8m2!3d11.5992546!4d104.9259853!16s%252Fg%252F11qbgx1x9m!2m2!1d104.9234104!2d11.5992598!5e0!3m2!1sen!2sus!4v1629205665881"
        width="600"
        height="450"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Test;
