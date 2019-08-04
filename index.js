// The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require('inquirer');

let Word = require('./word');

let words = ["Angular", "Meteor", "Express", "Nodejs", "Reactjs", "Vuejs","Emberjs", "Backbonejs", "TypeScript", "Webpack"];

randWord = words[ Math.floor(Math.random() * words.length) ].toLowerCase();

let rand_word_obj = new Word(randWord);

//let answer_obj = new Word(randWord);

var inquirer = require('inquirer');
var question = [
    {
        type: 'input',
        name: 'user_input',
        message: "Guess a letter: ",
        validate: function (value) {
            var pass = value.match(/^[a-z]$/i);
            if (pass) return true;

            return 'Please enter a valid letter';
        }
    }
]

console.log(rand_word_obj.getPuzzleWord());

let guessedLetters = [];
let guesses = rand_word_obj.arrOfNewLetterObj.length;

function guessALetter ()
{
  inquirer
  .prompt(question)
  .then(answers => {
    //debugger;
    // console.log('here!')
    // console.log(rand_word_obj.getWordArray());
    // console.log(guesses);
    // console.log(rand_word_obj.getWordArray().includes('_'));

    if(guessedLetters.includes(answers.user_input)) {
      console.log('---------------------------------------------------')
      console.log('You already guessed ' + answers.user_input + '!');
      console.log('---------------------------------------------------')
      console.log(rand_word_obj.getPuzzleWord());
      console.log('You have: ' + guesses + ' guesses remaining. \n');
      guessALetter();
    } else {
      let is_correct = false;
      is_correct = rand_word_obj.checkLetterInUserInput(answers.user_input);
      if(!is_correct){
        guesses--;
      }

      if(guesses <= 0 && rand_word_obj.getWordArray().includes('_')) {
        console.log('----------------------------------------');
        console.log('You Lose!');
        console.log('----------------------------------------');
      }else if(!rand_word_obj.getWordArray().includes('_')) {
        console.log('----------------------------------------');
        console.log('You Win!');
        console.log('The correct answer is: '+rand_word_obj.getPuzzleWord())
        console.log('----------------------------------------');
      }else{
        console.log('---------------------------------------------------')
        console.log('You guessed: ' + answers.user_input + '!');
        console.log('---------------------------------------------------')
        console.log(rand_word_obj.getPuzzleWord());
        console.log('You have: ' + guesses + ' guesses remaining. \n');
        guessALetter();
      }
    }
    guessedLetters.push(answers.user_input);
  });
}

guessALetter();
