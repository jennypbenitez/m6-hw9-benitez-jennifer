const weatherApi = {
  key: "bb1288be130afde4eb09dc538e1c6a9a",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
}

  const searchInput = document.getElementById('weather-search');

  const button = document.getElementById('submit')
  button.addEventListener('click', () => {
    getWeather(searchInput.value);
})


function getWeather(city){
  fetch(`${weatherApi.baseUrl}?q=${city}&units=imperial&appid=${weatherApi.key}`)
  .then(weather => {
      return weather.json();
      }).then(displayWeather);
  }
  

function displayWeather (weather) {
  console.log(weather);
  let city = document.querySelector('.location');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  let weatherEl = document.querySelector('.current-weather');
  weatherEl.innerText = weather.weather[0].main;

  let tempEl = document.querySelector('.temp');
  tempEl.innerHTML = 'Current Temperature: ' + `${Math.round(weather.main.temp)}<span>°F</span>`;
  
  let feelsLike = document.querySelector('.feels-like');
  feelsLike.innerHTML = 'Feels Like: ' + `${Math.round(weather.main.feels_like)}<span>°F</span>`;

  let iconEl = document.querySelector(".weather-icon");
  const {icon} = weather.weather[0];
  iconEl.innerHTML = `<img src="icons/${icon}.png">`;
}