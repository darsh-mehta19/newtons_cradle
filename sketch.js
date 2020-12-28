
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter ;
function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=70;
	//Create the Bodies Here.
	roof1 = new Roof(600,17,1200,30);
	bob1 = new Bob(300,400,35);
	bob2 = new Bob(375,400,35);
	bob3 = new Bob(450,400,35);
	bob4 = new Bob(525,400,35);
	bob5 = new Bob(600,400,35);
	rope1 = new Rope(bob1.body,roof1.body,-bobDiameter*2.75,0);
	rope2 = new Rope(bob2.body,roof1.body,-bobDiameter*1.75,0)
	rope3 = new Rope(bob3.body,roof1.body,-bobDiameter*0.75,0)
	rope4 = new Rope(bob4.body,roof1.body,bobDiameter*0.25,0)
	rope5 = new Rope(bob5.body,roof1.body,bobDiameter*1.25,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  
  roof1.display();
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

  

  if(keyPressed()){
	  bob1.velocityX=-0.5;
	  bob1.velocityY=-0.5;
	}
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){

	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10.5,y:-10});


  if(keyCode===null){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:0});

  }
}
}

