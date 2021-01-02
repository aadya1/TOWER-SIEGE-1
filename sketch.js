const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon,polygonImg;
var backgroundIMG;

function preload(){
  polygonImg=loadImage("polygon.png");
  
}
function setup() {

  var canvas = createCanvas(1000,400);
  
  engine = Engine.create();
  world = engine.world;

  box1=new Box(480,275);
  box2=new Box(510,275);
  box3=new Box(540,275);
  box4=new Box(570,275);
  box5=new Box(600,275);
  box6=new Box(450,275);
  box7=new Box(630,275);
  box8=new Box(480,235);
  box9=new Box(510,235);
  box10=new Box(540,235);
  box11=new Box(570,235);
  box12=new Box(600,235);
  box13=new Box(510,195);
  box14=new Box(530,195);
  box15=new Box(560,195);
  box16=new Box(530,155);
  box17=new Box(800,100);
  box18=new Box(800,140);
  box19=new Box(830,140);
  box20=new Box(770,140);
  box21=new Box(800,180);
  box22=new Box(830,180);
  box23=new Box(860,180);
  box24=new Box(770,180);
  box25=new Box(740,180);
  ground1=new Ground(500,390,1000,20);
  ground2=new Ground(550,305,250,20);
  ground3=new Ground(800,205,250,20);
  var options={
    density:2.5,
    restitution:0.5,
    friction:1.2,
  }
  polygon=Bodies.circle(200,200,20,options);
  World.add(world,polygon);
  chain1=new SlingShot(this.polygon,{x:200,y:200});
}
function draw() {

  background("black"); 

  Engine.update(engine);

 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  bv7.display();
  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("yellow");
  box13.display();
  box14.display();
  box15.display();
  fill("lightgreen");
  box16.display();
  fill(254,192,203);
  box17.display();
  fill(63,224,208);
  box18.display();
  b19.display();
  b20.display();
  fill(135,206,234);
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  chain1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);

  image(polygonImg,this.polygon.position.x,this.polygon.position.y,40,40);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain1.fly();
}