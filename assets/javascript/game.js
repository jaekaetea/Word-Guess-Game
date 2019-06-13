var punkBands = ["AGAINST ME!","ALKALINE TRIO","ALL TIME LOW","BLINK-182",
"BOWLING FOR SOUP","BOYS LIKE GIRLS","BRAND NEW","CUTE IS WHAT WE AIM FOR",
"EVANESCENCE","FALL OUT BOY","GOOD CHARLOTTE","GORILLAZ","GREEN DAY",
"HEAD AUTOMATICA","HELLOGOODBYE","INTERPOL","JIMMY EAT WORLD",
"LESS THAN JAKE","MAYDAY PARADE","MOTION CITY SOUNDTRACK","MUSE",
"MY CHEMICAL ROMANCE","NEW FOUND GLORY","NO DOUBT","RANCID","RELIENT K",
"SIMPLE PLAN","STORY OF THE YEAR","SUGARCULT","SUM 41","THE ALL-AMERICAN REJECTS",
"THE ATARIS","THE KILLERS","THE OFFSPRING","THE RED JUMPSUIT APPARATUS",
"THE STARTING LINE","THE STROKES","THE USED","THE WHITE STRIPES",
"VAMPIRE WEEKEND","WEEZER","WHEATUS","YELLOWCARD"];


var numGuesses = 10;
var guessesLeft = 0;
var guessedLetters = [];
var answerArray;
var answer;
var wins = 0;
var losses = 0;
var isFinished = false;
var songTitle;
//var checkBandTest = 0;

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
  //answer = punkBands[checkBandTest];
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
    document.getElementById("bandName").textContent = songTitle;

    mySound.currentTime = 0;  
    mySound.play()
    //test code
    //checkBandTest++;
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
  if  (answer === "AGAINST ME!") {
    songTitle = "AGAINST ME! - THRASH UNREAL";
    BandPicture.src = 'assets/images/againstme.jpg';
    mySound.src = "assets/music/againstme.mp3.aac"; 
} else if (answer === "ALKALINE TRIO") {
    songTitle = "ALKALINE TRIO - MERCY ME";
    BandPicture.src = 'assets/images/alkalinetrio.jpg';
    mySound.src = "assets/music/alkalinetrio.mp3.aac";
} else if (answer === "ALL TIME LOW") {
    songTitle = "ALL TIME LOW - DEAR MARIA/ COUNT ME IN";
    BandPicture.src = 'assets/images/alltimelow.jpg';
    mySound.src = "assets/music/alltimelow.mp3.aac";
} else if (answer === "BLINK-182") {
    songTitle = "BLINK-182 - ONLINE SONGS";
    BandPicture.src = 'assets/images/blink182.jpg';
    mySound.src = "assets/music/blink182.mp3.aac"; 
} else if (answer === "BOWLING FOR SOUP") {
    songTitle = "BOWLING FOR SOUP - 1985";
    BandPicture.src = 'assets/images/bowlingforsoup.jpg';
    mySound.src = "assets/music/bowlingforsoup.mp3.aac"; 
} else if (answer === "BOYS LIKE GIRLS") {
    songTitle = "BOYS LIKE GIRLS - HERO / HEROINE";
    BandPicture.src = 'assets/images/boyslikegirls.jpg';
    mySound.src = "assets/music/boyslikegirls.mp3.aac"; 
} else if (answer === "BRAND NEW") {
    songTitle = "BRAND NEW - SIC TRANSIT GLORIA///GLORY FADES";
    BandPicture.src = 'assets/images/brandnew.jpg';
    mySound.src = "assets/music/brandnew.mp3.aac";  
  } else if (answer === "CUTE IS WHAT WE AIM FOR") {
    songTitle = "CUTE IS WHAT WE AIM FOR - THE CURSE OF CURVES";
    BandPicture.src = 'assets/images/cuteiswhatweaimfor.jpg';
    mySound.src = "assets/music/cuteiswhatweaimfor.mp3.aac";  
} else if (answer === "EVANESCENCE") {
    songTitle = "EVANESCENCE - CALL ME WHEN YOU/RE SOBER";
    BandPicture.src = 'assets/images/evanescence.jpg';
    mySound.src = "assets/music/evanescence.mp3.aac";   
} else if (answer === "FALL OUT BOY") {
    songTitle = "FALL OUT BOY - SUGAR/ WE/RE GOIN DOWN";
    BandPicture.src = 'assets/images/falloutboy.jpg';
    mySound.src = "assets/music/falloutboy.mp3.aac";  
} else if (answer === "GOOD CHARLOTTE") {
    songTitle = "GOOD CHARLOTTE - HOLD ON";
    BandPicture.src = 'assets/images/goodcharlotte.jpg';
    mySound.src = "assets/music/goodcharlotte.mp3.aac"; 
} else if (answer === "GORILLAZ") {
    songTitle = "GORILLAZ - FEEL GOOD INC/";
    BandPicture.src = 'assets/images/gorillaz.jpg';
    mySound.src = "assets/music/gorillaz.mp3.aac"; 
} else if (answer === "GREEN DAY") {
    songTitle = "GREEN DAY - WAKE ME UP WHEN SEPTEMBER ENDS";
    BandPicture.src = 'assets/images/greenday.jpg';
    mySound.src = "assets/music/greenday.mp3.aac"; 
} else if (answer === "HEAD AUTOMATICA") {
    songTitle = "HEAD AUTOMATICA - BEATING HEART BABY";
    BandPicture.src = 'assets/images/headautomatica.jpg';
    mySound.src = "assets/music/headautomatica.mp3.aac";
} else if (answer === "HELLOGOODBYE") {
    songTitle = "HELLOGOODBYE - OH/ IT IS LOVE";
    BandPicture.src = 'assets/images/hellogoodbye.jpg';
    mySound.src = "assets/music/hellogoodbye.mp3.aac";
} else if (answer === "INTERPOL") {
    songTitle = "INTERPOL - SLOW HANDS";
    BandPicture.src = 'assets/images/interpol.jpg';
    mySound.src = "assets/music/interpol.mp3.aac";   
} else if (answer === "JIMMY EAT WORLD") {
    songTitle = "JIMMY EAT WORLD - THE MIDDLE";
    BandPicture.src = 'assets/images/jimmyeatworld.jpg';
    mySound.src = "assets/music/jimmyeatworld.mp3.aac";
} else if (answer === "LESS THAN JAKE") {
    songTitle = "LESS THAN JAKE - SHE/S GONNA BREAK SOON";
    BandPicture.src = 'assets/images/lessthanjake.jpg';
    mySound.src = "assets/music/lessthanjake.mp3.aac";
} else if (answer === "MAYDAY PARADE") {
    songTitle = "MAYDAY PARADE - MISERABLE AT BEST";
    BandPicture.src = 'assets/images/maydayparade.jpg';
    mySound.src = "assets/music/maydayparade.mp3.aac"; 
} else if (answer === "MOTION CITY SOUNDTRACK") {
    songTitle = "MOTION CITY SOUNDTRACK - EVERYTHING IS ALRIGHT";
    BandPicture.src = 'assets/images/motioncitysoundtrack.jpg';
    mySound.src = "assets/music/motioncitysoundtrack.mp3.aac";  
} else if (answer === "MUSE") {
    songTitle = "MUSE - STARLIGHT";
    BandPicture.src = 'assets/images/muse.jpg';
    mySound.src = "assets/music/muse.mp3.aac";  
} else if (answer === "MY CHEMICAL ROMANCE") {
    songTitle = "MY CHEMICAL ROMANCE - TEENAGERS";
    BandPicture.src = 'assets/images/mychemicalromance.jpg';
    mySound.src = "assets/music/mychemicalromance.mp3.aac"; 
} else if (answer === "NEW FOUND GLORY") {
    songTitle = "NEW FOUND GLORY - MY FRIENDS OVER YOU";
    BandPicture.src = 'assets/images/newfoundglory.jpg';
    mySound.src = "assets/music/newfoundglory.mp3.aac";  
} else if (answer === "NO DOUBT") {
    songTitle = "NO DOUBT - RUNNING";
    BandPicture.src = 'assets/images/nodoubt.jpg';
    mySound.src = "assets/music/nodoubt.mp3.aac"; 
  } else if (answer === "RANCID") {
    songTitle = "RANCID - RED HOT MOON";
    BandPicture.src = 'assets/images/rancid.jpg';
    mySound.src = "assets/music/rancid.mp3.aac";
} else if (answer === "RELIENT K") {
    songTitle = "RELIENT K - BE MY ESCAPE";
    BandPicture.src = 'assets/images/relientk.jpg';
    mySound.src = "assets/music/relientk.mp3.aac"; 
} else if (answer === "SIMPLE PLAN") {
    songTitle = "SIMPLE PLAN - I/D DO ANYTHING";
    BandPicture.src = 'assets/images/simpleplan.jpg';
    mySound.src = "assets/music/simpleplan.mp3.aac";
} else if (answer === "STORY OF THE YEAR") {
    songTitle = "STORY OF THE YEAR - UNTIL THE DAY I DIE";
    BandPicture.src = 'assets/images/storyoftheyear.jpg';
    mySound.src = "assets/music/storyoftheyear.mp3.aac";
} else if (answer === "SUGARCULT") {
    songTitle = "SUGARCULT - MEMORY";
    BandPicture.src = 'assets/images/sugarcult.jpg';
    mySound.src = "assets/music/sugarcult.mp3.aac";
} else if (answer === "SUM 41") {
    songTitle = "SUM 41 - STILL WAITING";
    BandPicture.src = 'assets/images/sum41.jpg';
    mySound.src = "assets/music/sum41.mp3.aac";  
} else if (answer === "THE ALL-AMERICAN REJECTS") {
    songTitle = "THE ALL-AMERICAN REJECTS - SWING/ SWING";
    BandPicture.src = 'assets/images/theallamericanrejects.jpg';
    mySound.src = "assets/music/theallamericanrejects.mp3.aac"; 
} else if (answer === "THE ATARIS") {
    songTitle = "THE ATARIS - THE BOYS OF SUMMER";
    BandPicture.src = 'assets/images/theataris.jpg';
    mySound.src = "assets/music/theataris.mp3.aac"; 
} else if (answer === "THE KILLERS") {
    songTitle = "THE KILLERS - BELIEVE ME NATALIE";
    BandPicture.src = 'assets/images/thekillers.jpg';
    mySound.src = "assets/music/thekillers.mp3.aac";
} else if (answer === "THE OFFSPRING") {
    songTitle = "THE OFFSPRING - WHY DON/T YOU GET A JOB";
    BandPicture.src = 'assets/images/theoffspring.jpg';
    mySound.src = "assets/music/theoffspring.mp3.aac"; 
} else if (answer === "THE RED JUMPSUIT APPARATUS") {
    songTitle = "THE RED JUMPSUIT APPARATUS - FACE DOWN";
    BandPicture.src = 'assets/images/theredjumpsuitapparatus.jpg';
    mySound.src = "assets/music/theredjumpsuitapparatus.mp3.aac"; 
} else if (answer === "THE STARTING LINE") {
    songTitle = "THE STARTING LINE - THE BEST OF ME";
    BandPicture.src = 'assets/images/thestartingline.jpg';
    mySound.src = "assets/music/thestartingline.mp3.aac"; 
} else if (answer === "THE STROKES") {
    songTitle = "THE STROKES - YOU ONLY LIVE ONCE";
    BandPicture.src = 'assets/images/thestrokes.jpg';
    mySound.src = "assets/music/thestrokes.mp3.aac";  
} else if (answer === "THE USED") {
    songTitle = "THE USED - THE TASTE OF INK";
    BandPicture.src = 'assets/images/theused.jpg';
    mySound.src = "assets/music/theused.mp3.aac";
} else if (answer === "THE WHITE STRIPES") {
    songTitle = "THE WHITE STRIPES - SEVEN NATION ARMY";
    BandPicture.src = 'assets/images/thewhitestripes.jpg';
    mySound.src = "assets/music/thewhitestripes.mp3.aac";
} else if (answer === "VAMPIRE WEEKEND") {
    songTitle = "VAMPIRE WEEKEND - A-PUNK";
    BandPicture.src = 'assets/images/vampireweekend.jpg';
    mySound.src = "assets/music/vampireweekend.mp3.aac";
} else if (answer === "WEEZER") {
    songTitle = "WEEZER - PERFECT SITUATION";
    BandPicture.src = 'assets/images/weezer.jpg';
    mySound.src = "assets/music/weezer.mp3.aac";
} else if (answer === "WHEATUS") {
    songTitle = "WHEATUS - TEENAGE DIRTBAG";
    BandPicture.src = 'assets/images/wheatus.jpg';
    mySound.src = "assets/music/wheatus.mp3.aac";
} else if (answer === "YELLOWCARD") {
    songTitle = "YELLOWCARD - OCEAN AVENUE";
    BandPicture.src = 'assets/images/yellowcard.jpg';
    mySound.src = "assets/music/yellowcard.mp3.aac";
  }
}

setUp();
updates();
