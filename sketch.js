const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var b1,b2,b3,b4,b5,l1,l2,l3,l4,p1,p2,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    b1 = new Box(700,320,70,70);
    b2 = new Box(920,320,70,70);
    
    p1=new Pig(810,350);
    l1=new Log(810,260,300,PI/2);

    b3 = new Box(700,240,70,70);
    b4 = new Box(920,240,70,70);

    p2=new Pig(810,220);
    l2=new Log(810,180,300,PI/2);

    b5 = new Box(810,160,70,70);

    l3=new Log(760,120,150,PI/7);
    l4=new Log(870,120,150,-PI/7);

bird1=new Bird(100,100);


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(b2.body.position.x);
    console.log(b2.body.position.y);
    console.log(b2.body.angle);
    b1.display();
    b2.display();
    ground.display();
    p1.display();
    l1.display();
    p2.display();
    l2.display();
    b3.display();
    b4.display();
    b5.display();
    l3.display();
    l4.display();
    bird1.display();
}