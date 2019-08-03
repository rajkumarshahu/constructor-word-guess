// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require('./letter');

function Word(randWord) {
    this.arrOfNewLetterObj = [];

    this.getWord = function(){
        var word = "";
        for (var i = 0; i < this.arrOfNewLetterObj.length; i++) {
            word = word.concat(this.arrOfNewLetterObj[i].printLetter());
        }
        return word;
    }

    this.getWord2 = function () {
        for(var i = 0; i < randWord.length; i++){
            this.arrOfNewLetterObj.push(randWord[i]);
        }
        return this.arrOfNewLetterObj;
    }

    this.getPuzzleWord = function () {
        let word_rand = '';
        for (var i = 0; i < randWord.length; i++) {
            var letter_rand = new Letter(randWord[i]);
            word_rand = word_rand.concat(letter_rand.printLetter());
        }
        return word_rand;
    }
}

module.exports = Word;