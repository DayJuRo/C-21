
var a, b; 
var car, wall; 
function setup() { 
  createCanvas(1200,800); 
  a = createSprite(600, 400, 50, 80); 
  a.shapeColor = "green"; 
  a.debug = true; 
  b = createSprite(400,200,80,30); 
  b.shapeColor = "green"; 
  b.debug = true; 
  car = createSprite(100, 400, 20, 20); 
  car.shapeColor = "yellow"; 
  car.velocityX=2; 
  wall = createSprite(400, 400, 20, 60); 
  wall.shapeColor = "blue"; } 
  function draw() { 
    background(0,0,0); 
    b.x = World.mouseX; 
    b.y = World.mouseY; 
    bounceoff(car,wall) 
    drawSprites(); }