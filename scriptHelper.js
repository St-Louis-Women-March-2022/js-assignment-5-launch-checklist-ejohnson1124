// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        // Here is the HTML formatting for our mission target div.                
        let finalMissionDestitnation = document.getElementById("missionTarget");
        finalMissionDestitnation.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
             <li>Name: ${name} </li>
             <li>Diameter: ${diameter}</li>
             <li>Star: ${star}</li>
             <li>Distance from Earth: ${distance} </li>
             <li>Number of Moons: ${moons} </li>
         </ol>
         <img src="${imageUrl}">
         `

}
   
//hould take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number"
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput)) === true) {
        return "Not a Number";
    } else if (isNaN(Number(testInput)) === false){
        return "Is a Number";
    }
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let cargoStatus = document.getElementById('cargoStatus');
    let launchStatus = document.getElementById('launchStatus');
//ocument.getElementById will search for a matching element and return a reference to it

//add an alert to notify the user that all fields are required. entered valid info for each of the fields
   if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
    alert ("All fields are required!");
    list.style.visibility = 'hidden';

   }else if (validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a Number") {
    alert ("Name required");
    list.style.visibility = 'hidden';

    }
    else if (validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number") {
        alert ("Number required");
        list.style.visibility = 'hidden';

    }
       //update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
    else{
        pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
        //innerhtml reads and updates the contents of the element
    }
        if (fuelLevel.value < 10000) {
            launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
            fuelStatus.innerHTML = 'Fuel level too low for launch';
            // pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            // copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
            launchStatus.style.color = 'red';
            list.style.visibility = 'visible';
        } else if (cargoLevel.value > 10000) {
            launchStatus.innerHTML ='Shuttle Not Ready For Launch';
            cargoStatus.innerHTML = 'Cargo mass too high for launch';
            // pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            // copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
            launchStatus.style.color = 'red';
            list.style.visibility = 'visible';
        } else if (fuelLevel.value >= 10000 && cargoLevel.value <= 10000){
            list.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle Is Ready For Launch';
            launchStatus.style.color = 'green';
            // pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            // copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';    
        }        
    };

async function myFetch() {
    let planetsReturned;
//add the URL and return response.json().
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();       
});

    return planetsReturned;
}

function pickPlanet(planets) {
    // Using Math.random(), return one planet from the list with a randomly-selected index.
    let planetIndex = Math.floor(Math.random()* planets.length);
        return planets[planetIndex];
        
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
