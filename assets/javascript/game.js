var punkBands = ["BLINK-182", "GREEN DAY", "MY CHEMICAL ROMANCE", "FALL OUT BOY", "SUM 41",
"JIMMY EAT WORLD", "SIMPLE PLAN", "THE ALL AMERICAN REJECTS", "THE OFFSPRING",
"BOWLING FOR SOUP", "THE STARTING LINE", "THE STROKES", "ARCADE FIRE", 
"ARCTIC MONKEYS", "RADIOHEAD", "THE KILLERS", "INTERPOL", "GORILLAZ", "DEATH CAB FOR CUTIE",
"EVANESCENCE"];

var numGuesses = 10;
var guessesLeft = 0;
var guessedLetters = [];
var answerArray = [];
var answer;
var wins = 0;
var losses = 0;
var isFinished = false;

var mySound = document.getElementById("keyboardCat");

function playAudio(x) {
  mySound = document.getElementById(x); 
  mySound.currentTime = 0;  
  mySound.play();  
}

function setUp() {
  mySound.pause(); 
  answer = [];
  answerArray = [];
  answer = punkBands[Math.floor(Math.random() * punkBands.length) + 1];
  //A == 65, Z == 90, " " == 32,
  for (var x = 0; x < answer.length; x++) {
    if(answer.charCodeAt(x) >= 65 && answer.charCodeAt(x) <= 90) {
      answerArray[x] = "_";
    }
    else {
      answerArray[x] = answer[x];
    }
  }
  guessesLeft = numGuesses;
  guessedLetters =[];

  //document.getElementById("bandPic").src = "";

  console.log(answer);
  console.log(answerArray);
  updates();
}

function updates() {
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("numGuesses").textContent = guessesLeft;
  document.getElementById("answerArray").textContent = answerArray.join("");
  document.getElementById("guessedLetters").textContent = guessedLetters;
}

function check(letter) {
  if (guessedLetters.indexOf(letter) === -1) {
      guessedLetters.push(letter);
      if (answer.indexOf(letter) === -1) {
          guessesLeft--;
      } else { 
          for (var x = 0; x < answer.length; x++) {
              if (letter === answer[x]) {
                  answerArray[x] = letter;
              } 
          }                
      }
  }

}; 

function isLoser() {
  if (guessesLeft <= 0) {
    losses++;
    updates();
    isFinished = true;
    //playpiano cat
    document.getElementById("bandPic").src = "https://media.giphy.com/media/SEO7ub2q1fORa/giphy.gif";
    //playAudio("sounds");
    playAudio("keyboardCat");
  }
}

function isWinner() {
  if (answerArray.indexOf("_") === -1) {
    wins++;
    updates();
    isFinished = true;
    document.getElementById("bandPic").src = "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_175/f_auto,q_auto,w_1100/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg";
    }
}

document.onkeyup = function(event) {
  if (isFinished) {
    setUp();
    isFinished = false;  
  } 
  else {
    if(event.keyCode >= 65 && event.keyCode <= 90) {
      check(event.key.toUpperCase()); 
      updates();
      isWinner();
      isLoser();
    }
  }
}

setUp();
updates();
