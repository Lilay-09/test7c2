import { useRouter } from "next/router";
import React from "react";
import getLatLongFromMapUrl from "../utils/mapLatLng";

const Test = () => {
  // Create embed src using the latitude and longitude
  let url =
    "https://www.google.com/maps/place/Vectorasoft+Co.,+Ltd/@11.5992598,104.9234104,17z/data=!3m1!4b1!4m6!3m5!1s0x310951def85fcf25:0xb231d7b61e45f6a9!8m2!3d11.5992546!4d104.9259853!16s%2Fg%2F11qbgx1x9m";
  const em = getLatLongFromMapUrl(url);
  let lng = em.longitude;
  let lat = em.latitude;
  console.log(lat);
  const embedSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0.1!2d${lng}!3d${lat}`;

  return (
    <div>
      <iframe
        src={embedSrc}
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Test;
export function convertMapLinkToEmbedSrc(mapLink) {
  const baseUrl = "https://maps.google.com/maps";
  const embedSrc = `${baseUrl}?output=embed&q=${encodeURIComponent(mapLink)}`;
  return embedSrc;
}
