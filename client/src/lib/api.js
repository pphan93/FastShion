const API_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmUzNmVlNDgyNzQxYmYwYzc1MDE3ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzE5NjA0OSwiZXhwIjoxNjQ3NDU1MjQ5fQ.ak4Mpy-J3LK9SPyLEWMxZIrCHiwq7Ouaw8tHf62hK-Q";

export async function getProducts(category) {
  const subAPIURL = "product";

  console.log(category);
  const response = await fetch(
    category ? API_URL + subAPIURL + "?category=Coat" : API_URL + subAPIURL
  );
  let data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  return data;
}
