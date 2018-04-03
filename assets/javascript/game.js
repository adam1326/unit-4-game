//Start of Crystal game


//variables and arrays 
var wins = 0;
var losses = 0;
var randomNumber = 0;
var yourNumber = 0;
var crystalRandom = "";


//Random number the user must meet
$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    console.log(Random)
    $('#random').text(Random);

});

//Random number for each crystal

gem.on("click", "#gem", function() {
    var numberOptions=Math.floor(Math.random()*12-1)
    console.log(numberOptions)
    $('#gem').image(numberOptions);

});

//win and losses


//Total Score