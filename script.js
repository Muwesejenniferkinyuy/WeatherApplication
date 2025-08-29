let searchInp = document.querySelector('.weather_search');
let city = document.querySelector('.weather_city');
let day = document.querySelector('.weather_day');
let humidity = document.querySelector('.weather_indicator--humididty>.value');
let wind = document.querySelector('.weather_indicator--wind>.value');
let pressure = document.querySelector('.weather_indicator--pressure>.value');
let image = document.querySelector('.weather_image');
let temperature = document.querySelector('.weather_temperature');


let weatherAPIKey = 'fb749e6ec142307a45fd0b8c7d9b2808';
let weatherBaseEndpoint = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + weatherAPIKey;

let getweatherBycityName = async (city) => {
  let endpoint = weatherBaseEndpoint + '&q=' + city;
  let response = await fetch(endpoint);
  let weather = await response.json();
  return weather;
}

searchInp.addEventListener('keydown', async (e) => {
  if (e.keyCode === 13) {
    let weather = await getweatherBycityName(searchInp.value)
    console.log(weather);
  }
  
})

let updatecurrentweather = (data) => {
  city.textcontent = data.name + ', ' + data.sys.country;
  day.textContent = dayofweek();
}
let dayofweek = () => {
  return new Date().toLocaleDateString('en-EN', { 'weekday': 'long' });
}