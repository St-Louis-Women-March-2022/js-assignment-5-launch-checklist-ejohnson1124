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
    } else if (isNaN(Number(testInput)) == true) {
        return "Not a Number";
    } else
        return "Is a Number";
    
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = this.document.querySelector("form");
    let button = document.getElementById("formSubmit")

    form.addEventListener("submit", function(event){
 
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        
        let pilotNameValue = pilotName.value;
        let copilotNameValue = copilotName.value;
        let fuelLevelValue = fuelLevel.value;
        let cargoMassValue = cargoMass.value;
    
        let faultyItems = document.getElementById("faultyItems");

        formSubmission(document,faultyItems,pilotNameValue,copilotNameValue,fuelLevelValue,cargoMassValue)
        event.preventDefault();
       })

   
//add an alert to notify the user that all fields are required. entered valid info for each of the fields
   if (validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
    alert ("All fields are required!");
    
   }else if (validateInput(pilot)!== "is a Number" || validateInput(copilot) !== "is a Number") {
    alert ("Name required");
    }
    else if (validateInput(fuelLevel) !== "is not a Number" || validateInput(cargoMass) !== "is not a Number") {
        alert ("Number required");
    }
       //update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.
    else{
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
    

        if (fuelLevel < 10000){
            faultyItems.style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for the journey";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
        }else{
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        }

        if (cargoLevel > 10000){
            faultyItems.style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
        }else{
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        }        

        if (fuelLevel >= 10000 && cargoLevel <= 10000) { 
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
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
