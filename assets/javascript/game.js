var punkBands = ["BLINK-182", "GREEN DAY", "MY CHEMICAL ROMANCE", "FALL OUT BOY", "SUM 41",
"JIMMY EAT WORLD", "SIMPLE PLAN", "THE ALL-AMERICAN REJECTS", "THE OFFSPRING", "RADIOHEAD", 
"THE STROKES", "ARCADE FIRE", "ARCTIC MONKEYS", "THE KILLERS", "INTERPOL", 
"GORILLAZ", "DEATH CAB FOR CUTIE", "EVANESCENCE", "BOWLING FOR SOUP"];

var numGuesses = 10;
var guessesLeft = 0;
var guessedLetters = [];
var answerArray = [];
var answer;
var wins = 0;
var losses = 0;
var isFinished = false;

confirm("Press OK if you are 18 years or older.  If not, please get parental approval.");

var mySound = document.getElementById("keyboardcat");

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
  $("#bandName").text("");

  console.log(answer);
  console.log(answerArray);
  updates();
}

function updates() {
  //$('#bandPic').html("<img src='../assets/images/blink182.jpg'>");
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
    var loserPrompt = "Please press ANY key to try again!";
    $("#bandName").text(loserPrompt);
    document.getElementById("bandPic").src = "https://media.giphy.com/media/SEO7ub2q1fORa/giphy.gif";
    //playAudio("sounds");
    playAudio("keyboardcat");
  }
}

function isWinner(x) {
  if (answerArray.indexOf("_") === -1) {
    wins++;
    updates();
    isFinished = true;
    //add pictures and music here
    //$('#bandPic').html("<img src='../assets/images/blink182'>");
    document.getElementById("bandName").textContent = answer;
    if(answer === "BLINK-182") {
        playAudio("blink182");
      } else if (answer === "GREEN DAY") {
        playAudio("greenday");
        document.getElementById("bandName").textContent = answer;
      } else if (answer === "GREEN DAY") {
        playAudio("greenday");
      } else if (answer === "MY CHEMICAL ROMANCE") {
        playAudio("mychemicalromance");
      } else if (answer === "FALL OUT BOY") {
        playAudio("falloutboy");
      } else if (answer === "SUM 41") {
        playAudio("sum41");
      } else if (answer === "JIMMY EAT WORLD") {
        playAudio("jimmyeatworld");
      } else if (answer === "SIMPLE PLAN") {
        playAudio("simpleplan");
      } else if (answer === "THE ALL-AMERICAN REJECTS") {
        playAudio("theallamericanrejects");
      } else if (answer === "THE OFFSPRING") {
        playAudio("theoffspring");
      } else if (answer === "RADIOHEAD") {
        playAudio("radiohead");
      } else if (answer === "THE STROKES") {
        playAudio("thestrokes");
      } else if (answer === "ARCADE FIRE") {
        playAudio("arcadefire");
      } else if (answer === "ARCTIC MONKEYS") {
        playAudio("arcticmonkeys");
      } else if (answer === "THE KILLERS") {
        playAudio("thekillers");
      } else if (answer === "INTERPOL") {
        playAudio("interpol");
      } else if (answer === "GORILLAZ") {
        playAudio("gorillaz");
      } else if (answer === "DEATH CAB FOR CUTIE") {
        playAudio("deathcabforcutie");
      } else if (answer === "EVANESCENCE") {
        playAudio("evanescence");
      } else if (answer === "BOWLING FOR SOUP") {
        playAudio("bowlingforsoup");
      }
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
      isWinner(answer);
      isLoser();
    }
  }
}

setUp();
updates();
