var canvas;
var database;
var gameState=0;
var playerCount;
var form, game, player;
var allPlayers;

function setup(){
    canvas = createCanvas(400,400);
    database=firebase.database();
    game= new Game();
    game.getState();
    game.start();
}

function draw(){
  if(playerCount === 4){
    game.updateState(1);
  }
  
  console.log(gameState);

  if(gameState === 1){
      clear();
    game.play();
  }
}