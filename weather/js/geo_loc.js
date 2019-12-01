'use strict';

var pageNav = document.querySelector('#page-nav');
var statusContainer = document.querySelector('#status');
var contentContainer = document.querySelector('#main-content');
var locStore = window.localStorage;
var sessStore = window.sessionStorage;

// Weather Site JavaScript Functions
document.addEventListener("DOMContentLoaded", function(){
    footerDate();
    console.log(document.getElementById("primary").classList);
    document.getElementById("primary").classList.toggle("hide");
    // Variables for Wind Chill function
    // let temp = 31;
    // let speed = 5;
    // buildWC(speed, temp);
    // Time Indicator Function
    // let hour="1";
    // timeBall(hour);
    // Change Background Image
    // let outside = "snow";
    // outside = outside.toLowerCase();
    // console.log(outside);
    // changeSummaryBackground(outside);
    // Get weather json data
  
})


// Button Function
function toggleMenu() {
    console.log(document.getElementById("primary").classList);
    document.getElementById("primary").classList.toggle("hide");
}

// Copyright Year
var year = new Date().getFullYear();
document.getElementById("copyYear").innerHTML = year;

// Last Modified Date
function footerDate() {
    var date = new Date(document.lastModified);
    var realDate = date.getDate();
    var day = new Date(document.lastModified);
    var numDay = day.getDay();
    var monthy = new Date(document.lastModified);
    var mm = monthy.getMonth();
    var yyyy = new Date(document.lastModified);
    var year = yyyy.getFullYear();

    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var nameWeek = week[numDay];

    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var nameMonth = month[mm];

    var fullDate = nameWeek + "," + " " + realDate + " " + nameMonth + " " + year;

    document.getElementById("today").innerHTML = fullDate;

}

// Calculate Windchill
function buildWC(speed, temp) {
    let feelTemp = document.getElementById('feelTemp');

// Compute the windchill
let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);

// Round answer down to integer
wc = Math.floor(wc);

// If chill is greater than temp, return the temp
wc = (wc > temp)?temp:wc;

// Display the windchill
console.log(wc);
// wc = 'Feels Like: ' + wc + '&deg;F';
// feelTemp.innerHTML = wc;
return wc;
}

// Time Indicator Function 
function timeBall(hour){
    //Find all "ball" classes and remove them
    let x = document.querySelectorAll(".ball");
    for (let item of x) {
        console.log(`Ball location is: ${hour}`);
        // item.classList.remove("ball");
    }

    // Find all hours that match the parameter and add the "ball" class
    let hr = document.querySelectorAll(".i"+hour);
    for (let item of hr){
        item.classList.toggle("ball");
    }
}

//Change shortForecast to keyword
function getKeyword(shortForecast) {
    let forecast = shortForecast.toLowerCase();
    var keyword;
    if (forecast.includes("sunny") || forecast.includes("clear")){
        keyword = "clear";
    }
    else if (forecast.includes("cloud") || forecast.includes("overcast")){
        keyword = "cloudy";
    }
    else if (forecast.includes("snow") || forecast.includes("snow showers") || forecast.includes("sleet")){
        keyword = "snow";
    }
    else if (forecast.includes("rain") || forecast.includes("thunder") || forecast.includes("showers")){
        keyword = "rain";
    }
    else if (forecast.includes("fog")){
        keyword = "fog";
    }
    else {
        console.log("Forecast Error");
    }
    return keyword;
}

    // Function to change background image
    function changeSummaryBackground(keyword) {
        let x = document.getElementById('compContainer');
        console.log(`Outside is: ${keyword}`);

    // Case Statements to change background image into current condition
    console.log(keyword);
    switch (keyword) {
        case "clear":
            x.className += 'clear';
            break;
        case "rain":
            x.className += 'rain';
            break;
        case "fog":
            x.className += 'fog';
            break;
        case "snow":
            x.className += 'snow';
            break;
        case "cloudy":
            x.className += 'cloudy';
            break;
        default:
            console.log("Weather Type Not Found");
            break;
    }
    console.log(`The used name is: ${x.className}`);


    // Pull correct image
    let width = window.innerWidth;
    console.log(`Width of screen: ${width}`);
    if ((width >= (720)) && (keyword == 'clear')) {
        var imgLoad = "url(/images/clear-large.jpg)";
    }
    else if ((width >= (720)) && (keyword == 'rain')) {
        var imgLoad = "url(/images/rain-large.jpg)";
    }
    else if (width >= (720) && keyword == 'fog') {
        var imgLoad = "url(/images/fog-large.jpg)";
    }
    else if (width >= (720) && keyword == 'snow') {
        var imgLoad = "url(/images/snow-large.jpg)";
    }
    else if (width >= (720) && keyword == 'cloudy') {
        var imgLoad = "url(/images/clouds-large.jpg)";
    }
    else if (width < (720) && keyword == 'clear') {
        var imgLoad = "url(/images/clear-small.jpg)";
    }
    else if (width < (720) && keyword == 'fog') {
        var imgLoad = "url(/images/fog-small.jpg)";
    }
    else if (width < (720) && keyword == 'rain') {
        var imgLoad = "url(/images/rain-small.jpg)";
    }
    else if (width < (720) && keyword == 'snow') {
        var imgLoad = "url(/images/snow-small.jpg)";
    }
    else if (width < (720) && keyword == 'cloudy') {
        var imgLoad = "url(/images/clouds-small.jpg)";
    }
    else {
        console.log("Img Error");
    }
    console.log(`imgLoad is: ${imgLoad}`);

    // Set background image
    const backgroundImg = document.body.style;
    backgroundImg.setProperty("--dynamic-weather-background", `${imgLoad}`);
    console.log(`${imgLoad} is the new background.`);
    }

    // // Fetch Weather Data
    // function fetchWeatherData(weatherURL) {
    //     let cityName = p.properties.relativeLocation.properties.city; // The data we want from the weather.json file
    //     fetch(weatherURL)
    //     .then(function(response) {
    //         if(response.ok){
    //             return response.json();
    //         }
    //         throw new ERROR('Network response was not OK.');
    //         })
    //     .then(function(data){
    //     // Check the data object that was retrieved
    //     console.log(data);
    //     // data is the full JavaScript object, but we only want the preston part
    //     // shorten the variable and focus only on the data we want to reduce typing
    //     let p = data[cityName];

    // //**********  Get the location information  **********
    //     let locName = properties.relativeLocation.properties.city;
    //     console.log(`city is: ${locName}`);
    //     let locState = p.properties.relativeLocation.properties.state;
    //     console.log(`state is: ${locState}`);
    //     // Put them together
    //     let fullName = locName+ ', '+locState;
    //     // See if it worked, using ticks around the content in the log
    //     console.log(`fullName is: ${fullName}`);
    //     // Get longitude and latitude and combine them to a comma separated single string
    //     const latLong = p.properties.relativeLocation.geometry.coordinates[1] + ","+ p.properties.relativeLocation.geometry.coordinates[0];
    //     console.log(latLong);
    //     // Create a json object containing full name, latitude and longitude and store in local storage
    //     const prestonData = JSON.stringify({fullName, latLong});
    //     locStore.setItem("Preston,ID", prestonData);
        
    // //**********  Get the current conditions information  **********
    //     // As the data is extracted from the json, store it into session storage
    //     sessStore.setItem("fullName",fullName);
    //     sessStore.setItem("latLong",latLong);
    //     // Get temperature data
    //     let temp = p.properties.relativeLocation.properties.temperature;
    //     let highTemp = p.properties.relativeLocation.properties.highTemp;
    //     let lowTemp = p.properties.relativeLocation.properties.lowTemp;
    //     sessStore.setItem("temp",temp);
    //     sessStore.setItem("highTemp",highTemp);
    //     sessStore.setItem("lowTemp",lowTemp);
    //     // Get wind data
    //     let windGust = p.properties.relativeLocation.properties.windGust;
    //     let windSpeed = p.properties.relativeLocation.properties.windSpeed;
    //     sessStore.setItem("windGust",windGust);
    //     sessStore.setItem("windSpeed",windSpeed);
    //     // Get hourly data using another function - should include the forecast temp, condition icons and wind speeds. The data will be stored into session storage.
    //     getHourly(p.properties.forecastHourly);
    // })
    //     .catch(function(error){
    //         console.log('There was a fetch problem: ', error.message);
    //         statusContainer.innerHTML = 'Sorry, the data could not be processed.';
    //     })
    // }










    //Set global variable for custom header required by NWS API
var idHeader = { headers: { "User-Agent": "Student Learning Project - hud18002@byui.edu" } };
//Call the function to get our location
getGeoLocation();

//Functions work together to get weather info for current location and populate web page with data
var storage = window.localStorage;
var session = window.sessionStorage;

//Gets longitude and latitude of current location
function getGeoLocation() {
    const status = document.getElementById('status');
    status.innerHTML = 'Getting Location...';

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            //Combine the values
            const locale = lat + "," + long;
            console.log(`Lat and Long are: ${locale}.`);

            //Store Coordinates in session storage
            session.setItem('locale', locale);

            //Call getLocation function, send locale
            getLocation(locale);
        })
    } 
    else {
        status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
    } // end else
} //end getGeoLocation

//Gets location information from the NWS API
function getLocation(locale) {
    const URL = "https://api.weather.gov/points/" + locale;
    console.log(`locale is: ${locale}`);
    //NWS User-Agent header (build above) is the second parameter
    fetch(URL, idHeader)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        throw new Error('Response not OK.');
    })
    .then(function (data) {
        //Let's see what we got back
        console.log(`Json object from getLocation function:`);
        console.log(data);

        // Create a json object containing full name, latitude and longitude and store in local storage
        var fullName = data.properties.relativeLocation.properties.city + ", " + data.properties.relativeLocation.properties.state;
        console.log(`Full Name is: ${fullName}`);
        // Create a json object containing full name, latitude and longitude and store in local storage
        const currentData = JSON.stringify({fullName, locale});
        storage.setItem(fullName, currentData);
        session.setItem("fullName", fullName);

        // Store to session storage
        session.setItem("forecastURL", data.properties.forecast);
        session.setItem("forecastHourlyURL", data.properties.forecastHourly);

        //Next, get the weather station ID before requesting current conditions
        //URL for station list is in the data object
        let stationsURL = data.properties.observationStations;
        //Call the function to get the list of weather stations
        getStationId(stationsURL);
    })
    .catch(error => console.log(`There was a getLocation error: `, error))
} // end getLocation function

// Gets weather statio list and nearest weather station ID from the NWS API
function getStationId(stationsURL) {
    //NWS User-Agent header (built above) will be the second parameter
    fetch(stationsURL, idHeader)
    .then(function(response) {
        if(response.ok){
            return response.json();
        }
        throw new Error('Response not OK.');
    })
    .then(function (data) {
        //Let's see what we got back
        console.log('From getStationID function:');
        console.log(data);

        //Store station ID and elevation (in meters - will need to be converted to feet)
        let stationId = data.features[0].properties.stationIdentifier;
        let stationElevation = data.features[0].properties.elevation.value;
        console.log('Station and Elevation are: ' + stationId, stationElevation);

        //Store data to sessionstorage
        session.setItem("stationId", stationId);
        session.setItem("stationElevation", stationElevation);

        //Request the Current Weather for this station
        getWeather(stationId);
    })
    .catch(error => console.log('There was a getStationId error: ', error))
    } //end getStationId function

// Gets current weather information for a specific weather station from the NWS API
function getWeather(stationId) {
    // This is the URL for current observation data 
    var URL = 'https://api.weather.gov/stations/' + stationId + '/observations/latest';
    fetch(URL, idHeader)
    .then(function(response) {
        if(response.ok){
            return response.json();
        }
        throw new ERROR('Response not OK.');
    })
    .then(function (data) {
        // Let's see what we got back
        console.log('From getWeather function:');
        console.log(data);

        // Store current weather information to sessionStorage
        // Current Temp
        let temp = data.properties.temperature.value;
        console.log(`celsius temp is: ${temp}`);
        let fTemp = Math.round((temp * 9/5) + 32);
        console.log(`currentTemp is: ${fTemp}`);
        session.setItem('temp', fTemp);
        // Wind Speed
        let mWindSpeed = data.properties.windSpeed.value;
        let windSpeed = Math.round(mWindSpeed * 2.237);
        session.setItem("windSpeed", windSpeed);
        console.log(`Wind Speed is: ${windSpeed}`);
        // Wind Gusts
        let mWindGust = data.properties.windGust.value;
        let windGust = Math.round(mWindGust * 2.237);
        session.setItem("windGust", windGust);
        console.log(`wind gusts are: ${windGust}`);
        
        // Call the getForecast function
        getForecast(session.getItem("forecastURL"));
        // Call the getHourly function
        getHourly(session.getItem("forecastHourlyURL"));
    })
    .catch(error => console.log('There was a getWeather error: ', error));
} // end getWeather function

function getForecast(URL) {
    fetch(URL, idHeader)
    .then(function(response){
        if(response.ok){
            return response.json();
        }
        throw new ERROR("Response not OK.");
    })
    .then(function (data){
        // Let's see what we got back
        console.log('From getForecast function:');
        console.log(data);

        // Store High and low temperature data
        let highTemp = data.properties.periods[0].temperature;
        console.log(`High temp is: ${highTemp}`);
        session.setItem('highTemp', highTemp);
        let lowTemp = data.properties.periods[1].temperature;
        console.log(`Low temp is: ${lowTemp}`);
        session.setItem("lowTemp", lowTemp);
    })
}
















    // *************** Get Hourly Forecast Data ******************
    function getHourly(URL){
        fetch(URL, idHeader)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Response not OK.');
        })
        .then(function (data) {
        console.log('Data from getHourly function:');
        console.log(data); //Let's see what we got back

        // Store 12 hours of data to session storage
        var hourData = [];
        let todayDate = new Date();
        var nowHour = todayDate.getHours();
        console.log(`nowHour is: ${nowHour}`);
        for (let i = 0, x = 11; i <= x; i++)
            if (nowHour < 24) {
                hourData[nowHour] = data.properties.periods[i].temperature + "," + data.properties.periods[i].windSpeed + "," + data.properties.periods[i].icon;
                sessStore.setItem(`hour${nowHour}`, hourData[nowHour]);
                nowHour++;
            }
            else {
            nowHour = nowHour - 12;
            hourData[nowHour] = data.properties.periods[i].temperature + "," + data.properties.periods[i].windSpeed + "," + data.properties.periods[i].icon;
            sessStore.setItem(`hour${nowHour}`, hourData[nowHour]);
            nowHour = 1;
            }

            // Get the shortForecast value from the first hour (the current hour)
            // This will be the condition keyword for setting the background image
            sessStore.setItem('shortForecast', data.properties.periods[0].shortForecast);
            // Call the buildPage function
            buildPage();
        })
            .catch(error => console.log('There was a getHourly error: ', error));
    }

    // *********************** Build the Weather Page ************************************
    function buildPage() {
        // Set the title with the location name at the first
        // Gets the title element so it can be worked with
        let pageTitle = document.querySelector('#page-title');
        // Create a text node containing the full name
        let fullNameNode = document.createTextNode(sessStore.getItem('fullName'));
        // inserts the fullName value before any other content that might exist
        pageTitle.insertBefore(fullNameNode, pageTitle.childNodes[0]);
        // When this is done the title should look like this:
        // (Current Location) | mybetterweather.com
    }

    // Get the h1 to display the city location
    let contentHeading = document.querySelector('#contentHeading');
    contentHeading.innerHTML = sessStore.getItem('fullName');
    // The h1 in the main element should now say the name of your location

    // Get the coordinates container for the location
    let latLong = document.querySelector('#location');
    latLong.innerHTML = sessStore.getItem('locale');
    let elevation = document.querySelector('#elevation');
    elevation.innerHTML = "Elevation: " + (session.getItem('stationElevation') * 3.28) + "ft";
    // The latitude and longitude should match what was stored in session storage

    // Get the condition keyword and set Background picture
    var cast = sessStore.getItem('shortForecast');
    var background = getKeyword(cast);
    changeSummaryBackground(background);

    // ************ Set Current Conditions Info **************************
    // Set the temperature information
    let highTemp = document.querySelector('#high');
    let loTemp = document.querySelector('#low');
    let currentTemp = document.querySelector('#temp');
    let feelTemp = document.querySelector('#feelTemp');
    highTemp.innerHTML = "High: " + sessStore.getItem('highTemp') + "°F";
    loTemp.innerHTML = "Low: " + sessStore.getItem('lowTemp') + "°F";
    currentTemp.innerHTML = sessStore.getItem('temp') + "°F";
    // Set wind information
    let speed = document.querySelector('#windSpeed');
    let gust = document.querySelector('#gusts');
    speed.innerHTML = "Wind Speed: " + sessStore.getItem('windSpeed') + "mph";
    gust.innerHTML = "Gusts: " + sessStore.getItem('windGust') + "mph";
    // Calculate feel like temp
    feelTemp.innerHTML = "Feels Like: " + buildWC(sessStore.getItem('windSpeed'), sessStore.getItem('temp')) + "°F";

    // ******** Set Time Indicators **************
    let thisDate = new Date();
    var currentHour = thisDate.getHours();
    let indicatorHour;
    // if Hour is greater than 12, subtract 12
    if (currentHour > 12) {
        indicatorHour = currentHour - 12;
    }
    else {
        indicatorHour = currentHour;
    };
    console.log(`Current hour in time indicator is: ${currentHour}`);
    // Set time indicator
    timeBall(indicatorHour);

    // ****************** Hourly Temperature Component *************
    // Get the hourly data from storage as an array
    let currentData = [];
    let tempHour = currentHour;
    // Adjust counter based on current time
    for (let i = 0, x = 12; i < x; i++) {
        if (tempHour <= 23) {
            currentData[i] = sessStore.getItem("hour" + tempHour).split(",");
            tempHour++;
        }
        else {
            tempHour = tempHour - 12;
            currentData[i] = sessStore.getItem("hour" + tempHour).split(",");
            console.log(`CurrentData[i][0] is: ${currentData[i][0]}`);
            tempHour = 1;
        } 
    }
    console.log(`currentData is: ${currentData}`);

    // Loop through array inserting data
    // Start with the outer container that matches the current time
    tempHour = currentHour;
    for (let i = 0, x = 12; i < x; i++) {
        if (tempHour >= 13) {
            tempHour = tempHour - 12;
        }
        document.querySelector('.temperature .o' + tempHour).innerHTML = currentData[i][0];
        tempHour++;
    }
    console.log(`Start container is: .temperature o.${tempHour}`);

// *************** Hourly Wind Component *************************
// Get hourly data from storage
let windArray = [];
let windHour = currentHour;
// Adjust counter based on current time
for (let i = 0, x = 12; i < x; i++) {
    if (windHour <= 23) {
        windArray[i] = currentData[i][1].split(" ");
        windHour++;
    }
    else {
        windHour = windHour - 12;
        windArray[i] = currentData[i][1].split(" ");
        windHour = 1;
    }
}
console.log(`windArray[i] is: ${windArray}`);

// Insert Wind data
// Start with the outer container that matches the time indicator
windHour = currentHour;
for (let i = 0, x = 12; i < x; i++) {
    if (windHour >= 13) {
        windHour = windHour - 12;
    }
    document.querySelector('.wind .o' + windHour).innerHTML = windArray[i][0];
    windHour++;
}

// ******************** Condition Component Icons ***************
let conditionHour = currentHour;
// Adjust counter based on current time
for (let i = 0, x = 12; i < x; i++) {
    if (conditionHour >= 13) {
        conditionHour = conditionHour - 12;
    }
    document.querySelector('.conditions .o' + conditionHour).innerHTML = "<img class='min' src='" + currentData[i][2] + "' alt='Hourly weather condition'>";

    conditionHour++; 

}
console.log(`Condition hour ${conditionHour}`);


// Change the status of the containers
contentContainer.setAttribute('class', ''); // removes the hide class from main
statusContainer.setAttribute('class', 'hide'); // hides the status container


//***********************************************************************************************
//***********************************************************************************************
