//requiring our packages to run the game

var inquirer = require("inquirer");
var app = require("./app.js");
var words = require("./words.js");
var isLetter = require("is-letter");

//variable holds our game initialization
var gameHangman = {

    //array holds the letters guessed by the user

    guessesLeft: 10;
    guessedLetters: [];
    gameStart: function() {

        //makes sure that guessedLetters is cleared before a new game

        if(this.guessedLetters.length > 0) {

            this.guessedLetters = [];
        }

    }

    //prompts for the user the play the game

    inquirer.prompt

    //check to see if user guessed the word


}



//if confirmed, starts a new game

gameHangman();