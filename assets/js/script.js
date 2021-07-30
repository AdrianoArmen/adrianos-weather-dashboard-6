// API Key: 840155a469a1270ff82a976016c38d58

// variables 
let cityStored = [];
let searchForm = $("#search-form");
let searchInput = $("#search-input");
let selectedWeatherCont = $("#selected-weather-container");
let selectedCity = $("#selected-city")
let predictionH = $("#prediction");
let fiveContainer = $("#five-container");
let storedSearches = $("#stored-searches");


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
            displayW(data, town);
        });
};

// localstorage of cities search history
let searchHistory = function () {
    localStorage.setitem("cityStored", JSON.stringify(cityStored));
};


// weather display for selected city function
let displayW = function (weather, selectedCity) {
    wContainerEl.textContent = "";
    selectedCity.textContent = selectedCity;

    console.log(weather);
    console.log(selectedCity);

    // selected city current date
    let currentDate = $("<span/>");
    currentDate.textContent =
        " (" + moment(weather.dt.value).format("MMM D, YYYY") + ")";
    selectedCity.append(currentDate);

    //selected city weather icon
    let weatherIcon = $("<img/>");
    weatherIcon.attr("src", "");

    // selected city temperature
    let temperature = $("<span/>");
    temperature.text("Temperature: " + weather.main.temp + " ºF");
    temperature.addClass("data-list");

    //selected city wind speed
    let wind = $("<span/>");
    wind.text("Wind speed: " + weather.wind.speed + " MPH");
    wind.addClass("data-list");

    //selected city humidity
    let humidity = $("<span/>");
    humidity.text("Humidity: " + weather.main.humidity + " %");
    humidity.addClass("data-list");


    // UV Index <-

    selectedWeatherCont.append(temperature);
    selectedWeatherCont.append(wind);
    selectedWeatherCont.append(humidity);
};