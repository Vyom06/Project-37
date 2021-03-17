var canvas;
var gameState = 0; 
var contestantCount;
var database, quiz, question, contestant;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  contestant.display();
}


function draw(){
  background("pink");

  
}
