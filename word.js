// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require('./letter');

function Word(randWord) {
    this.arrOfNewLetterObj = [];

    this.getArrayOfLetter = function () {
        for(var i = 0; i < randWord.length; i++){
            let letter = new Letter(randWord[i]);
            this.arrOfNewLetterObj.push(letter);
        }
        return this.arrOfNewLetterObj;
    }

    this.getArrayOfLetter();

    this.getPuzzleWord = function () {
        let word_rand = '';
        //console.log(this.arrOfNewLetterObj.length);
        for (var i = 0; i < this.arrOfNewLetterObj.length; i++) {
            //console.log(this.arrOfNewLetterObj[i].letter);
            //console.log(this.arrOfNewLetterObj[i].isGuessed);
            word_rand = word_rand.concat(this.arrOfNewLetterObj[i].printLetter() + ' ');
        }
        return word_rand;
    }

    this.checkLetterInUserInput =  function(user_input) {
        //console.log(user_input);
        //console.log(this.arrOfNewLetterObj);
        let is_correct = false;
        for (var i = 0; i < this.arrOfNewLetterObj.length; i++) {
            if(this.arrOfNewLetterObj[i].checkUserGuess(user_input)){
                is_correct = true;
            }
        }
        return is_correct;
        //console.log(this.arrOfNewLetterObj);
    }

    this.getWordArray = function() {
        let word = [];
        for (var i = 0; i < this.arrOfNewLetterObj.length; i++) {
            word.push(this.arrOfNewLetterObj[i].printLetter());
        }
        return word;
    }
}

module.exports = Word;