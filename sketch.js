/*Leaderboard

  Lowest Scores = Top
Matthew: 6 W
Matthew: 7 W
Connell: 8 W
Max: 8 W
Seth: 9 W
Aly: 10 W
Josh: This Game Sucks (aka DNF)
Gabby: DNF
Charley: DNF


*/

var xPosMax = 600;

//computer variables
var comXPos = 0;
var comYPos = 0;
var counts = [];
var xPos = 0;
var ypos = 0;
var scored = false;
var won = false;
var on = false;
var index = 0;

var score = 0;

//speed options
//var rando1 = random(5,20);

//user variables

function setup() {
  createCanvas(800, 200);
  rando1 = random(5, 20);
}

function draw() {
  design();
  game();
  scoring();
}

function design() {
  background(150, 150, 250);

  //border
  stroke(64);
  noFill();
  strokeWeight(20);
  rect(0, 0, 800, 200);
  rect(120, 0, 5, 200);

  //score bit
  strokeWeight(1);
  textSize(20);
  fill(64);
  text("Score:", 30, 50);
  if (frameCount % 60 == 0) score++;
  text(score, 50, 70);
  textSize(100);
  if (won) text("W", 15, 150);
  else text("L", 30, 150);
  stroke(204, 0, 0);
  if (on) {
    //rectMode(CENTER);
    fill(76, 0, 153);
    stroke(76, 0, 153);
    rect(135, 40, comXPos, 50);
    fill(204, 0, 0);
    stroke(204, 0, 0);
    rect(135, 110, xPos, 50);
  }
}

function game() {
  //computer
  if (frameCount % 10 == 0) {
    on = true;
    comXPos = comXPos + 10;
  }

  //user
  if (index > 0) {
    on = true;
    xPos = xPos + 10;
    index = 0;
  }
}

function scoring() {
  if (comXPos == 700 && xPos < comXPos) {
    won = false;
  } else if (xPos == 700 && xPos > comXPos) {
    won = true;
  }
}

function mousePressed() {
  index++;
}
