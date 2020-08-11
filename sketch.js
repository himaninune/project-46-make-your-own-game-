var canvas;
var form, chat;
var database;
var allCards;
var gameState = 0;
var playerCount;
var allPlayers;
var player;


function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  form = new Form();
  chat = new ChatBox();
  Card.getCardInfo();


}

function draw() {
  background(255, 255, 255);
  form.display();
  if (playerCount === 2) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }

  drawSprites();
}