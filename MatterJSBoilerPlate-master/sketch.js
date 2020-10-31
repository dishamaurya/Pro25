var ball,ground1;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//create ground
	ground1 = new Ground(400,height,800,20);

	box1 = new Box(600,685,150,10);
	box2 = new Box(530,660,10,50);
	box3 = new Box(670,660,10,50);

	ball = new Ball(200,685,20,20);

	dustbinObj = new Dustbin(560,660,80,80);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground1.display();
  dustbinObj.display();

  drawSprites();

  keyPressed();
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {

Matter.Body.applyForce(ball.body,ball.body.position,{x:200, y:-685});

	}
}



