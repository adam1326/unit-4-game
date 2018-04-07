//Start of Crystal game
//Random number the user must meet
    $(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    $('#random').text(Random);

//Random number for each crystal
var num1= Math.floor(Math.random()*12+1)
var num2= Math.floor(Math.random()*12+1)
var num3= Math.floor(Math.random()*12+1)
var num4= Math.floor(Math.random()*12+1)
//variables and arrays 
    var crystalRandom = [];
    var wins = 0;
    var losses = 0;
    var random = 0;
    var yourNumber = 0;
    var total = [];
    $("wins").text(wins);
    $("losses").text(losses)

// reset
 var reset = function(){
        Random=Math.floor(Math.random()*101+19)
        console.log(Random)
        $('#random').text(Random);
        crystalRandom = [];
        total = 0;
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        $("#score").text(total);
    }

//win and losses
    function win(){
        wins++;
        $("#wins").text(wins);
        reset();
    }

    function loss(){
        losses++;
        $("#losses").text(losses);
        reset();
    }
// Total Score
$("#gem1").on("click", function(){   
    total = +total + +num1;    
    $('#score').text(total);	

            if (score == random){
                wins();
            }
            else if ( score > random){
                losses();
            }
        })
    

$('#gem2').on('click', function(){ 
    total = +total + +num2;  
    $('#score').text(total);	


            if (score == random){
                wins();
            }
            else if ( score > random){
                losses();
            }
        })	


$('#gem3').on('click', function(){
    total = +total + +num3;
 
    $('#score').text(total);	


            if (score == random){
                wins();
            }
            else if ( score > random){
                losses();
            }	

})


    $('#gem4').on('click', function(){
        total = +total + +num4;

        $('#score').text(total);	

                if (score == random){
                    wins();
                }
                else if ( score > random){
                    losses();
                }	
            })	
 })