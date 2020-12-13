const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dus1,dus2,dus3,paper,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dus1=new Dustbin(1060,370,250,20);
dus2=new Dustbin(1188,290,20,140);
dus3=new Dustbin(926,290,20,140);
paper=new Paper(100,300,30);
	
ground=new Ground(width / 2, 380, width, 30,);

	Engine.run(engine);
  
}

function draw() {      
  background("yellow");
  
  paper.display();
  ground.display();
  dus1.display();
  dus2.display();
  dus3.display();
  

textSize(35);
stroke("pink");
strokeWeight(5);
fill("white");
 text("Crumpled Balls press up arrow",600,100);
 
}
function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{ x: 185,y :-185});
    }
}





