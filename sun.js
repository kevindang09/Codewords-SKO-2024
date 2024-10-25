var sun
var stars


function preload(){
    stars = loadImage('Data/stars_milky.jpg');
    sun=loadImage('Data/sun.jpg');
     
     
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
    
    orbitControl(1.0,1.0,0.01);
    
    
    
    // create the starfield sphere
    push();
    noStroke();
    texture(stars);
    translate(0, 0, 0);
    rotateY(frameCount * -0.05);
    sphere(width*3);
    pop();

    //makemake
  push();  
  translate(width*-1.5, height*-0.15, width*-0.7);
  texture(sun);
  rotateY(frameCount * 0.05);
  noStroke(0);
  sphere(width*0.75);
pop();
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //updateCanvasPosition(windowWidth*0.25,0);
  }
