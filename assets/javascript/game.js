//Start of Crystal game
//Random number the user must meet
    $(document).ready(function(){
    var random=Math.floor(Math.random()*120+19)
    $('#random').text(random);

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
    var total = 0;
    // $("wins").text(wins);
    // $("losses").text(losses)

// reset
 var reset = function(){
        random=Math.floor(Math.random()*120+19)
        console.log(random)
        $('#random').text(random);
        crystalRandom = [];
        total = 0;
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        $("#score").text(total);
        console.log(num1,num2,num3,num4);
    } 
   

//win and losses

    function win(){
        wins++;
        $(".wins").text(wins);
        reset();
    }

    function loss(){
        losses++;
        $(".losses").text(losses);
        reset();
    }

// Total Score
$("#gem1").on("click", function(){   
    total = total + num1;    
    $('#score').text(total);	

            if (total == random){
                $(".wins").text(wins);
                win();
            }
            else if ( total > random){
                $(".losses").text(losses);
                loss();
            }
        })
    

$('#gem2').on('click', function(){ 
    total = total + num2;  
    $('#score').text(total);	


            if (total == random){
                $(".wins").text(wins);
                win();
            }
            else if ( total > random){
                $(".losses").text(losses);
                loss();
            }
        })	


$('#gem3').on('click', function(){
    total = total + num3;
 
    $('#score').text(total);	


            if (total == random){
                $(".wins").text(wins);
                win();
            }
            else if ( total > random){
                $(".losses").text(losses);
                loss();
            }	

})


    $('#gem4').on('click', function(){
        total = total + num4;

        $('#score').text(total);	

                if (total == random){
                    $(".wins").text(wins);
                    win();
                }
                else if ( total > random){
                    $(".losses").text(losses);
                    loss();
                }	
            })	
 })


