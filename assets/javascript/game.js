// Global Vairables --------------------

var compNumber = 0;
var compNumberNumber = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

var crystalValue1 = 0;
var number = 0;
var finalNumber = 0;

var win = 0;
var loss = 0;

var targetNumber = $(".target-number");
var userNumber = $(".user-number");
var wins = $(".wins");
var losses = $(".losses");

var gameOver = true;

// Functions --------------------

$(document).ready(function () {

    // Generate Computer Number


    compNumber = [Math.floor(Math.random() * 102) + 19];

    compNumberNumber = parseInt(compNumber);
    targetNumber.text(compNumber);


    console.log(compNumber)
    console.log(compNumberNumber)

    userNumber.text(number);

    // Crystals

    crystal1 = [Math.floor(Math.random() * 12) + 1];
    crystal2 = [Math.floor(Math.random() * 12) + 1];
    crystal3 = [Math.floor(Math.random() * 12) + 1];
    crystal4 = [Math.floor(Math.random() * 12) + 1];

    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    // Restart game function -------------------




  

if(gameOver){

    $(".one").on("click", function () {


        number = parseInt(number) + parseInt(crystal1);

        userNumber.text(number);

        if (number === compNumberNumber) {
            alert("You won!")
            win++
            wins.text("Wins: " + win);

            restartGame();
        }

        else if (number > compNumberNumber) {
            alert("You lost...")
            loss++
            losses.text("Losses: " + loss);
            gameOver = false;
            restartGame()
        }

        console.log(compNumber);
        console.log("----------");

        console.log(number);

    })

    $(".two").on("click", function () {

        number = parseInt(number) + parseInt(crystal2);

        userNumber.text(number);

        if (number === compNumberNumber) {
            alert("You won!")
            win++
            wins.text("Wins: " + win);

            restartGame();
        }

        else if (number > compNumberNumber) {
            alert("You lost...")
            loss++
            losses.text("Losses: " + loss);
            gameOver = false;
            restartGame()
        }

        console.log(compNumberNumber);
        console.log("----------");

        console.log(number);


    })

    $(".three").on("click", function () {

        number = parseInt(number) + parseInt(crystal3);

        userNumber.text(number);


        if (number === compNumberNumber) {
            alert("You won!")
            win++
            wins.text("Wins: " + win);

            restartGame();
        }

        else if (number > compNumberNumber) {
            alert("You lost...")
            loss++
            losses.text("Losses: " + loss);
            gameOver = false;
            restartGame()
        }

        console.log(compNumber);
        console.log("----------");

        console.log(number);

    })

    $(".four").on("click", function () {

        number = parseInt(number) + parseInt(crystal4);

        userNumber.text(number);


        if (number === compNumberNumber) {
            alert("You won!")
            win++
            wins.text("Wins: " + win);

            restartGame();
        }

        else if (number > compNumberNumber) {
            alert("You lost...")
            loss++
            losses.text("Losses: " + loss);
            gameOver = false;
            restartGame()
        }

        console.log(compNumber);
        console.log("----------");

        console.log(number);

    })

    if (number === compNumberNumber) {
        alert("You won!")
        win++
        wins.text("Wins: " + win);

        restartGame();
    }

    function restartGame() {
        compNumber = [Math.floor(Math.random() * 102) + 19];
        compNumberNumber = parseInt(compNumber);
        targetNumber.text(compNumber);
        number = 0;
        userNumber.text(number);
        crystal1 = [Math.floor(Math.random() * 12) + 1];
        crystal2 = [Math.floor(Math.random() * 12) + 1];
        crystal3 = [Math.floor(Math.random() * 12) + 1];
        crystal4 = [Math.floor(Math.random() * 12) + 1];
        gameOver = true;


        console.log("compNumber Object: " + compNumber)
        console.log("compNumber as a number: " + compNumberNumber);
        console.log(crystal1);
        console.log(crystal2);
        console.log(crystal3);
        console.log(crystal4);
    }

}














    











    // Main Processes ---------------------

})