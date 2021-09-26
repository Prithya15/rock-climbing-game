var background1, backgroundImg
var player, playerImg
var ground
var rockGroup
var rockImg1, rockImg2, rockImg3, rockImg4, rockImg5, rockImg6;
var gemsGroup;
var gemsImg1,gemsImg2,gemsImg3,gemsImg4;
var gems
var score=0;
function preload() {
  backgroundImg = loadImage("images/background.png")
  playerImg = loadAnimation("images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png")
  rockImg1 = loadImage("images/rock1.png");
  rockImg2 = loadImage("images/rock2.png");
  rockImg3 = loadImage("images/rock3.png");
  rockImg4 = loadImage("images/rock4.png");
  rockImg5 = loadImage("images/rock5.png");
  rockImg6 = loadImage("images/rock6.png");
  gemsImg1=loadImage("images/Picture6.png")
  gemsImg2=loadImage("images/Picture7.png")

}
function setup() {
  createCanvas(800, 800);
  background1 = createSprite(400, 400, 600, 1000);
  background1.addImage(backgroundImg);
  background1.velocityY = 2;
  if (background1.y > 600) {
    background1.y = 400
  }
  rockGroup = new Group();
  gemsGroup = new Group();
  player = createSprite(400, 700, 20, 20);
  player.addAnimation("player", playerImg);
  ground = createSprite(400, 730, 400, 20)
}

function draw() {
  background("lightblue");
  ground.visible = false;
  fill("blue");
  textSize(20);
  text("Score:"+score,50,100);
  if (background1.y > 600) {
    background1.y = 400;
  }
  if (keyDown(RIGHT_ARROW)) {
    player.x = player.x + 3;
  }
  if (keyDown(LEFT_ARROW)) {
    player.x = player.x - 3;
  }
  if (keyDown("space")) {
    player.velocityY = -9;
  }
  player.velocityY = player.velocityY + 0.5;
  player.collide(ground);
  createRocks();
  createGems();

  if(rockGroup.isTouching(player)){
    player.velocityY=0;
  }
  if(gemsGroup.isTouching(player)){
    score=score+2;
    }
  if(frameCount>200){
  player.collide(gems,gemDestroy)
  }
  drawSprites();
}
function createRocks() {
  if (frameCount % 100 === 0) {
    var rock = createSprite(Math.round(random(200, 600)), -10, 40, 20);
    rock.velocityY = 4;
    rock.scale = 0.2;
    rockGroup.add(rock);
    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        rock.addImage(rockImg1)
        break;
      case 2:
        rock.addImage(rockImg2)
        break;
      case 3:
        rock.addImage(rockImg3)
        break;
      case 4:
        rock.addImage(rockImg4)
        break;
      case 5:
        rock.addImage(rockImg5)
        break;
      case 6:
        rock.addImage(rockImg6)
        break;
      default:
        break;
    }

  }
}
function createGems() {
  if (frameCount % 200 === 0) {
    gems = createSprite(Math.round(random(200, 600)), -10, 40, 20);
    gems.velocityY = 4;
    gems.scale = 0.5;
    gemsGroup.add(gems);
    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        gems.addImage(gemsImg1)
        break;
      case 2:
        gems.addImage(gemsImg2)
        break;

    }
  }
}
function gemDestroy(player,gems){
  gems.destroy()
}