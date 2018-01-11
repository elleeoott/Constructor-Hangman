//requiring our packages to run the game

var inquirer = require("inquirer");
var app = require("./app.js");
var words = require("./words.js");
var isLetter = require("is-letter");

//variable holds our game initialization
var gameHangman = {

    //array holds the letters guessed by the user

    guessesLeft: 10,
    guessedLetters: [],
    gameStart: function() {

        //makes sure that guessedLetters is cleared before a new game

        if (this.guessedLetters.length > 0) {

            this.guessedLetters = [];
        }

    }

    //prompts for the user the play the game (not sure where the syntax error is coming from here).

    inquirer.prompt([(

        name: "start",
        type: confirm,
        message: "Would you like to play a game?"

    )]).then(function(confirm) {

        if(confirm.begin) {

            gameStart.beginGame();
        }

        else {

            console.log("Come back some other time!");
        }
    }


//if confirmed, starts a new game

beginGame.gameStart = function() {

    //if the guesses remaining is equal to 10

    if(this.guessesLeft === 10) {

        console.log("--------------")
        console.log("Let's begin.")
        console.log("--------------")

    }

},

//resets the guess count

var resetGuess = function() {

    this.guessesLeft = 10
}

//tells the user to choose a letter

var getALetter = function() {

    inquirer.prompt([{

        name: "letterPicked",
        type: input,
        message: "Choose one letter: "

        //Makes sure that it is a letter

        if(isLetter(value)) {

            return: true;
        } 
        
        else {

            return: false;
        }
    }]).then(function(letter)) {

        //Loops through our words to see if it's there
        for(var i = 0; i < guessedLetters.length; i++){

            if(letterGuessed === guessedLetters[i]){

                guess = true;
            }

            //Tells the user to try again

            else {

                console.log("Guess again!");
            }
        }
    }
}

}

//function for what happens when the right letter is guessed

function correctGuess() {

    //calls game over if the word matches

    //if the word matches the word in the array

    //start game over function

    //increase the win count by 1

    //prompt user to play again

    inquirer.prompt([{

        name: "playAgain",
        message: "Would you like to play again?",
        type: "input"

    }])

    if (input === Yes) {

        return true;

    }
    
    else {

        return false;
    }

    gameOver();

}

//function for what happens when the wrong word is guessed

    //increase losses by 1

    //ask the user to play again

    inquirer.prompt([{

        name: "playAgain",
        message: "Would you like to play again?",
        type: "input"

    }])

    if (input === Yes) {

        return true;

    }
    
    else {

        return false;
    }

    gameOver();

//reset the game when completed

function gameOver() {

    i = "";
    word = new Word(wordMaker);
    index = guessableWords.wordMaker[i];
    letterGuessed = [];
    guessesLeft = 10;
});

gameHangman.gameStart();

