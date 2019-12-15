var sessStore = window.sessionStorage;
let URL = "/temple-inn/js/temple-info.json";
templeClosures(URL);
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




/*************Collapsible Buttons************************/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("activity");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


function templeClosures(URL) {
    fetch(URL)
    .then(function(response) {
        if (response.ok){
            return response.json();
        }
        throw new ERROR('Response not OK.');
    })
    .then(function(data){
        console.log(data);

        let sanDiego = (data.sanDiego.closures);
        let sd1 = sanDiego[0] + "<br>";
        let sd2 = sanDiego[1] + "<br>";
        let sd3 = sanDiego[2] + "<br>";
        let sd4 = sanDiego[3] + "<br>";
        let sd5 = sanDiego[4] + "<br>";
        let sd6 = sanDiego[5] + "<br>";
        let sd7 = sanDiego[6] + "<br>";
        let sd8 = sanDiego[7] + "<br>";
        let sd9 = sanDiego[8] + "<br>";
        let sd10 = sanDiego[9] + "<br>";
        let sd11 = sanDiego[10] + "<br>";
        sanDiegoList = sd1 + '\n' + sd2 + '\n'+ sd3 + '\n' + sd4 + '\n' + sd5 + '\n' + sd6 + '\n' + sd7 + '\n' + sd8 + '\n' + sd9 + '\n' + sd10 + '\n' + sd11;
        sessStore.setItem('sanDiegoList', sanDiegoList);
        console.log(`San Diego List is: ${sanDiegoList}`);
  
        let paris = (data.paris.closures);
        let pf1 = paris[0] + "<br>";
        let pf2 = paris[1] + "<br>";
        let pf3 = paris[2] + "<br>";
        let pf4 = paris[3] + "<br>";
        let pf5 = paris[4] + "<br>";
        let pf6 = paris[5] + "<br>";
        let pf7 = paris[6] + "<br>";
        let pf8 = paris[7] + "<br>";
        parisList = pf1 + '\n' + pf2 + '\n'+ pf3 + '\n' + pf4 + '\n' + pf5 + '\n' + pf6 + '\n' + pf7 + '\n' + pf8;
        sessStore.setItem('parisList', parisList);
        console.log(`Paris List is: ${parisList}`);

        let boston = (data.boston.closures);
        let bm1 = boston[0] + "<br>";
        let bm2 = boston[1] + "<br>";
        let bm3 = boston[2] + "<br>";
        let bm4 = boston[3] + "<br>";
        let bm5 = boston[4] + "<br>";
        let bm6 = boston[5] + "<br>";
        let bm7 = boston[6] + "<br>";
        let bm8 = boston[7] + "<br>";
        let bm9 = boston[8] + "<br>";
        let bm10 = boston[9] + "<br>";

        bostonList = bm1 + '\n' + bm2 + '\n'+ bm3 + '\n' + bm4 + '\n' + bm5 + '\n' + bm6 + '\n' + bm7 + '\n' + bm8 + '\n' + bm9 + '\n' + bm10;
        sessStore.setItem('bostonList', bostonList);
        console.log(`Boston List is: ${bostonList}`);

        let manaus = (data.manaus.closures);
        let mb1 = manaus[0] + "<br>";
        let mb2 = manaus[1] + "<br>";
        let mb3 = manaus[2] + "<br>";
        let mb4 = manaus[3] + "<br>";
        let mb5 = manaus[4] + "<br>";
        let mb6 = manaus[5] + "<br>";
        let mb7 = manaus[6] + "<br>";
        let mb8 = manaus[7] + "<br>";

        manausList = mb1 + '\n' + mb2 + '\n'+ mb3 + '\n' + mb4 + '\n' + mb5 + '\n' + mb6 + '\n' + mb7 + '\n' + mb8;
        sessStore.setItem('manausList', manausList);
        console.log(`Manaus List is: ${manausList}`);

        postClosures();
    })
    .catch(error => console.log("There was a fetch problem: ", error));
}

function postClosures() {
let sDClosures = document.querySelector('#sdclosures');
sDClosures.innerHTML = sessStore.getItem('sanDiegoList');

let pFClosures = document.querySelector('#pfclosures');
pFClosures.innerHTML = sessStore.getItem('parisList');

let bMClosures = document.querySelector('#bmclosures');
bMClosures.innerHTML = sessStore.getItem('bostonList');

let mBClosures = document.querySelector('#mbclosures');
mBClosures.innerHTML = sessStore.getItem('manausList');

}