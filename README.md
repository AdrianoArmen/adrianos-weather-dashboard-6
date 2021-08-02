# adrianos-weather-dashboard-6

Homework 6 - Weather Dashboard


## HOMEWORK LINKS

* GitHub Repository [GitHub repository link](https://github.com/AdrianoArmen/adrianos-weather-dashboard-6) 

* Website Deployed [Website Deploy link](https://adrianoarmen.github.io/adrianos-weather-dashboard-6/) 


## Mock-Up

The following image shows the web application's appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for Atlanta.](./assets/img/06-server-side-apis-homework-demo.png)


## Project Description
This sample Weather Dashboard was designed to showcase my Server-Side APIs knowledge. I used [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve live weather data from cities around the world. The app frontend was composed with Bootstrap following the Mockup guide. The search bar will grab the text and use it to fetch the required data from the server. The data will be displayed on the main section and the UV index will have a color guide to indicate their level. Also, 5 card elements will display at the bottom of the 5 Day Forecast. At the left section, all past searches will be displayed to help navigate previously displayed cities.




## App Functionality

The following animation demonstrates the actual application functionality:

![A user searches for different cities on the weather dashboard and retrieves all the climate information and th 5 day forecast accordingly to the criteria](./assets/img/appfunctionality.gif)



-------------------------------

# 06 Server-Side APIs: Weather Dashboard

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```



## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

    * Uses the OpenWeather API to retrieve weather data.

    * Uses `localStorage` to store persistent data.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
