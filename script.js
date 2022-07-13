// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets)
 
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
     //    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })
 
    let form = this.document.querySelector("form");
    form.addEventListener("submit", function(event){
        let button = document.querySelector("#formSubmit");

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
});
