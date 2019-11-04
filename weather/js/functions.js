'use strict'

// Weather Site JavaScript Functions
document.addEventListener("DOMContentLoaded", function(){
    footerDate();
    console.log(document.getElementById("primary").classList);
    document.getElementById("primary").classList.toggle("hide");
    // Variables for Wind Chill function
    let temp = 31;
    let speed = 5;
    buildWC(speed, temp);
    // Time Indicator Function
    let hour="1";
    timeBall(hour);
    // Change Background Image
    let outside = "Fog";
    console.log(outside);
    changeSummaryBackground(outside);
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
wc = 'Feels Like: ' + wc + '&deg;F';
feelTemp.innerHTML = wc;
}

// Time Indicator Function 
function timeBall(hour){
    //Find all "ball" classes and remove them
    let x = document.querySelectorAll(".ball");
    for (let item of x) {
        console.log(item);
        item.classList.remove("ball");
    }

    // Find all hours that match the parameter and add the "ball" class
    let hr = document.querySelectorAll(".i"+hour);
    for (let item of hr){
        item.classList.add("ball");
    }
}

    // Function to change background image
    function changeSummaryBackground(outside) {
        let x = document.getElementById('compContainer');
        outside = outside.toLowerCase();
        console.log(`Outside is: ${outside}`);

    // Case Statements to change background image into current condition
    console.log(outside);
    switch (outside) {
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
    if ((width > (45)) && (outside == 'clear')) {
        var imgLoad = "url(/images/clear-large.jpg)";
    }
    else if ((width > (45)) && (outside == 'rain')) {
        var imgLoad = "url(/images/rain-large.jpg)";
    }
    else if (width > (45) && outside == 'fog') {
        var imgLoad = "url(/images/fog-large.jpg)";
    }
    else if (width > (45) && outside == 'snow') {
        var imgLoad = "url(/images/snow-large.jpg)";
    }
    else if (width > (45) && outside == 'cloudy') {
        var imgLoad = "url(/images/clouds-large.jpg)";
    }
    else if (width < (45) && outside == 'clear') {
        var imgLoad = "url(/images/clear-small.jpg)";
    }
    else if (width < (45) && outside == 'fog') {
        var imgLoad = "url(/images/fog-small.jpg)";
    }
    else if (width < (45) && outside == 'rain') {
        var imgLoad = "url(/images/rain-small.jpg)";
    }
    else if (width < (45) && outside == 'snow') {
        var imgLoad = "url(/images/snow-small.jpg)";
    }
    else if (width < (45) && outside == 'cloudy') {
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