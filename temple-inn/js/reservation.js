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


document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector('#submit').addEventListener("click", processData);
})

let reservations = [];
let processData = (event) => {
  // stop the form from submitting
  event.preventDefault();
  let reservation = {
    name: document.querySelector('#name').value,
    guests: document.querySelector('#guests').value,
    startDate: document.querySelector('#start').value,
    endDate: document.querySelector('#end').value,
    temple: document.querySelector('#temple').value,
    email: document.querySelector('#email').value,
    number: document.querySelector('#number').value,
    message: document.querySelector('#message').value
  }
// adds reservation to the end of the array of all reservations
reservations.push(reservation);
// reset the first, and only, form
document.forms[0].reset;
// see results in console
console.log('newRes', {reservations});

  // Store to session Storage
  window.sessionStorage.setItem("reservations", JSON.stringify(reservations));
  // Retrieve from session storage
  let resList = JSON.parse(window.sessionStorage.getItem("reservations"));
  console.log(resList);
  
  // inject to the page
  let name = 'Full Name: ' + resList[0].name + '<br>';
  window.sessionStorage.setItem('name', name);
  
  let guests = 'Number of Guests: ' + resList[0].guests + '<br>'
  window.sessionStorage.setItem('guests', guests);
  
  let start = 'Reservation Start Date: ' + resList[0].startDate + '<br>';
  window.sessionStorage.setItem('start', start);
  
  let end = 'Reservation End Date: ' + resList[0].endDate + '<br>';
  window.sessionStorage.setItem('end', end);
  
  let temple = 'Temple Location: ' + resList[0].temple + '<br>';
  window.sessionStorage.setItem('temple', temple);
  
  let email = 'Email: ' + resList[0].email + '<br>';
  window.sessionStorage.setItem('email', email);
  
  let phone = 'Phone Number: ' + resList[0].number + '<br>';
  window.sessionStorage.setItem('phone', phone);
  
  let message = 'Special Requests: ' + resList[0].message + '<br>';
  window.sessionStorage.setItem('message', message);
  
  displayResults();
}
  
// display the results
function displayResults(){
  document.querySelector("#input").classList.add("hide");
  document.querySelector("#resResult").classList.remove("hide");

  let custName = document.querySelector('#custName');
  custName.innerHTML = window.sessionStorage.getItem('name');

  let custGuests = document.querySelector('#custGuests');
  custGuests.innerHTML = window.sessionStorage.getItem('guests');

  let custStart = document.querySelector('#custStart');
  custStart.innerHTML = window.sessionStorage.getItem('start');

  let custEnd = document.querySelector('#custEnd');
  custEnd.innerHTML = window.sessionStorage.getItem('end');

  let custTemple = document.querySelector('#custTemple');
  custTemple.innerHTML = window.sessionStorage.getItem('temple');

  let custEmail = document.querySelector('#custEmail');
  custEmail.innerHTML = window.sessionStorage.getItem('email');

  let custNumber = document.querySelector('#custNumber');
  custNumber.innerHTML = window.sessionStorage.getItem('phone');

  let custMessage = document.querySelector('#custMessage');
  custMessage.innerHTML = window.sessionStorage.getItem('message');

}
