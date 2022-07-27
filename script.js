// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

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
 //25.9.3. Follow Along as We Add Validation adding validations
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");//putting this here b/c it won't let me on scripthelper
        


        //using this to update list
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       });
});
