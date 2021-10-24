
document.addEventListener('DOMContentLoaded', () => {

  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature;
    document.querySelector('#temperature').className = thermostat.energyUsage();
  };
  
  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemperature();
  });

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemperature();
  });

  const displayWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY&units=metric`

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
      });
  };

  displayWeather('London');

  document.querySelector('#current-city').addEventListener('change', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;

    displayWeather(city);
  });

});






