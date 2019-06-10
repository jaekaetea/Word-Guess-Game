var punkBands = ["BLINK-182", "GREEN DAY", "MY CHEMICAL ROMANCE", "FALL OUT BOY", "SUM 41",
"JIMMY EAT WORLD", "SIMPLE PLAN", "THE ALL-AMERICAN REJECTS", "THE OFFSPRING", "RADIOHEAD", 
"THE STROKES", "ARCADE FIRE", "ARCTIC MONKEYS", "THE KILLERS", "INTERPOL", "GORILLAZ", 
"EVANESCENCE", "BOWLING FOR SOUP", "NEW FOUND GLORY"];

//no doubt - running, the redjump suit - push you down
//alkaline trio mercy me, sugarcult memory
//brand new -sic , relient k be escape
//against me trash unreal, weezer hash pipe

var numGuesses = 10;
var guessesLeft = 0;
var guessedLetters = [];
var answerArray;
var answer;
var wins = 0;
var losses = 0;
var isFinished = false;

BandPicture = document.getElementById("bandPic");
var mySound = document.getElementById("keyboardcat");

confirm("Press OK if you are 18 years or older.  If not, please get parental approval.");

$("#loser").text("PRESS ANY KEY TO GET STARTED!");

function setUp() {
  mySound.pause(); 
  answer = [];
  answerArray = [];
  answer = punkBands[Math.floor(Math.random() * punkBands.length) + 1];
  var answerLength = answer.length;

  for (var x = 0; x < answerLength; x++) {
    if(answer.charCodeAt(x) >= 65 && answer.charCodeAt(x) <= 90) {
      answerArray[x] = "_";
    }
    else {
      answerArray[x] = answer[x];
    }
  }

  guessesLeft = numGuesses;
  document.getElementById("numGuesses").style.color = "#ffffff";
  document.getElementById("numGuesses").style.fontSize = "initial";
  guessedLetters =[];

  $("#loser").text("");
  $("#bandName").text("");
  BandPicture.src = 'assets/images/punkrockband.jpg';

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
          if (guessesLeft <=3) {
            if(guessesLeft === 3) {
              document.getElementById("numGuesses").style.color = "#be0000";
              document.getElementById("numGuesses").style.fontSize = "large";
              } else if (guessesLeft === 2) {
                document.getElementById("numGuesses").style.fontSize = "x-large";
              } else if (guessesLeft === 1) {
                document.getElementById("numGuesses").style.fontSize = "xx-large";
              }           
            setUp2();
            $("#loser").text("Here's a Hint!");
          }
      } else { 
          for (var x = 0; x < answer.length; x++) {
              if (letter === answer[x]) {
                  answerArray[x] = letter;
              } 
          }                
      }
  }
}

function getAudio(x) {
  mySound = document.getElementById(x); 
  mySound.currentTime = 0;  
}

function isLoser() {
  if (guessesLeft <= 0) {
    losses++;
    updates();
    isFinished = true;
    //playpiano cat
    var loserPrompt = "Please press ANY key to try again!";
    $("#loser").text(loserPrompt);
    document.getElementById("bandPic").src = "https://media.giphy.com/media/SEO7ub2q1fORa/giphy.gif";
    getAudio("keyboardcat");
    mySound.play();
  }
}

function isWinner(x) {
  if (answerArray.indexOf("_") === -1) {
    wins++;
    updates();
    isFinished = true;
    //add pictures and music here
    setUp2();
    $("#loser").text("");
    document.getElementById("bandName").textContent = answer;
    mySound.play()
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
      isWinner(answer);
      isLoser();
    }
  }
}

function setUp2() {
  if(answer === "BLINK-182") {
    BandPicture.src = 'assets/images/blink182.jpg';
    getAudio("blink182");
  } else if (answer === "GREEN DAY") {
    BandPicture.src = 'assets/images/greenday.jpg';
    getAudio("greenday");
  } else if (answer === "MY CHEMICAL ROMANCE") {
    BandPicture.src = 'assets/images/mychemicalromance.jpg';
    getAudio("mychemicalromance");
  } else if (answer === "FALL OUT BOY") {
    BandPicture.src = 'assets/images/falloutboy.jpg';
    getAudio("falloutboy");
  } else if (answer === "SUM 41") {
    BandPicture.src = 'assets/images/sum41.jpg';
    getAudio("sum41");
  } else if (answer === "JIMMY EAT WORLD") {
    BandPicture.src = 'assets/images/jimmyeatworld.jpg';
    getAudio("jimmyeatworld");
  } else if (answer === "SIMPLE PLAN") {
    BandPicture.src = 'assets/images/simpleplan.jpg';
    getAudio("simpleplan");
  } else if (answer === "THE ALL-AMERICAN REJECTS") {
    BandPicture.src = 'assets/images/theallamericanrejects.jpg';
    getAudio("theallamericanrejects");
  } else if (answer === "THE OFFSPRING") {
    BandPicture.src = 'assets/images/theoffspring.jpg';
    getAudio("theoffspring");
  } else if (answer === "RADIOHEAD") {
    BandPicture.src = 'assets/images/radiohead.jpg';
    getAudio("radiohead");
  } else if (answer === "THE STROKES") {
    BandPicture.src = 'assets/images/thestrokes.jpg';
    getAudio("thestrokes");
  } else if (answer === "ARCADE FIRE") {
    BandPicture.src = 'assets/images/arcadefire.jpg';
    getAudio("arcadefire");
  } else if (answer === "ARCTIC MONKEYS") {
    BandPicture.src = 'assets/images/arcticmonkeys.jpg';
    getAudio("arcticmonkeys");
  } else if (answer === "THE KILLERS") {
    BandPicture.src = 'assets/images/thekillers.jpg';
    getAudio("thekillers");
  } else if (answer === "INTERPOL") {
    BandPicture.src = 'assets/images/interpol.jpg';
    getAudio("interpol");
  } else if (answer === "GORILLAZ") {
    BandPicture.src = 'assets/images/gorillaz.jpg';
    getAudio("gorillaz");
  } else if (answer === "EVANESCENCE") {
    BandPicture.src = 'assets/images/evanescence.jpg';
    getAudio("evanescence");
  } else if (answer === "BOWLING FOR SOUP") {
    BandPicture.src = 'assets/images/bowlingforsoup.jpg';
    getAudio("bowlingforsoup");
  } else if (answer === "NEW FOUND GLORY") {
    BandPicture.src = 'assets/images/newfoundglory.jpg';
    getAudio("newfoundglory");
  }
}

setUp();
updates();
