export const postData = async (url, body) => {
  const res = await fetch(`${process.env.BASE_API_URL_MAIN_1}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};
