var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup


function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleimg= loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 600);
  var score=0 


  survivalTime=0;
  
  
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.1
  
  ground = createSprite(300,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  FoodGroup = new Group();
  obstaclesGroup = new Group();

  score = 0;
 
  
}


function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
  if(keyDown("space")){
monkey.velocityY=-10
}
   monkey.velocityY=monkey.velocityY +0.8
  monkey.collide (ground)
  
    monkey.collide(ground);   
    bananas();
      stones();
 
  if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
       
 }
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  
    }
  


function bananas() {
 
  if (frameCount % 100 === 0) {
    banana = createSprite(700,random(250,140));
    banana.velocityX = -4;
    banana.lifetime =150;
    banana.addImage(bananaImage);
    banana.scale=0.09;
    monkey.depth=banana.depth+1
   FoodGroup.add(banana)
    
  }
}

function stones() {
  if(frameCount %180 === 0) {
    stone = createSprite(700,329);
    stone.velocityX = -4;
    stone.addImage(obstacleimg);
    stone.scale=0.2;
    stone.lifetime = 150;
    monkey.depth=stone.depth+1
    obstaclesGroup.add(stone)
       
  }
}
 



       
  