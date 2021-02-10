var balloon
var bg


function setup() {
  createCanvas(1000,600);

   bg = loadImage ("Background.png")

   balloon = createSprite(400, 200, 50, 50);
   balloon = loadImage ("Hot Air Balloon-02.png")
}

function draw() {
  background(bg); 
  
  if (keyDown (LEFT_ARROW)){
    balloon.x = balloon.x -10;
    }
    
    else if(keyDown(RIGHT_ARROW)){
       balloon.x = balloon.x +10;
    }
    
    else if (keyDown (UP_ARROW)){ 
      balloon.y = balloon.y -10;
    }
    
    else if(keyDown (DOWN_ARROW)){ 
      balloon.y = balloon.y +10;
    }






  drawSprites();
}