var dog, sadDog, happyDog,database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj,milkImage;

function preload()
{
  sadDog = loadImage("Dog.png");
  happyDog = loadImage("happy dog.png");
  milkImage = loadImage("Milk.png");
}

function setup() {
  database = firebase.database();
 createCanvas(500,500);

 dog = createSprite(250,250,10,10);
 dog.addImage(sadDog);
 dog.scale = 0.15

 foodStock = database.ref('food');
 foodStock.on("value",readStock);
 foodStock.set(20);

 milk = createSprite(140,435,10,10);
 milk.addImage(milkImage);
 milk.scale = 0.025;

 milk1 = createSprite(210,280,10,10);
 milk1.addImage(milkImage);
 milk1.scale = 0.025;
 milk1.visible = false;

 for (var i = 5; i < 500; i=i+10) 
 {
 
 var dot = createSprite(i, 5, 3, 3);
 dot.shapeColor = "blue";
 
 }
 for (var i = 5; i < 500; i=i+10) 
 {
 
 var dot1 = createSprite(i, 495, 3, 3);
 dot1.shapeColor = "blue";
 
 }
 for (var i = 5; i < 500; i=i+10) 
 {
 
 var dot1 = createSprite(495,i, 3, 3);
 dot1.shapeColor = "blue";
 
 }
 for (var i = 5; i < 500; i=i+10) 
 {
 
 var dot1 = createSprite(5,i, 3, 3);
 dot1.shapeColor = "blue";
 
 }
 }

 function draw(){
   background("green")

   if(foodS !==0){
     if(keyWentDown(UP_ARROW)){
       writeStock(foodS);
       dog.addImage(happyDog)
       milk1.visible = true;
     }
   

   if(keyWentUp(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(sadDog);
     milk1.visible = false;
   }
 }

 if(foodS == 0){

  dog.addImage(sadDog);
  foodS = 20;
 }

drawSprites();
textSize(20);
fill("black");
text("I am your Pet Bruno🎅 Please Give Me Some Food to Eat🍟🍕")
fill("black");
text("Long Press UP ARROW Key To Feed",50,50);
fill("black");
text("Milk Bottles Remaining "+foodS,170,440);

 }
function readStock(data){
foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x = x-1;
  }

  database.ref('/').update({
    food:x
  })
}












