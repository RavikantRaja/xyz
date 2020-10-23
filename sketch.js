
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1,x;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof1 = new Roof(500,50,1000,100);
x = new Roof(500,695,1000,10);
bob1 = new Bob(300,550,100);
bob2 = new Bob(400,550,100);
bob3 = new Bob(500,550,100);
bob4 = new Bob(600,550,100);
bob5 = new Bob(700,550,100);

rope1 = new Rope(bob1.body,roof1.body,-200,50);
rope2 = new Rope(bob2.body,roof1.body,-100,50);
rope3 = new Rope(bob3.body,roof1.body,0,50);
rope4 = new Rope(bob4.body,roof1.body,100,50);
rope5 = new Rope(bob5.body,roof1.body,200,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  x.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
  
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-2000,y:0}); 
  
}

