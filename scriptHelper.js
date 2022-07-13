// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        // Here is the HTML formatting for our mission target div.                
            let updatedMissionTarget = document.getElementById('missionTarget')
            updatedMissionTarget.innerHTML = `
                <ol>
                <li>Name: ${name} </li>
                <li>Diameter: ${diameter} </li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance} </li>
                <li>Number of Moons: ${moons} </li>
            </ol>
            <img src="${imageUrl}"> `
}
   
//hould take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number"
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput)) == true) {
        return "Not a Number";
    } else
        return "Is a Number";
    
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementByID ('pilotStatus');
   let copilotStatus = document.getElementByID ('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let newLaunchStatus = document.getElementById('launchStatus');
   let list = document.getElementById('faultyItems');
   
//add an alert to notify the user that all fields are required. entered valid info for each of the fields
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert ("All field are required!");
    
   }else if (validateInput(pilot)!== "is a Number" || validateInput(copilot) !== "is a Number") {
    alert ("Name required");
    }
    else if (validateInput(fuelLevel) !== "is not a Number" || validateInput(cargoMass) !== "is not a Number") {
        alert ("Number required");
    }
       //update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
    else{
        list.style.visible = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;
    

    if(fuelLevel < 10000 && cargoMass > 10000){
        newLaunchStatus.innerHTML = "Shuttle not ready for Launch";
        newLaunchStatus.style.color = "red";
        fuelStatus.innerHTML = "Not enough fuel for the journey";
        cargoStatus.innerHTML = "Too much mass for the journey";
       
        
    } else if(fuelLevel < 10000 && cargoMass < 10000){
        newLaunchStatus.innerHTML = "Shuttle not ready for Launch";
        newLaunchStatus.style.color = "red";
        fuelStatus.innerHTML = "Not enough fuel for the journey";
        cargoStatus.innerHTML = `CargoMass : ${cargoMass}`;

    } else if(fuelLevel > 10000 && cargoMass > 10000){
        newLaunchStatus.innerHTML = "Shuttle not ready for Launch";
        newLaunchStatus.style.color = "red";
        fuelStatus.innerHTML = `Fuel Level : ${fuelLevel}`;
        cargoStatus.innerHTML = "Too much mass for the journey";

    } else if(fuelLevel > 10000 && cargoMass < 10000){
        newLaunchStatus.innerHTML = "Shuttle ready for Launch";
        newLaunchStatus.style.color = "green";
        fuelStatus.innerHTML = `Fuel Level : ${fuelLevel}`;
        cargoStatus.innerHTML = `CargoMass : ${cargoMass}`;
    }
}     
}

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
