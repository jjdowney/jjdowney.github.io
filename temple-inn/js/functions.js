footerDate();
// Copyright Year
var year = new Date().getFullYear();
document.getElementById('copyYear').innerHTML = year;

// Today Date
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

// Button Function
function toggleMenu() {
    console.log(document.getElementById("primary").classList);
    document.getElementById("primary").classList.toggle("hide");
}