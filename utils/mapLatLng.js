function getLatLongFromMapUrl(mapUrl) {
  const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
  const match = mapUrl.match(regex);

  if (match && match.length >= 3) {
    const latitude = parseFloat(match[1]);
    const longitude = parseFloat(match[2]);
    return { latitude, longitude };
  }

  return null; // Return null if the map URL format doesn't match or latitude/longitude cannot be extracted
}

const mapUrl =
  "https://www.google.com/maps/place/Vectorasoft+Co.,+Ltd,+%E1%9E%95%E1%9F%92%E1%9E%91%E1%9F%87%E1%9E%9B%E1%9F%81%E1%9E%81+AP,+1151+%E1%9E%9C%E1%9E%B7%E1%9E%90%E1%9E%B8%E1%9E%A2%E1%9E%97%E1%9E%B7%E1%9E%9C%E1%9E%8C%E1%9F%92%E1%9E%8D%E1%9E%93%E1%9F%8D+OCIC,+Phnom+Penh+121001/@11.6003943,104.9262956,18z/data=!4m6!3m5!1s0x310951def85fcf25:0xb231d7b61e45f6a9!8m2!3d11.5992546!4d104.9259853!16s%2Fg%2F11qbgx1x9m";
const coordinates = getLatLongFromMapUrl(mapUrl);
if (coordinates) {
  const { latitude, longitude } = coordinates;
} else {
  // console.log("Unable to extract latitude and longitude from the map URL.");
}
export default getLatLongFromMapUrl;
