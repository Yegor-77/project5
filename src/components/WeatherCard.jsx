const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";


export async function searchCity(city) {
  const response = await fetch(
    `${GEOCODING_URL}?name=${encodeURIComponent(
      city
    )}&count=1&language=en&format=json`
  );

  if (!response.ok) {
    throw new Error("City search failed gg");
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("City not found sorry");
  }

  return data.results[0];
}


export async function getWeather(latitude, longitude) {
  const response = await fetch(
    `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`
  );

  if (!response.ok) {
    throw new Error("Weather request failed");
  }

  return await response.json();
}