
let astronaut;
let astronautTexture;
var sun, earth, venus, makemake, jupiter 

function preload(){
  stars = loadImage('Data/stars_milky.jpg');

  astronaut = loadModel('Data/astronaut.obj',true);
  astronautTexture = loadImage('Data/AUV.jpeg'); // Load the texture image

  sun=loadImage('Data/sun.jpg');
  earth=loadImage('Data/earth.jpeg');
  venus=loadImage('Data/venus.jpeg');
  makemake=loadImage('Data/makemake.jpeg');
  jupiter=loadImage('Data/jupiter.jpeg');
   
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
  translate(width*0.15, height*0.2, width*0.05);
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


//sun 
  push();  
    translate(width*0.85, height*-0.1, width*-0.7);
    texture(sun);
    rotateY(frameCount * 0.15);
    noStroke(0);
    sphere(width*0.25);
  pop();

//earth 
  push();  
    translate(width*0.05, height*-0.8, width*-1.8);
    texture(earth);
    rotateY(frameCount * 0.1);
    noStroke(0);
    sphere(width*0.225);
  pop();
  
  //makemake
  push();  
    translate(width*-0.35, height*0.85, width*-0.7);
    texture(makemake);
    rotateY(frameCount * 0.05);
    noStroke(0);
    sphere(width*0.35);
  pop();
  
  //jupiter 
  push();  
    translate(width*-0.65, height*-1.65, width*-1.8);
    texture(jupiter);
    rotateY(frameCount * 0.3);
    noStroke(0);
    sphere(width*0.1);
  pop();
  
  //Venus 
  push();  
    translate(width*0.75, height*-1.15, width*-1.2);
    texture(venus);
    rotateY(frameCount * 0.15);
    noStroke(0);
    sphere(width*0.125);
  pop();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //updateCanvasPosition(windowWidth*0.25,0);
}
