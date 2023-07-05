export const postData = async (url, body) => {
  const res = await fetch(`${process.env.BASE_API_URL_MAIN1}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  console.log(process.env.BASE_API_URL_MAIN1);
  return data;
};
