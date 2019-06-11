var punkBands = ["BLINK-182", "GREEN DAY", "MY CHEMICAL ROMANCE", "FALL OUT BOY", "SUM 41",
"JIMMY EAT WORLD", "SIMPLE PLAN", "THE ALL-AMERICAN REJECTS", "THE OFFSPRING", "RADIOHEAD", 
"THE STROKES", "ARCADE FIRE", "ARCTIC MONKEYS", "THE KILLERS", "INTERPOL", "GORILLAZ", 
"EVANESCENCE", "BOWLING FOR SOUP", "NEW FOUND GLORY", "NO DOUBT", "THE RED JUMPSUIT APPARATUS", 
"ALKALINE TRIO", "SUGARCULT", "BRAND NEW", "RELIENT K", "AGAINST ME!", "WEEZER"];

var numGuesses = 10;
var guessesLeft = 0;
var guessedLetters = [];
var answerArray;
var answer;
var wins = 0;
var losses = 0;
var isFinished = false;

BandPicture = document.getElementById("bandPic");
var mySound = new Audio();

confirm("Press OK if you are 18 years or older.  If not, please get parental approval.");

var startPrompt = "PRESS ANY KEY TO GET STARTED!";
var loserPrompt = "Press the SPACE key to try again!";
var againPrompt = "Press the SPACE key to play again!";

function setUp() {
  mySound.pause(); 
  answer = [];
  answerArray = [];
  answer = punkBands[Math.floor(Math.random() * punkBands.length)];
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

  document.getElementById("loser").style.color = "#ffffff";
  $("#loser").text(startPrompt);
  $("#bandName").text("");
  BandPicture.src = 'assets/images/punkrockband.jpg';

  console.log("CHEATERS DON'T WIN! :(")
  console.log(answer);

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

function isLoser() {
  if (guessesLeft <= 0) {
    losses++;
    updates();
    isFinished = true;
    //playpiano cat
    $("#loser").text(loserPrompt);
    document.getElementById("bandPic").src = "https://media.giphy.com/media/SEO7ub2q1fORa/giphy.gif";

    mySound.src = "assets/music/keyboardCat.mp3";
    mySound.currentTime = 0;  
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
    document.getElementById("loser").style.color = "#be0000";
    $("#loser").text(againPrompt);
    document.getElementById("bandName").textContent = answer;

    mySound.currentTime = 0;  
    mySound.play()
    }
}

document.onkeyup = function(event) {
  if (isFinished) {
    if (event.keyCode === 32) {
      setUp();
      isFinished = false; 
    }
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
//mySound.src = "assets/music/keyboardCat.mp3";
function setUp2() {
  if(answer === "BLINK-182") {
    BandPicture.src = 'assets/images/blink182.jpg';
    mySound.src = "assets/music/blink182.mp3.aac";  
  } else if (answer === "GREEN DAY") {
    BandPicture.src = 'assets/images/greenday.jpg';
    mySound.src = "assets/music/greenday.mp3.aac"; 
  } else if (answer === "MY CHEMICAL ROMANCE") {
    BandPicture.src = 'assets/images/mychemicalromance.jpg';
    mySound.src = "assets/music/mychemicalromance.mp3.aac"; 
  } else if (answer === "FALL OUT BOY") {
    BandPicture.src = 'assets/images/falloutboy.jpg';
    mySound.src = "assets/music/falloutboy.mp3.aac";  
  } else if (answer === "SUM 41") {
    BandPicture.src = 'assets/images/sum41.jpg';
    mySound.src = "assets/music/sum41.mp3.aac";
  } else if (answer === "JIMMY EAT WORLD") {
    BandPicture.src = 'assets/images/jimmyeatworld.jpg';
    mySound.src = "assets/music/jimmyeatworld.mp3.aac";
  } else if (answer === "SIMPLE PLAN") {
    BandPicture.src = 'assets/images/simpleplan.jpg';
    mySound.src = "assets/music/simpleplan.mp3.aac";  
  } else if (answer === "THE ALL-AMERICAN REJECTS") {
    BandPicture.src = 'assets/images/theallamericanrejects.jpg';
    mySound.src = "assets/music/theallamericanrejects.mp3.aac"; 
  } else if (answer === "THE OFFSPRING") {
    BandPicture.src = 'assets/images/theoffspring.jpg';
    mySound.src = "assets/music/theoffspring.mp3.aac"; 
  } else if (answer === "RADIOHEAD") {
    BandPicture.src = 'assets/images/radiohead.jpg';
    mySound.src = "assets/music/radiohead.mp3.aac";  
  } else if (answer === "THE STROKES") {
    BandPicture.src = 'assets/images/thestrokes.jpg';
    mySound.src = "assets/music/thestrokes.mp3.aac";  
  } else if (answer === "ARCADE FIRE") {
    BandPicture.src = 'assets/images/arcadefire.jpg';
    mySound.src = "assets/music/arcadefire.mp3.aac"; 
  } else if (answer === "ARCTIC MONKEYS") {
    BandPicture.src = 'assets/images/arcticmonkeys.jpg';
    mySound.src = "assets/music/arcticmonkeys.mp3.aac";
  } else if (answer === "THE KILLERS") {
    BandPicture.src = 'assets/images/thekillers.jpg';
    mySound.src = "assets/music/thekillers.mp3.aac";
  } else if (answer === "INTERPOL") {
    BandPicture.src = 'assets/images/interpol.jpg';
    mySound.src = "assets/music/interpol.mp3.aac";   
  } else if (answer === "GORILLAZ") {
    BandPicture.src = 'assets/images/gorillaz.jpg';
    mySound.src = "assets/music/gorillaz.mp3.aac"; 
  } else if (answer === "EVANESCENCE") {
    BandPicture.src = 'assets/images/evanescence.jpg';
    mySound.src = "assets/music/evanescence.mp3.aac"; 
  } else if (answer === "BOWLING FOR SOUP") {
    BandPicture.src = 'assets/images/bowlingforsoup.jpg';
    mySound.src = "assets/music/bowlingforsoup.mp3.aac";  
  } else if (answer === "NEW FOUND GLORY") {
    BandPicture.src = 'assets/images/newfoundglory.jpg';
    mySound.src = "assets/music/newfoundglory.mp3.aac";  
  } else if (answer === "NO DOUBT") {
    BandPicture.src = 'assets/images/nodoubt.jpg';
    mySound.src = "assets/music/nodoubt.mp3.aac";
  } else if (answer === "THE RED JUMPSUIT APPARATUS") {
    BandPicture.src = 'assets/images/theredjumpsuitapparatus.jpg';
    mySound.src = "assets/music/theredjumpsuitapparatus.mp3.aac";
  } else if (answer === "ALKALINE TRIO") {
    BandPicture.src = 'assets/images/alkalinetrio.jpg';
    mySound.src = "assets/music/alkalinetrio.mp3.aac"; 
  } else if (answer === "SUGARCULT") {
    BandPicture.src = 'assets/images/sugarcult.jpg';
    mySound.src = "assets/music/sugarcult.mp3.aac";
  } else if (answer === "BRAND NEW") {
    BandPicture.src = 'assets/images/brandnew.jpg';
    mySound.src = "assets/music/brandnew.mp3.aac";  
  } else if (answer === "RELIENT K") {
    BandPicture.src = 'assets/images/relientk.jpg';
    mySound.src = "assets/music/relientk.mp3.aac"; 
  } else if (answer === "AGAINST ME!") {
    BandPicture.src = 'assets/images/againstme.jpg';
    mySound.src = "assets/music/againstme.mp3.aac"; 
  } else if (answer === "WEEZER") {
    BandPicture.src = 'assets/images/weezer.jpg';
    mySound.src = "assets/music/weezer.mp3.aac";
  }
}

setUp();
updates();
