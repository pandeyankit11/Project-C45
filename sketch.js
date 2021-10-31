var bg,blastImg,badge1,badge2,badge3,helicopter,wall;
var form,game,player,password,AG,htb,bs;
var IS;
var gameState =0;
function preload (){
  bg =loadImage("images/bg.jpg");
  blastImg =loadImage("images/blast.png");
  badge1 =loadImage("images/badge1.jpg");
  badge2 =loadImage("images/badge2.jpg");
  badge3 =loadImage("images/badge3.png");
  helicopter =loadImage("images/helicopter.png");
  wall =loadImage("images/wall.jpg");
 password =loadImage("images/pass.jpg");
AG =loadImage("images/ag.png");
htb =loadImage("images/HTB.jpg");
bs =loadImage("images/BS.jpg");
IS =loadSound("INTRO.S.mp3");
}




function setup() {
  createCanvas(1530,740);
  
  game =new Game();
  game.start();





  
}

function draw() {
  
  if(gameState ===0){
  background(bg);
  
  }

if(gameState ===1){
  
  
  background(password);
  game.play();
  
}

if(gameState === 2){
  background(AG);
  game.play2();
}


if(gameState === 3){
  background(htb);
  game.play3();
}

if(gameState === 4){
  
  background(bs);
  game.play4();
  
}
  
  drawSprites();
}