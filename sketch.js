
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(250,600,75);
	bob2 = new Bob(325,600,75);
	bob3 = new Bob(400,600,75);
	bob4 = new Bob(475,600,75);
	bob5 = new Bob(550,600,75);

	roof = new Roof(400,200,350,50);

	rope1 = new Rope(bob1.body,{x:250,y:200},0,0);
	rope2 = new Rope(bob2.body,{x:325,y:200},0,0);
	rope3 = new Rope(bob3.body,{x:400,y:200},0,0);
	rope4 = new Rope(bob4.body,{x:475,y:200},0,0);
	rope5 = new Rope(bob5.body,{x:550,y:200},0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
  keyPressed();
  
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		this.rope1.body.offsetX(this.bob1.x-30);
		this.rope1.body.offsetY(this.bob1.y-30);
	  }
}
