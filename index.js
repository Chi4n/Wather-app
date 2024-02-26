const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".wather-icon");

const apiKey = "5448303bb1aa3fb356316784a96ceef1";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km ";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./weather-app-img/images/Clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./weather-app-img/images/Clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./weather-app-img/images/Rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./weather-app-img/images/Drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./weather-app-img/images/Mist.png";
  }
  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  searchWeather();
});

searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchWeather();
  }
});

function searchWeather() {
  const searchTerm = searchBox.value;
  checkWeather(searchTerm);
}
