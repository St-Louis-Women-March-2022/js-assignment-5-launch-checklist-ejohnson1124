// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        // Here is the HTML formatting for our mission target div.

        fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then( function(jsonArray) {
                console.log(jsonArray);
    
                let selectedPlanet = pickPlanet(jsonArray)
                
                let updatedMissionTarget = document.getElementById('missionTarget')
                updatedMissionTarget.innerHTML = `
                <ol>
                <li>Name: ${selectedPlanet.name} </li>
                <li>Diameter: ${selectedPlanet.diameter} </li>
                <li>Star: ${selectedPlanet.star}</li>
                <li>Distance from Earth: ${selectedPlanet.distance} </li>
                <li>Number of Moons: ${selectedPlanet.moons} </li>
            </ol>
            <img src="${selectedPlanet.image}"> `})
   
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput)) == true) {
        return "Not a Number";
    } else
        return "Is a Number";
    
};
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementByID ('pilotStatus');
   let copilotStatus = document.getElementByID ('copilotStatus');
   let fuelStatus = document.getElementById('fuelStatus');
   let cargoStatus = document.getElementById('cargoStatus');
   let newLaunchStatus = document.getElementById("launchStatus");
   let list = document.getElementById("faultyItems");
   // fuelLevel = Number(fuelLevel);
   // cargoMass = Number(cargoMass);

   //update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    console.log("All field are required!");
    
    else if (validateInput(pilot)!== "is a Number" || validateInput(copilot) !== "is a Number") {
        console.log ("Name required");
    }
    else if (validateInput(fuelLevel) !== "is not a Number" || validateInput(cargoMass) !== "is not a Number") {
        console.log ("Number required");
    }
    
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

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = Math.floor(Math.random()* planets.length)
        return planets[planet]
        
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
