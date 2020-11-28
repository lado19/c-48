<!DOCTYPE html><html><head>
    <script src>="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.8.0/addons/p5.sound.min.js"></script>
<script src="https://assets.editor.p5js.org/5f7c402ca74dce0024427053/2f36cbc8-b2a9-4291-b265-b90c26f6a5e3.js"></script>
    
    <meta charset="utf-8">

  <base href="https://editor.p5js.org/D.Jershia/present/50RqHtkqE/"><style>
html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}
</style></head>
  <body>
      <script>var PLAY=1;
var END=0 ;
var START;
var gameState = START;
var float1,float2,floatsGroup;
var ground,groundImage;
var sky,skyImage;
var girl,girlImage;
var girl_standing,girl_standing1;
var invisibleGround;
var fireGround,fireGroundImage;
var fireGround1,fireGround1Image;
var coin,coinImage,coinsGroup;
var hill,hillImage;
var restart,restartImage;
var coinSound,gameOverSound;
var Score;

function preload(){
float1 = loadImage("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/962221e1-a183-4cd0-a357-400f1771c8f9.png");
float2 = loadImage("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/6503b5ac-ca01-4ea5-8bd9-59b2d60e9ce0.png");
groundImage = loadImage("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/2185ecfb-965f-44f8-a372-d3b708eca71a.png");
skyImage = loadImage("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/ada01aca-a47d-48dd-ba47-b63526cfd063.png");
fireGroundImage = loadImage("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/5f254a8d-5552-4a9c-9161-33961a4eac3f.png");
fireGround1Image = loadImage("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/1278dc63-5982-4a9c-a9a8-4e0a23164783.png")
coinImage = loadAnimation("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/6c672103-2de7-49c2-b5ff-267138cbeabb.png","https://assets.editor.p5js.org/5f7c402ca74dce0024427053/27ec8463-1403-4e1c-8c8d-994be2b4be81.png","https://assets.editor.p5js.org/5f7c402ca74dce0024427053/12e745dc-06bb-4915-90ad-6e96bc31973c.png","https://assets.editor.p5js.org/5f7c402ca74dce0024427053/13d5af7c-1966-41de-b257-4f33a9b2540a.png","https://assets.editor.p5js.org/5f7c402ca74dce0024427053/c5662fb4-7a8b-4efc-8168-57a8526f2e3f.png","https://assets.editor.p5js.org/5f7c402ca74dce0024427053/19f2c4b0-49c8-4cd6-845f-0bc433597d23.png")
hillImage = loadImage("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/76966534-75d2-449d-b757-802107a11a45.png");
girl_standing = loadAnimation("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/42a8cf7d-e6ca-49cf-87bf-e347d0d077c2.png");
girl_standing1 = loadAnimation("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/f5aa674e-9156-44be-a4e6-aa6e2823713b.png");
girlImage = loadAnimation("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/0dc83542-f6bc-429f-ad73-eb17f5d5f973.png","https://assets.editor.p5js.org/5f7c402ca74dce0024427053/0a80869e-c287-4c28-9c68-7b019b32f0ca.png","https://assets.editor.p5js.org/5f7c402ca74dce0024427053/cbab9716-862e-41f5-9254-c37841e0fd64.png","https://assets.editor.p5js.org/5f7c402ca74dce0024427053/b3e13bfa-928b-4a6e-8503-ded1f6abe97f.png","https://assets.editor.p5js.org/5f7c402ca74dce0024427053/071908c4-0978-44d9-a75b-ec0656a50fdc.png","https://assets.editor.p5js.org/5f7c402ca74dce0024427053/b89bdc95-6290-4f4c-a8dc-08054113118c.png");
restartImage = loadImage("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/81e2bbff-270b-48b2-9f2d-430ae3c71e0c.png");
coinSound = loadSound("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/10fba4bb-f267-4150-98b5-30c6ef517f5d.wav");
gameOverSound = loadSound("https://assets.editor.p5js.org/5f7c402ca74dce0024427053/2cf0da21-224d-43fc-b5b2-d2a314ce6fec.wav");
}

function setup(){
  createCanvas(800,400)
  floatsGroup = createGroup();
  coinsGroup = createGroup();
  sky = createSprite(400,340,600,600);
  sky.addImage(skyImage);
  sky.scale =2;
  ground = createSprite(400,340,600,600);
  ground.addImage(groundImage);
  ground.scale = 0.2;
  girl = createSprite(50,190,20,50);
  girl.addAnimation("standing",girl_standing);
  girl.addAnimation("standing",girl_standing1);
  girl.addAnimation("running",girlImage);
  girl.scale = 0.3;
  invisibleGround = createSprite(400,330,800,10);
  invisibleGround.visible = false;
  fireGround = createSprite(250,330,600,600)
  fireGround.addImage(fireGroundImage)
  fireGround.scale=0.07;
  fireGround1 = createSprite(550,330,600,600)
  fireGround1.addImage(fireGround1Image)
  fireGround1.scale=0.07;
  hill = createSprite(50,320,10,10);
  hill.addImage(hillImage);
  hill.setCollider("rectangle",0,0,0,160);
  restart = createSprite(400,200);
  restart.addImage(restartImage);
  restart.scale = 0.8;
  restart.visible = false;
  Score = 0;
}
function draw(){
background("yellow");
    fireGround.visible = false;
  fireGround1.visible = false;
  girl.velocityY = girl.velocityY + 0.8;
if(gameState === START){
    girl.collide(hill)
if (keyWentDown("space")){
  gameState = PLAY;
  girl.visible = true;
   hill.visible = true;
  restart.visible = false;
}
}
if(gameState === PLAY){
    girl.changeAnimation("running",girlImage);
 if(keyDown("space")&& girl.y >= 100) {
      girl.velocityY = -12;
  }
   hill.visible = false;
    restart.visible = false;
    fireGround.visible = true;
    fireGround1.visible = true;
    sky.velocityX =-1;
 if (sky.x < 0){
     sky.x=380;
    }  
 if (girl.x>0){
  girl.x = 50;
  }
ground.velocityX =- 3
   if (ground.x < 0){
     ground.x=380;
   }
 girl.collide(invisibleGround);
if (girl.isTouching(floatsGroup)){
  girl.collide(floatsGroup);
}
  spawnFloats();
if(girl.isTouching(coinsGroup)){
  Score = Score + 1;
  coinsGroup.destroyEach();
  coinSound.play();
}
if(girl.isTouching(invisibleGround)){
  gameState = END;
  gameOverSound.play();
}
}
if (gameState === END){
    girl.changeAnimation("standing",girl_standing1);
    restart.visible = true;
    girl.velocityY = 0;
    girl.velocityX = 0;
    coinsGroup.setLifetimeEach(-1);
    floatsGroup.setLifetimeEach(-1);   
    coinsGroup.setVelocityXEach(0);
    floatsGroup.setVelocityXEach(0); 
    sky.velocityX=0;
    ground.velocityX=0;
    floatsGroup.destroyEach();
    coinsGroup.destroyEach();
if(mousePressedOver(restart)){
  reset();
}
}
  drawSprites();
  textSize(25);
  fill("red");
  text("Coins Collected : " + Score,350,50);
}
function reset(){
  girl.x = 50;
  girl.y = 190;
  hill.visible = true;
  hill.collide(girl)
  gameState = START;
  restart.visible = false;
  girl.collide(invisibleGround);
  Score=0;
}
function spawnFloats(){
if (frameCount % 80 === 0){
  var floats = createSprite(400,165,10,40);
  floats.y = Math.round(random(150,250));
  floats.velocityX = -3
  floats.addImage(float2);
    floats.scale = 0.3;
    floats.lifetime = 300;
    girl.collide(floats);
    floats.setCollider("rectangle",10,50,50,10);
    floatsGroup.add(floats);
}
  if (frameCount % 180=== 0){
  coin = createSprite(400,165,20,50);
  coin.addAnimation("rotation", coinImage);
 coin.y = Math.round(random(100,200));
  coin.velocityX = -3
  coin.scale = 0.4;
  coinsGroup.add(coin) 
}
}
</script>
  

</body></html>