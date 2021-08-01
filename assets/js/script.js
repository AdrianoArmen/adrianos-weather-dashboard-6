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


    fetch(

        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=840155a469a1270ff82a976016c38d58`
    )
        .then(function (response) {

            return response.json();
        })
        .then(function (data) {

            displayWeather(data, city);
        });
};


// localstorage of cities search history
let searchHistory = function () {
    localStorage.setItem("cityStored", JSON.stringify(cityStored));
};


// weather display for selected city function
let displayWeather = function (weather, citySelection) {
    selectedWeatherCont.textContent = "";
    selectedCity.textContent = citySelection;

    console.log(weather);
    console.log(citySelection);

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
    let windSpeed = document.createElement("span");
    windSpeed.textContent = "Wind: " + weather.wind.speed + " MPH";
    windSpeed.classList = "list-group-item";

    //selected city humidity
    let humidityPer = document.createElement("span");
    humidityPer.textContent = "Humidity: " + weather.main.humidity + " %";
    humidityPer.classList = "list-group-item";




    selectedWeatherCont.appendChild(temperature);
    selectedWeatherCont.appendChild(windSpeed);
    selectedWeatherCont.appendChild(humidityPer);


    let latitude = weather.coord.lat;
    let longitude = weather.coord.lon;

    uvIndex(latitude, longitude);
};


// selected city UV index
let uvIndex = function (latitude, longitude) {
    fetch(
        `https://api.openweathermap.org/data/2.5/uvi?appid=840155a469a1270ff82a976016c38d58&lat=${latitude}&lon=${longitude}`
    )


        .then(function (response) {


            return response.json();
        })
        .then(function (data) {

            displayUv(data);

        });
}


let displayUv = function (base) {


    let uvBase = document.createElement("div");
    uvBase.textContent = "UV Index : ";
    uvBase.classList = "list-group-item";

    uvValue = document.createElement("span");
    uvValue.textContent = base.value;

    if (base.value <= 3) {
        uvValue.classList = "green-uv";

    } else if (base.value > 3 && base.value <= 7) {
        uvValue.classList = "yellow-uv"

    }
    else if (base.value > 8) {
        uvValue.classList = "red-uv"
    };

    uvBase.appendChild(uvValue);
    selectedWeatherCont.appendChild(uvBase);

};


// five day forecast section


let fiveDayForecast = function (city) {
    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=840155a469a1270ff82a976016c38d58`
    )

        .then(function (response) {

            return response.json();
        })
        .then(function (data) {

            fiveDay(data);

        });
}


// display five day forecast cards
let fiveDay = function (weather) {

    fiveContainer.textContent = "";
    predictionH.textContent = "Five-Day Forecast";

    
    let next = weather.list;
    for(var i=5;i < next.length; i=i+8) {
        let next = weather.list;

        let displayCard = next[i];
        let nextCard = document.createElement("div");

        nextCard.classList = "card bg-success text-white m-2";
        

        // five day firecast date
        let nextDate = document.createElement("h5");
        nextDate.textContent = moment.unix(displayCard.dt).format("MMM D, YYY");
        nextDate.classList = "card-header text-center";
        nextCard.appendChild(nextDate);

        //five day forecast weather icon
        let fiveDayIcon = document.createElement("img");
        fiveDayIcon.classList = "card-body img-thumbnail m-1 p-1 text-center";
        fiveDayIcon.setAttribute("src", `https://openweathermap.org/img/wn/${displayCard.weather[0].icon}@2x.png`);
        nextCard.appendChild(fiveDayIcon);


        //five day forecast temperature 
        let fiveTemp = document.createElement("span");
        fiveTemp.classList = "card-body border bg-success m-1 p-1 text-center";
        fiveTemp.textContent = "Temp: " + displayCard.main.temp + " ºF";
        nextCard.appendChild(fiveTemp);


        // five day forecast humidity
        let fiveHumid = document.createElement("span");
        fiveHumid.classList = "card-body border bg-success m-1 p-1 text-center"
        fiveHumid.textContent = "Hum: " + displayCard.main.humidity + " %";
        nextCard.appendChild(fiveHumid);



        fiveContainer.appendChild(nextCard);
    }
}


// search history function

let lastSearch = function (lastSearch) {

    searchElement = document.createElement("button");
    searchElement.textContent = lastSearch;
    searchElement.classList = "d-flex w-100 btn-white border p-2";
    searchElement.setAttribute("data-city", lastSearch);
    storedSearches.setAttribute("type", "submit");

    storedSearches.prepend(searchElement);

}

let searchHandler = function (e) {
    let city = e.target.getAttribute("data-city");
    if (city) {

        cityWeather(city);
        fiveDayForecast(city);
    }
}




// input text trim functionality for api search
let textInput = function (event) {

    console.log("click");
    event.preventDefault();

    let city = searchInput.value.trim();
    console.log(city);
    if (city) {

        cityWeather(city);
        fiveDay(city);
        cityStored.unshift({ city });
        searchInput.value = "";

        searchHistory();
        lastSearch(city);

    };
}

searchForm.addEventListener("click", textInput);