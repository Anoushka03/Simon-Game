//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];

var sz = 0;

var gameStarted = 0;
var level = 0;

//1. Inside game.js create a new function called nextSequence()
function nextSequence() {

    //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);

    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];

    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);

    var x = gamePattern[gamePattern.length - 1];
    buttonAnimation(randomChosenColour);
    playSound(randomChosenColour);
    level++;
    $("#level-title").text("Level: " + level);



}



function buttonAnimation(currentButton) {
    var idd = $("#" + currentButton).addClass("pressed");

    setTimeout(function () {
        $(idd).removeClass("pressed");
    }, 100);
}


$(".btn").click(function () {
    var btnid = this.id;
    switch (btnid) {
        case "red":
            if (gamePattern[sz] == btnid) {
                buttonAnimation(this.id);
                playSound(this.id);
            } else {
                gamePattern=[];
                sz = 0;
                wrong();
                return;
            }

            break;
        case "blue":
            if (gamePattern[sz] == btnid) {
                buttonAnimation(this.id);
                playSound(this.id);
            } else {
                gamePattern=[];
                sz = 0;
                wrong();
                return;
            }

            break;
        case "green":
            if (gamePattern[sz] == btnid) {
                buttonAnimation(this.id);
                playSound(this.id);
            } else {
                gamePattern=[];
                sz = 0;
                wrong();
                return;
            }

            break;
        case "yellow":
            if (gamePattern[sz] == btnid) {
                buttonAnimation(this.id);
                playSound(this.id);
            } else {
                gamePattern=[];
                sz = 0;
                wrong();
                return;
            }

            break;
        default:

    }
    if (sz == gamePattern.length - 1) {
        setTimeout(function () {
            nextSequence();
        }, 500);
        sz = 0;
    } else {
        sz++;
    }

});


function playSound(currentBtn) {
    switch (currentBtn) {
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        default:

    }
}



$(document).keypress(function () {

    if (gameStarted == 0) {
        nextSequence();
        gameStarted = 1;

    }
});

function empty(arr) {
    arr = [];
}

function wrong(){
    
    $("body").addClass("game-over");

    setTimeout(function(){
        $("body").removeClass("game-over");
    },500);

    gameStarted=0;
    $("#level-title").text("Press A Key to Start");
    // empty(gamePattern);
    level=0;
    var aud=new Audio("sounds/wrong.mp3");
    aud.play();
    sd=0;
}