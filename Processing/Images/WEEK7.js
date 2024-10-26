var pic; 

function preload(){
  pic = loadImage("data/IMG_9518.jpeg");
}

function setup() {
createCanvas(windowWidth, windowHeight);
background("black");
}


function draw() {
 //image(pic, 0, 0, 1283, 844)
 image(pic, mouseX, mouseY, 100, 90)
}
