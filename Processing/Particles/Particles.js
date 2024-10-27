let imgUrl="Data/Space.jpg"
let img;
const PARTICLE_SIZE=5;
const RESOLUTION = 4;
const MAX_FORCE = 5;
const MIN_FORCE = 0;
let particles=[];

function preload(){
  img=loadImage(imgUrl)
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //p=new Particle( 70,70,255)
  spawnParticles();
}

function draw() {
  background(255);
  //image(img,width,height);
  particles.forEach((particle)=>{
    particle.update();
    particle.draw();
  }) 
}

function spawnParticles(){
  for(let i=0;i<width;i+=RESOLUTION){
    for(let j=0;j<height;j+=RESOLUTION){
      let x=i/width*img.width;
      let y=j/height*img.height;
      const color =img.get(x,y);
      particles.push(new Particle(i,j,color));
    }
  }
  
}

class Particle{
  constructor(x,y,color){
    this.x=x;
    this.y=y;
    this.color=color;
    this.targetX=x;
    this.targetY=y;
  }
  
  update(){
    let mouseVector = createVector(mouseX,mouseY);
    let currentVector = createVector(this.x,this.y);
    let targetVector = createVector(this.targetX,this.targetY);
    let fromMouseToParticle=p5.Vector.sub(currentVector,mouseVector);
    let distanceToMouse = fromMouseToParticle.mag();
    
    let fromParticleToTarget=p5.Vector.sub(targetVector,currentVector);
    let distanceToTarget = fromParticleToTarget.mag();
    
    let totalForce = createVector(0,0);
    
    if (distanceToMouse < 100){
      let respulsionForce = map(distanceToMouse,0,100,MAX_FORCE,MIN_FORCE);
      fromMouseToParticle.setMag(respulsionForce);
      totalForce.add(fromMouseToParticle);
    }
    
    if (distanceToMouse > 100){
      let attractionForce = map(distanceToTarget,0,100,MIN_FORCE,MAX_FORCE);
      fromParticleToTarget.setMag(attractionForce);
      totalForce.add(fromParticleToTarget);
    }
    this.x+=totalForce.x;
    this.y+=totalForce.y;
  }
  
  draw(){
    fill(this.color)
    noStroke();
    ellipse(this.x,this.y,PARTICLE_SIZE)
  }
}
