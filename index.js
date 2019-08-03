// The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

let word = require('./letter');

let words = ["Angular", "Meteor", "Express", "Node.js", "React.js", "Vue.js","Ember.js", "Backbone.js", "TypeScript", "Webpack"]

let wordSelected = ()=>{
    randWord = words[Math.floor(Math.random() * words.length)];
    return randWord;
}


let generateUnderscores = () => {
    wordSelected();
    console.log(randWord);
    underscores = [];
    for (let i = 0; i < randWord.length; i++) {
      if (randWord.charAt(i)) {
        underscores.push("_");
      }
    }
    return underscores.join(" ");
  };

  console.log(generateUnderscores());