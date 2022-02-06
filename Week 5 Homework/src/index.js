// Current Date

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];

function showDate() {
  let date = document.querySelector("#date");
  date.innerHTML = `${day} ${now.getHours()}:${now.getMinutes()}`;
}

showDate();

// 👨‍🏫Your task
// On your project, when a user searches for a city (example: New York),
// it should display the name of the city on the result page and
// the current temperature of the city.

function showTemp(response) {
  console.log();
  let tempForSearchInput = document.querySelector("#temperature");
  tempForSearchInput.innerHTML = `${Math.round(response.data.main.temp)}°`;
}

function locateCityWeather(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input"); // search form input
  let newHeading = document.querySelector("h1");
  newHeading.innerHTML = `${searchInput.value}`;
  let units = "metric";
  let apiKey = "ceb455b9c7b642371d7b3ed2d734c15b";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  let tempForCity = console.log(apiUrl);

  axios.get(apiUrl).then(showTemp);
}

let searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", locateCityWeather);

//🙀 Bonus point:
// Add a Current Location button. When clicking on it,
//  it uses the Geolocation API to get your GPS coordinates
// and display and the city and current temperature using the OpenWeather API.

function showCurrentTemp(response) {
  console.log();
  let tempForSearchInput = document.querySelector("#temperature");
  tempForSearchInput.innerHTML = `${Math.round(response.data.main.temp)}°`;
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = `${response.data.name}`;
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "ceb455b9c7b642371d7b3ed2d734c15b";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiURL = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiURL).then(showCurrentTemp);
}

function locate(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentButton = document.querySelector("#current-location-button");
currentButton.addEventListener("click", locate);

navigator.geolocation.getCurrentPosition(showPosition);
