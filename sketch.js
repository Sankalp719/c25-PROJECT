const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var rain1, rainArray;
var rain2, rain3, rain4,rain5,rain6,rain7,rain8,rain9;
var i = 1;

function setup() {
  createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    rain1 = new Raindrop(random(10, 400), 5, 10);
    rain2 = new Raindrop(random(50, 400), 1, 8);
    rain3 = new Raindrop(random(100, 200), 2, 9);
    rain4 = new Raindrop(random(300, 20), 1, 9);
    rain5 = new Raindrop(random(260,350),4,9);
    rain6 = new Raindrop(random(320,230),5,10);
    rain7 = new Raindrop(random(150,22,),6,11);
    rain8 = new Raindrop(random(120,370),4,14);
    rain9 = new Raindrop(random(220,340),5,12);

    rainArray = [];
    
}

function draw() {
    background(255, 255, 255);
    
    if (rain1.body.position.y > 400) {
        rain1 = new Raindrop(random(0, 400), 5, 40);
    }
    if (rain3.body.position.y > 475) {
        rain3 = new Raindrop(random(0, 400), 2, 20);
    }
    if (rain2.body.position.y > 425) {
        rain2 = new Raindrop(random(0, 400), 1, 80);
    }
    if (rain4.body.position.y > 450) {
        rain4 = new Raindrop(random(0, 400), 1, 10);
    }

    if (rain5.body.position.y >320){
      rain5 = new Raindrop(random(0,400),3,10);

    }

    if(rain6.body.position.y >430){
      rain6 = new Raindrop(random(0,400),4,14);
    }

    if(rain7.body.position.y >310){
      rain7 = new Raindrop(random(0,400),5,20);
    }

    if(rain8.body.position.y >305){
      rain8 = new Raindrop(random(0,400),6,11);

    }

    if(rain9.body.position.y >315){
      rain9 = new Raindrop(random(0,400),7,15);
    }
    





    Engine.update(engine);
    
    rain1.display();
    rain2.display();
    rain3.display();
    rain4.display();
    rain5.display();
    rain6.display();
    rain7.display();
    rain8.display();
    rain9.display();

    
}