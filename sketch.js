const Engine = Matter.Engine
 const World= Matter.World
 const Bodies = Matter.Bodies

 // ground
 var ground

 //division
 var division,division2,division3,division4,division5,division6,division7
 
 //plinko
 var plinko

var particle

var particles=[];
function setup() {
  createCanvas(600,700);
  engine = Engine.create()
    world = engine.world;
    
    var Divisions=[];
   // var plinkos=[];
   //ground
  ground = new Ground(600,670,1300,20);

  //division
  for(var k = 0; k < Divisions.length; k++){
    divisions[k].display()
  }
  //plinko
  plinko = new Plinko(300,100,10,10);
  for(var j = 0; j <  particles.length; j++ ){
    particles[j][0],particles[j][1]
    
  }
}

function draw() {
  background(155); 
  Engine.update(engine); 
 
  // ground
  fill("green")
  ground.display();
  //division
  
//fill("black")
 
  //plinko
  plinko.display()
  for(var j = 0; j <  particles.length; j++ ){
    particles[j].display();
  }
}