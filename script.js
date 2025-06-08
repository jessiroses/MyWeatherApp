function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");

  let temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#city");

  let weatherCondition = document.querySelector("#description");

  let weatherHumidity = document.querySelector("#humidity");

  let weatherWind = document.querySelector("#wind-speed");

  let timeElement = document.querySelector("#time");

  let date = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  weatherCondition.innerHTML = response.data.condition.description;
  weatherHumidity.innerHTML = `${response.data.temperature.humidity}%`;
  weatherWind.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Add leading zero if needed
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

function searchCity(city) {
  // search APi call and update interface
  let apiKey = "t63c383f46801a32dfab71dd884c0fod";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Sydney");
