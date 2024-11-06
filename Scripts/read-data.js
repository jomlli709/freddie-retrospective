document.getElementById('checkWeather').addEventListener('click', getWeather);

function getWeather() {
  fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true")
    .then(response => response.json())
    .then(data => {
      const current = data.current_weather;
      document.getElementById('weatherInfo').innerHTML = `
         <p>Temperature: ${celsiusToFahrenheit(current.temperature)}°F</p>
         <p>Wind Speed: ${current.windspeed} m/s</p>
      `;
    })
    .catch(error => console.error("Error fetching data:", error));
}
