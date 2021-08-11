var mouse, cat;

function preload() {
    //load the images here
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png");
    cat3 = loadAnimation("images/cat3.png");
    cat4 = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png");
    mouse3 = loadAnimation("images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");
    garden = loadImage("images/garden.png");
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(870,600);
     cat.addAnimation("catStart",cat1);
     cat.scale = 0.1;
     mouse = createSprite(200,600);
     mouse.addAnimation("mouseStart",mouse1);
     mouse.scale = 0.1;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
   
keyPressed();
if(cat.x - mouse.x - 40< (cat.width - mouse.width)/2 ){
    cat.addAnimation("catSitting",cat4);
    cat.changeAnimation("catSitting");
    mouse.addAnimation("mouseSitting", mouse2);
    mouse.changeAnimation("mouseSitting");
    cat.velocityX = 0;
}
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouse3);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
    cat.addAnimation("catRunning",cat3);
    cat.changeAnimation("catRunning");
    cat.velocityX = -3;
}
  


}
