const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine,world,grod,tre,mago1,mago2,mago3,mago4,magp5,mago6,mago7,mago8,
 mago9,mago9,mago10,mago11,mago13,mago14,mago15,mago16,mago17,boi,stone;
 // use preload to add the image for the boy
 function preload(){
   boy1=loadImage("boy.png")
 }
function setup() {
  createCanvas(1500,600);
  engine=Engine.create();
  world=engine.world;

  grod = new Ground(750,590,1500,20);
  tre = new Tree(1200,300,590,590);
  mago1 = new Mango(1200,100,70,70);
  mago2 = new Mango(1100,200,70,70)
  mago3 = new Mango(1250,150,70,70)
  mago4 = new Mango(1000,160,70,70)
  mago5 = new Mango(1100,120,70,70)
  mago6 = new Mango(1300,80,70,70)
  mago7 = new Mango(1350,150,70,70)
  mago8 = new Mango(1400,300,70,70)
  mago9 = new Mango(950,200,70,70)
  mago10 = new Mango(1040,230,70,70)
  mago16 = new Mango(1060,300,70,70)
  mago17 = new Mango(1200,270,70,70)
  mago11 = new Mango(1180,200,70,70)
  mago12 = new Mango(1300,200,70,70)
  mago13 = new Mango(1400,200,70,70)
  mago14 = new Mango(1120,110,70,70)
  mago15 = new Mango(1300,100,70,70)
  //boi = new Boy(300,500,370,370)
  stone=new Stone(200,400,50,50)
 //i have changed the positions a little
  slings =new sling (stone.body,{x:210,y:410})

}

function draw() {
  background("lightBlue"); 
  Engine.update(engine);
  
  //added the image for the boy
  image (boy1,150,330,300,350)
 grod.display();
 tre.display();
 mago1.display();
 mago2.display();
 mago3.display();
 mago4.display();
 mago5.display();
 mago6.display();
 mago7.display();
 mago8.display();
 mago9.display();
 mago10.display();
 mago16.display();
 mago17.display();
 mago11.display();
 mago12.display();
 mago13.display();
 mago14.display();
 mago15.display();
 //boi.display();
 
 stone.display();
 slings.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slings.fly();
}
// create deduct collision
//use the below for detectcollison
/*https://github.com/rupinwhitehatjr/e4e0e6e621f97ac9c97961c3f2bdd065*/