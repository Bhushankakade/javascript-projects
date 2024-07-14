const temp = document.getElementById("temp");
const cityName = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const search = document.querySelector(".input-field input");
const searchBtn = document.querySelector(".input-field button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const apiKey = "44b6a8f4811fee8e2d9a564aa1aa77d1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  if (response.status == 404) {
    error.style.display = "block";
  } else {
    search.value = "";
    cityName.innerHTML = data.name;
    console.log(city);
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + " %";
    wind.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "image/cloudspng.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "image/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "image/drizzlepng.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "image/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "image/snowr.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "image/rain.png";
    }

    weather.style.display = "block";
    error.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  getWeather(search.value);
});
