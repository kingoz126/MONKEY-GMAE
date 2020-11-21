var monkey , monkey_running;
var banana ,bananaImage,  obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var obstacle;
var survivalTime=0;

function preload(){
  
    monkey_running= loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

    bananaImage = loadImage("banana.png");
    obstaceImage = loadImage("obstacle.png");
 
}


function setup() {
  
    monkey=createSprite(80,315,20,20);

    monkey.addAnimation("moving",monkey_running);

    monkey.scale=0.1;

    ground=createSprite(400,350,900,10);

    ground.velocityX=-4;

    ground.x=ground.width/2;

    console.log(ground.x);

    FoodGroup=createGroup();

    obstacleGroup=createGroup();
  
}


function draw() {
  
    background("white");

    if(ground.x<0){
    ground.x=ground.width/2;
    }

    if(keyDown("space")&&monkey.y>200){
    monkey.velocityY=-12;
    }

    monkey.velocityY=monkey.velocityY+0.8;

    monkey.collide(ground);

    stroke("white");

    textSize(20);

    fill("white");

    text("Score:"+score,500,50);

    stroke("black");

    textSize(20);

    survivalTime=Math.round(frameCount/frameRate());

    text("Survival Time:"+survivalTime,100,50);

    food();

    obstacles();

    drawSprites(); 
  
}


function food(){
  
    if(frameCount%80===0){

    banana=createSprite(400,120,20,20);

    banana.velocityX=-6;

    banana.lifetime=100;

    banana.addImage(bananaImage);

    banana.scale=0.1;

    banana.y=Math.round(random(120,200));

    FoodGroup.add(banana);

    }
}


function obstacles(){
  
    if(frameCount%300===0){

    obstacle=createSprite(400,325,20,20);

    obstacle.addImage(obstaceImage);

    obstacle.velocityX=-6;

    obstacle.lifetime=100;

    obstacle.scale=0.15;

    obstacleGroup.add(obstacle);

    } 
}
