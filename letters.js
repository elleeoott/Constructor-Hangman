//holds all of our letters

var gameLetters = function(letter) {

    //hides the letter from the user

    this.gameLetters = letter;
    this.show = false;

    this.letterShow = function() {

        //if the letter is already blank

        if(this.letter === "") {

            this.show = true;

        }
    }

}

//sends our letters to other necessary files

module.exports = gameLetters;