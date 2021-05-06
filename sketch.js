const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingShot;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10
var ground, ball, rope;

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1000, height, 2000, 50);
    box1 = new Box(800, 760, 80,80);
    box2 = new Box(840, 760, 80, 80);
    box3 = new Box(800, 720, 80,80);
    box4 = new Box(840, 720, 80, 80);
    box5 = new Box(800, 680, 80,80);
    box6 = new Box(840, 680, 80, 80);
    box7 = new Box(800, 640, 80,80);
    box8 = new Box(840, 640, 80, 80);
    box9 = new Box(800, 600, 80,80);
    box10 = new Box(840, 600, 80, 80);
    ball = new Ball(600,600,40)
    rope = new Rope(ball.body,{x:500,y:350})
}

function draw(){
    background(188,188,188);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

