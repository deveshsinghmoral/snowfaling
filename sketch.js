const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





function preload (){
  dgimg=loadImage("snow2.jpg")
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  
snow1=new Snow(200,200,10,10)
snow2=new Snow(205,200,10,10)
snow3=new Snow(203,300,10,10)
snow4=new Snow(209,240,10,10)
snow5=new Snow(250,210,10,10)
snow6=new Snow(300,250,10,10)

}



function draw() {
  background(dgimg);  
  Engine.update(engine);
  drawSprites();

snow1.display()
snow2.display()
snow3.display()
snow4.display()
snow5.display()
snow6.display()
}