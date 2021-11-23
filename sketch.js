var sprite;  

function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,10,10);
  sprite.shapeColor = "red";
}

function draw() 
{
  background("green");
  move();
  drawSprites();
}
function move() {
  if (keyDown("up")) {
    sprite.y -= 5;
  } if (keyDown("left")) {
    sprite.x -= 5;
   } if(keyDown("right")) {
     sprite.x += 5;
   } if(keyDown("down")) {
     sprite.y += 5;
   }
} 



