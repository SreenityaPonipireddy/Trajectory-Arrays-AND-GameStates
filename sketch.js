const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
 
var gameState="onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   //Numeric Data type
   var a = 17;
   console.log(a);
   console.log(typeof(a));
   
   //String Data type
   var b = "Sreenitya";
   console.log(b);
   console.log(typeof(b));
   
   //Boolean Datatype
   var c = true;
   var d = false;
   console.log(c);
   console.log(d);
   console.log(typeof(c));

   //Null
   var e = null;
   console.log(e);
   console.log(typeof(e));

   //Undefined
   var f;
   console.log(f);

   //Array Datatype
   //Array Index always starts with ZERO
   var g=[2,9,"Maths",true,90,"Coding",null]
   console.log(g[5]);
   console.log(g);
   
   //Added to the end of the array
   g.push("Fun");
   console.log(g);

   //Removes last element
   g.pop();
   console.log(g);

   //2 values=2D Array 
   //1st value: The whole array
   //2nd value: Particular element
   var h=[[11,2],[7,"hi"],[3,"hello"]];
   console.log(h[0][0]);
   console.log(h[0][1]);

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState!="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
      //  slingshot.attach(bird.body);
    }
}