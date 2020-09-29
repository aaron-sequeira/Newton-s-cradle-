const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var Box_options = {

  isStatic: true

}

var ball_options = {

restitution: 0.8,
density:1.0

}
   // balls are made here 
   ball1 = Bodies.circle(250,300,20,ball_options);
   World.add(world,ball1);
   ball2 = Bodies.circle(300,300,20,ball_options);
   World.add(world,ball2);
   ball3 = Bodies.circle(380,300,20,ball_options);
   World.add(world,ball3);
   ball4 = Bodies.circle(480,300,20,ball_options);
   World.add(world,ball4);
   ball5 = Bodies.circle(580,300,20,ball_options);
   World.add(world,ball5)



   //box's are made here 
   box1 = Bodies.rectangle(300,200,500,20,Box_options);
   World.add(world,box1);
  
   
   //ropes are made here 
   rope1 = new Rope(ball1,{x:210,y:200})
   rope2 = new Rope(ball2,{x:250,y:200})
   rope3 = new Rope(ball3,{x:290,y:200})
   rope4 = new Rope(ball4,{x:330,y:200})
   rope5 = new Rope(ball5,{x:370,y:200})
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 //ellipse are made here 
ellipseMode(RADIUS);

ellipse(ball1.position.x, ball1.position.y, 20, 20);

ellipse(ball2.position.x,ball2.position.y,20,20);

ellipse(ball3.position.x,ball3.position.y,20,20);

ellipse(ball4.position.x,ball4.position.y,20,20);

ellipse(ball5.position.x,ball5.position.y,20,20);
//rects are made here
rectMode(CENTER)
rect(box1.position.x, box1.position.y,500,20);

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}


function mouseDragged(){
  Matter.Body.setPosition(ball1  , {x: mouseX , y: mouseY});
}
