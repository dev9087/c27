const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
function setup() {
    createCanvas(400, 400);
    engine=Engine.create();
    world = engine.world ;  
    pen = new Particle(200,200,40,50);
    rope = new Rope(pen.body,{x:200,y:50});
}
 
function draw() {
    background("red");
    Engine.update(engine);
    pen.display();
    rope.display();
}
 
function mouseDragged(){
    Matter.Body.setPosition(pen.body , { x: mouseX , y: mouseY});
}


