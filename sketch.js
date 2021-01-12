
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	ground = new Ground(600,height,1200,20);



	boy1 = new Boy(700,320,70,70);



	tree1 = new tree(700,320,70,70);

	stoneth = new Stone(120,560,20);

	mango1 = new mango(700,320,70,70);
	mango2 = new mango(650,320,70,70);
	mango3 = new mango(670,270,70,70);
	mango4 = new mango(500,320,70,70);
	mango5 = new mango(550,350,70,70);
	mango6 = new mango(550,280,70,70);
	mango7 = new mango(600,300,70,70);
	mango8 = new mango(500,420,70,70);
	mango9 = new mango(450,370,70,70);
	mango10 = new mango(780,400,70,70);
	mango11 = new mango(680,400,70,70);

	rope1 = new Rope(stoneth.body,{x:130,y:560});
	





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  boy1.display();
  ground.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  
  stoneth.display();


  rope1.display();


  detectCollision(stoneth,mango1);
  detectCollision(stoneth,mango2);
  detectCollision(stoneth,mango3);
  detectCollision(stoneth,mango4);
  detectCollision(stoneth,mango5);
  detectCollision(stoneth,mango6);
  detectCollision(stoneth,mango7);
  detectCollision(stoneth,mango8);
  detectCollision(stoneth,mango9); 
  detectCollision(stoneth,mango10);
  detectCollision(stoneth,mango11); 
 
  tree1.depth = stoneth.depth;
  stoneth.depth = stoneth.depth+1;


  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneth.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.fly();
}

function detectCollision(stoneth,mango1){
	mango1BodyPosition=mango1.body.position
	stonethBodyPosition=stoneth.body.position
	
	var distance=dist(stonethBodyPosition.x,stonethBodyPosition.y,mango1BodyPosition.x,mango1BodyPosition.y)
	  if(distance<=mango1.r+stoneth.r){
		  Matter.Body.setStatic(mango1.body,false);
	  }
   }

