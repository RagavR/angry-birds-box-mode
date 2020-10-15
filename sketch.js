const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,380,50,50);
    box2 = new Box(1000,380,50,50);
    box3 = new Box(800,330,50,50);
    box4 = new Box(1000,330,50,50);
    box5= new Box(900,260,50,50);
    ground = new Ground(600,height,1200,20)
    pig1= new Pig(900,380);
    pig2= new Pig(900,330);
    log1= new Log(900,330,300,PI/2);
    log2= new Log(900,280,300,PI/2);
    log3= new Log(830,220,170,PI/8);
    log4= new Log(980,220,170,-PI/8);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}