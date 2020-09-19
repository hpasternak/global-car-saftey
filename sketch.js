var car, wall, speed, weight, height = 400;

function setup() {
  createCanvas(1600, 400);
  car = createSprite(50, 200, 50, 20);
  car.shapeColor = "white";
  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor = "gray";
  speed = Math.random(55, 90);
  weight = Math.random(400, 1500); 
  car.velocityX = speed; 
  //gave car a static value to make it go faster for development
  //car.velocityX = 5;
}

function draw() {
  background(0,0,0);    
  if(wall.x-car.x < ((car.width + wall.width)/2)) {
    if(isTouching(car, wall)) {      
      car.velocityX = 0;
    }    
    
    var deformation= (0.5 * weight * speed * speed)/22509;
    // manipulating the deformation formula to see various colors of the car
    // var deformation= (0.5 * weight * speed * speed);
    if(deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }
    if(deformation < 180 && deformation > 100) {
      car.shapeColor = color (230,230,0);
    }
    if(deformation < 100) {
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
 }