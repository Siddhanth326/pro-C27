var wall
var ball1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);``


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	wall=createSprite(390,30,350,17);
	ball1=createSprite(260,200,30,30);
	ball2=createSprite(292,200,30,30);
	ball3=createSprite(324,200,30,30);
	ball4=createSprite(356,200,30,30);
	ball5=createSprite(388,200,30,30);
	ball6=createSprite(420,200,30,30);
	ball7=createSprite(452,200,30,30);
	ball8=createSprite(484,200,30,30);
	ball9=createSprite(516,200,30,30);
  
}


function draw() {
  rectMode(CENTER);
  background(blue);
  
  drawSprites();
 
}



