// The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require('inquirer');

let Word = require('./word');

let words = ["Angular", "Meteor", "Express", "Nodejs", "Reactjs", "Vuejs","Emberjs", "Backbonejs", "TypeScript", "Webpack"]

randWord = words[ Math.floor(Math.random() * words.length) ].toLowerCase();

let rand_word_obj = new Word(randWord);
console.log(rand_word_obj.getWord2());

let answer_obj = new Word(randWord);
console.log(answer_obj.getPuzzleWord());

var inquirer = require('inquirer');
var question = [
    {
        type: 'input',
        name: 'user_input',
        message: 'Guess a letter',
        validate: function (value) {
            var pass = value.match(/^[a-z]$/i);
            if (pass) return true;

            return 'Please enter a valid letter';
        },
        when: function () {
            if(rand_word_obj.getWord2() == answer_obj.getPuzzleWord()) {
                return true;
            }
        }
    }
]

function ask(){
    inquirer.prompt(question);
}

inquirer
  .prompt(question)
  .then(answers => {
    console.log(answers);
    ask()
  });
