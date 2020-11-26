
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,obstacleGroup;
var FoodGroup, obstacleGroup
var score,PLAY,END,gameState=PLAY;
var ground,survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,360)
monkey = createSprite(45,315,20,20)
monkey.addAnimation("running",monkey_running)  
monkey.scale=0.1


  survivalTime=0
  ground=createSprite(400,355,900,10);
  ground.velocityX=-4
  ground.shapeColor=("brown")
  
  console.log(ground.x)
  
  obstacleGroup=new Group();
  FoodGroup=new Group();
}


function draw() {
background("lightGreen");
ground.x = ground.width/2;

  
  
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
    text("Survival Time:" + survivalTime,180,50)
  
  
  if(gameState===PLAY){
  if (keyDown("space")){
  monkey.velocityY= -13;}
    
    if(obstacleGroup.isTouching(monkey)){
    gameState=END;
    }

  
  }else if(gameState===END){
  obstacleGroup.setvelocityXEach(0)
  }

  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  spawnObstacles();
  food();
  drawSprites();
}

function spawnObstacles(){
  if(World.frameCount % 150=== 0){
    var obstacle = createSprite(600,330,10,10);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-4
    obstacle.scale=0.1;
    obstacleGroup.setLifetime=100;
    obstacleGroup.add(obstacle);
  }
}

function food(){
  if(World.frameCount % 80===0){
    var banana = createSprite(600,0,10,10)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.y=Math.round(random(150,230));
    banana.velocityX=-5
    FoodGroup.add(banana);
  }
}



