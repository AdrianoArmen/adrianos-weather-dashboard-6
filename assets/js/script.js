// API Key: 840155a469a1270ff82a976016c38d58

// variables 
let cityStored = [];
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
let selectedWeatherCont = document.querySelector("#selected-weather-container");
let selectedCity = document.querySelector("#selected-city")
let predictionH = document.querySelector("#prediction");
let fiveContainer = document.querySelector("#five-container");
let storedSearches = document.querySelector("#stored-searches");




//  openweather fetch api using api key

let cityWeather = function (city) {
    console.log("cityWeather");

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=840155a469a1270ff82a976016c38d58`
    )
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayWeather(data, city);
        });
};


// localstorage of cities search history
let searchHistory = function () {
    localStorage.setitem("cityStored", JSON.stringify(cityStored));
};


// weather display for selected city function
let displayW = function (weather, selectedCity) {
    selectedWeatherCont.textContent = "";
    selectedCity.textContent = selectedCity;

    console.log(weather);
    console.log(selectedCity);

    // selected city current date
    let currentDate = document.createElement("span");
    currentDate.textContent = (
        " (" + moment(weather.dt.value).format("MMM D, YYYY") + ")");
    selectedCity.appendChild(currentDate);

    //selected city weather icon
    let weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    selectedCity.appendChild(weatherIcon)

    // selected city temperature
    let temperature = document.createElement("span");
    temperature.textContent = "Temperature: " + weather.main.temp + " ºF";
    temperature.classList = "list-group-item";

    //selected city wind speed
    let wind = document.createElement("span");
    wind.textContent = "Wind: " + weather.wind.speed + " MPH";
    wind.classList = "list-group-item";

    //selected city humidity
    let humidity = document.createElement("span");
    humidity.textContent = "Humidity: " + weather.main.humidity + " %";
    humidity.classList = "list-group-item";


    // UV Index <-

    selectedWeatherCont.appendChild(temperature);
    selectedWeatherCont.appendChild(wind);
    selectedWeatherCont.appendChild(humidity);
};

// input text trim functionality for api search
let textInput = function (event) {

    console.log("click");
    event.preventDefault();

    let city = searchInput.value.trim();
    console.log(city);
    if (city) {
        cityWeather(city);
        cityStored.unshift({ city });
        searchInput.value = "";

        // searchHistory();

    };
}

searchForm.addEventListener("click", textInput);