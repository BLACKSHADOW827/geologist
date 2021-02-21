const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,300,60,75);
    hammer = new Hammer(700,100,50,50);
	box3 = new Rubber(600,150,25);
	sand1 = new sand(600,150,10);
	sand2 = new sand(650,150,10);
	sand4 = new sand(660,150,10);
	sand3 = new sand(607,150,10);
	sand5 = new sand(608,150,10);
	sand6 = new sand(609,150,10);
	iron1 = new Iron(609,150,50,50);
	
    ground = new Ground(700,650,1400,20)
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    console.log(hammer.body.position.x);
    console.log(hammer.body.position.y);
    console.log(hammer.body.angle);
    box1.display();
    hammer.display();
	box3.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	iron1.display();
    ground.display();
}