const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    var ball_options ={
        restitution : 1.5
    }
   object= Bodies.rectangle(200,380,600,10,object_options);
    World.add(world,object);

   ball = Bodies.rectangle(200,20,40,40,ball_options);
   World.add(world,ball);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    rectMode(CENTER);
    rect(object.position.x,object.position.y,600,10);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,40,40);
}
