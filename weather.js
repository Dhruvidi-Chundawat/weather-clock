const apikey = "dae26f57dfd7f003ada31d68fe7787bb";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
       const response = await fetch(apiurl+ city + `&appid=${apikey}`);

       var data = await response.json();
          console.log(data);


          document.querySelector(".city").innerHTML= data.name;
          document.querySelector(".temp").innerHTML= Math.round (data.main.temp) + "°C";
          document.querySelector(".humidity").innerHTML= data.main.humidity +"%" ;
          document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";

          if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png";

          } 
          else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "https://cdn0.iconfinder.com/data/icons/weather-forecast-17/128/forecast-weather_sun-clear-hot-512.png";

          }
          else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "https://cdn.icon-icons.com/icons2/3059/PNG/512/cloud_expand_weather_forecast_rain_icon_190664.png";

          }
          else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYBC15BjdZhCyIfUMUbYHNQI0dsWhQ2xZJ-w&s";

          }
          else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/514/514240.png";

          }
    
};
        
        searchBtn.addEventListener("click", () =>{
            checkWeather(searchBox.value);
        } )


