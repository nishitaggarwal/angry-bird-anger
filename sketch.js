const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot, box1,player;
var bg,bird;

function preload(){

bg = loadImage ("sprites/bg.png")
bird = loadImage("sprites/bird.png")
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    player = new Bird(200,200)
    ground = new Ground(600,height,1200,20)

  box1 = new Box(700,320,50,50);
    box2 = new Box(700,295,50,50);
   box3 = new Box(700,270,50,50);
   box6 = new Box(700,245,50,50);
   box5 = new Box(700,220,50,50);
   box4 = new Box(700,195,50,50);
   box7 = new Box(700,170,50,50);
   box8 = new Box(700,145,50,50); 
   box9 = new Box(700,125,50,50);


   slingShot = new SlingShot(player.body,{x:200,y:100});
}

function draw(){
    background(bg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    box6.display();
    box5.display();
    box4.display();  
    box3.display();
    box7.display();
    box8.display();
    box9.display();
    player.display();
    slingShot.display();
}
function mouseDragged(){

  Matter.Body.setPosition(player.body,{ x:mouseX,y:mouseY})
  
  
  }
  
  function mouseReleased(){
  
  slingShot.fly()
  
  }
  
  