
let astronaut;
let astronautTexture;


function preload(){
  stars = loadImage('Data/stars_milky.jpg');

  astronaut = loadModel('Data/astronaut.obj',true);
  astronautTexture = loadImage('Data/AUV.jpeg'); // Load the texture image
   
}
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight,WEBGL);
  canvas.position(0,0); //positioning this on the main html file
  canvas.style('split', 'right');

  angleMode(DEGREES);
  normalMaterial();
  frameRate(120);
  
}

function draw() {
  background(0);
  
  orbitControl(1.0,1.0,0.1);
  
  // create the starfield sphere
  push();
  noStroke();
  texture(stars);
  translate(0, 0, 0);
  rotateY(frameCount * -0.05);
  sphere(width*3);
  pop();

  //astronaut
  push();
  translate(width*-0.35, height*0, width*0.05);
  noStroke();
  texture(astronautTexture);
  // Extra rotation to start model in upright position
  rotateX(190); 
  rotateY(200);
  rotateZ(-10);
  
  // Rotate based on mouseX and mouseY
  let rotationX = map(mouseY, 0, height, 45, -45);
  let rotationY = map(mouseX, 0, width, -45, 45);
  rotateX(-rotationX);
  rotateY(-rotationY); 
  model(astronaut);
  
  pop();



}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //updateCanvasPosition(windowWidth*0.25,0);
}
