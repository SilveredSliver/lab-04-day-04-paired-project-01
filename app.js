'use strict';
function sumFunction() {
var userName = prompt('Hi there, user! What is your name?');

var userGreeting = prompt('Hello, ' + userName + '! Are you ready to play a guessing game about me? It will only be 5 questions.');
  if (userGreeting.trim().toLowerCase() === 'yes' || userGreeting.trim().toLowerCase() === 'y') {
    alert ('Hurray! Let us get started!');
  } else if (userGreeting.trim().toLowerCase() === 'no' || userGreeting.trim().toLowerCase() === 'n') {
    alert ('Too bad! We are playing anyway!');
  } else {
    alert ('I am going to take that as a yes');
  }
console.log('User input to prompt userGreeting was ' + userGreeting);
}
sumFunction();
var questionOne = prompt('Do you believe I am holding you here against your will?');
  if (questionOne.trim().toLowerCase() === 'yes' || questionOne.trim().toLowerCase() === 'y') {
    alert ('Hahahaha!! I would never do that to you, friend...?');
  } else if (questionOne.trim().toLowerCase() == 'no', questionOne.trim().toLowerCase() == 'n') {
    alert ('Wow! You are a really trusting person! :D');
  } else {
    alert ('I think I am going to take that as a no');
  }
console.log('User input to prompt questionOne was ' + questionOne);

var questionTwo = prompt('Do you believe this is a game?');
  if (questionTwo.trim().toLowerCase() === 'yes' || questionTwo.trim().toLowerCase() === 'yes') {
    alert ('Ahahahahaha!');
  } else if (questionTwo.trim().toLowerCase() === 'no' || questionTwo.trim().toLowerCase() === 'n') {
    alert ('...You are probably right!');
  } else {
    alert ('Too scared to guess, huh?');
  }
  console.log('User input to prompt questionTwo was ' + questionTwo);

var questionThree = prompt('Do you feel safe?');
  if (questionThree.trim().toLowerCase() === 'yes' || questionThree.trim().toLowerCase() === 'y') {
    alert ('How quaint :)');
  } else if (questionThree.trim().toLowerCase() === 'no' || questionThree.trim().toLowerCase() === 'n') {
    alert ('You must horribly troubled.');
  } else {
    alert ('You are very bad at responding to anything...');
  }
console.log('User input to prompt questionThree was ' + questionThree);

var questionFour = prompt('Do you like coffee?');
  if (questionFour.trim().toLowerCase() === 'yes' || questionFour.trim().toLowerCase() === 'y') {
    alert ('Be careful of what you drink!');
  } else if (questionFour.trim().toLowerCase() === 'no' || questionFour.trim().toLowerCase() === 'n') {
    alert ('...bummer...');
  } else {
    alert ('...You are not making this very fun, are you.');
  }
console.log('User input to prompt questionFour was ' + questionFour);

var questionFive = prompt('Do you like icecream?');
  if (questionFive.trim().toLowerCase() === 'yes' || questionFive.trim().toLowerCase() === 'y') {
    alert ('Ok! Go outside and grab some!');
  } else if (questionFive.trim().toLowerCase() === 'no' || questionFive.trim().toLowerCase() === 'n') {
    alert ('I am going to find you...');
  } else {
    alert ('You are boring! I am going to go play with someone else!');
  }
console.log('User input to prompt questionFive was ' + questionFive);

var finalResponse;
  if (finalResponse.trim().toLowerCase() === questionOne + questionTwo + questionThree + questionFour + questionFive) {
    alert ('Hurray! You answered all the questions!');
  } else {
    alert ('You did not answer all of the questions, you butt!');
  }

  var correctNumber = Math.floor(Math.random() * (16 - 0) + 0);

  for (var guessesLeft = 4; guessesLeft > 0; guessesLeft--) {
    var  userGuess = parseInt(prompt('What is my favorite number between 5 and 15? You have 4 guesses!'));//gets user input
    //parseInt(); will give a whole integer number because prompt(); by itself will always give you a string value even if the user types in a number, resulting in you not being able to use a === (in the below code).
      console.log('User input to prompt number guessing game was ' + userGuess);
  if (userGuess === correctNumber) {
      alert('You got it right!');
      break;
  } else if (guessesLeft === 1) {
      alert('you are out of guesses. The number was ' + correctNumber);
    } else if (userGuess < 16 && userGuess > 0) {
      alert('guess again. You have ' + guessesLeft + ' guesses left.');
    } else {
      alert('You have to guess between 5 and 15!');
    }
  }

  var state = ['montana', 'oregon', 'florida', 'arizona'];

    for (var guessesLeft = 6; guessesLeft > 0; guessesLeft--) {
     var guess = prompt('What is a state have I been to other than Washington state?');
      console.log('User input to prompt array question game was ' + guess);
    if (state.indexOf(guess.trim().toLowerCase()) >= 0 ) {
        alert('You guessed one of them right!');
        break;
    } else if (guessesLeft === 1) {
        alert('you are out of guesses!');
      } else {
        alert('guess again! You have ' + guessesLeft + ' guesses left.');
      }
    }
        alert('All the correct answers are ' + state.toString());



  //sample function
  function getUserName() {
    var userName = prompt("What is your username?");
    return userName;/*the user input will change the return value*/
  }

  var user = getUserName();/*This is assigning the above function "getUserName" to the variable "user"*/

  //user();

  console.log('user value is ' + user);/*The console will give you a note now as to the value of the variable "user"*/
