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

