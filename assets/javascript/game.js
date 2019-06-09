var punkBands = ["BLINK-182", "GREEN DAY", "MY CHEMICAL ROMANCE", "FALL OUT BOY", "SUM 41",
"JIMMY EAT WORLD", "SIMPLE PLAN", "THE ALL-AMERICAN REJECTS", "THE OFFSPRING", "RADIOHEAD", 
"THE STROKES", "ARCADE FIRE", "ARCTIC MONKEYS", "THE KILLERS", "INTERPOL", 
"GORILLAZ", "DEATH CAB FOR CUTIE", "EVANESCENCE", "BOWLING FOR SOUP", "NEW FOUND GLORY"];

var numGuesses = 10;
var guessesLeft = 0;
var guessedLetters = [];
var answerArray = [];
var answer = [];
var wins = 0;
var losses = 0;
var isFinished = false;

BandPicture = document.getElementById("bandPic");

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

  $("#bandName").text("");

  console.log(answer);
  console.log(answerArray);
  updates();
}

function updates() {
  //BandPicture.src = 'assets/images/gorillaz.jpg';
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
    playAudio("keyboardcat");
  }
}

function isWinner(x) {
  if (answerArray.indexOf("_") === -1) {
    wins++;
    updates();
    isFinished = true;
    //add pictures and music here
    document.getElementById("bandName").textContent = answer;
    if(answer === "BLINK-182") {
        BandPicture.src = 'assets/images/blink182.jpg';
        playAudio("blink182");
      } else if (answer === "GREEN DAY") {
        BandPicture.src = 'assets/images/greenday.jpg';
        playAudio("greenday");
      } else if (answer === "MY CHEMICAL ROMANCE") {
        BandPicture.src = 'assets/images/mychemicalromance.jpg';
        playAudio("mychemicalromance");
      } else if (answer === "FALL OUT BOY") {
        BandPicture.src = 'assets/images/falloutboy.jpg';
        playAudio("falloutboy");
      } else if (answer === "SUM 41") {
        BandPicture.src = 'assets/images/sum41.jpg';
        playAudio("sum41");
      } else if (answer === "JIMMY EAT WORLD") {
        BandPicture.src = 'assets/images/jimmyeatworld.jpg';
        playAudio("jimmyeatworld");
      } else if (answer === "SIMPLE PLAN") {
        BandPicture.src = 'assets/images/simpleplan.jpg';
        playAudio("simpleplan");
      } else if (answer === "THE ALL-AMERICAN REJECTS") {
        BandPicture.src = 'assets/images/theallamericanrejects.jpg';
        playAudio("theallamericanrejects");
      } else if (answer === "THE OFFSPRING") {
        BandPicture.src = 'assets/images/theoffspring.jpg';
        playAudio("theoffspring");
      } else if (answer === "RADIOHEAD") {
        BandPicture.src = 'assets/images/radiohead.jpg';
        playAudio("radiohead");
      } else if (answer === "THE STROKES") {
        BandPicture.src = 'assets/images/thestrokes.jpg';
        playAudio("thestrokes");
      } else if (answer === "ARCADE FIRE") {
        BandPicture.src = 'assets/images/arcadefire.jpg';
        playAudio("arcadefire");
      } else if (answer === "ARCTIC MONKEYS") {
        BandPicture.src = 'assets/images/arcticmonkeys.jpg';
        playAudio("arcticmonkeys");
      } else if (answer === "THE KILLERS") {
        BandPicture.src = 'assets/images/thekillers.jpg';
        playAudio("thekillers");
      } else if (answer === "INTERPOL") {
        BandPicture.src = 'assets/images/interpol.jpg';
        playAudio("interpol");
      } else if (answer === "GORILLAZ") {
        BandPicture.src = 'assets/images/gorillaz.jpg';
        playAudio("gorillaz");
      } else if (answer === "DEATH CAB FOR CUTIE") {
        BandPicture.src = 'assets/images/deathcabforcutie.jpeg';
        playAudio("deathcabforcutie");
      } else if (answer === "EVANESCENCE") {
        BandPicture.src = 'assets/images/evanescence.jpg';
        playAudio("evanescence");
      } else if (answer === "BOWLING FOR SOUP") {
        BandPicture.src = 'assets/images/bowlingforsoup.jpg';
        playAudio("bowlingforsoup");
      } else if (answer === "NEW FOUND GLORY") {
        BandPicture.src = 'assets/images/newfoundglory.jpg';
        playAudio("newfoundglory");
      }
    //document.getElementById("bandPic").src = "https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_175/f_auto,q_auto,w_1100/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg";
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
