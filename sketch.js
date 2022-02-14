//exaple of she is happy today, also practicing array;
//var frag=[1,2,3,4,5]
//frag.push('you')
//console.log(frag[5])
//console.log(frag.length)//it is use for counting how many index is in an array.
//var lier=[[1,2],[3,4],[5,6],[7,8]]
//console.log(lier[0][0],[0][1])
//[1][0],[1][1]
//[2][0],[2][1]
//[3][0],[3][1]

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var waterinblack,milk,angle
var balls=[]
var boats=[]

function preload() {
 waterinblack=loadImage("assets/background.gif")
 milk=loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  angleMode(DEGREES)
  a=20
  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:1
  }
  dickenson=Bodies.rectangle(0,590,1200,10,option) 
  World.add(world, dickenson)
  milkgood=Bodies.rectangle(160,350,160,310,option)
  World.add(world,milkgood)
  //creating the cannon
  cannon=new Cannon (180,110,130,100,a)

}

function draw() {
  background(189);
  image(waterinblack,0,0,1200,600)
  push ()
  imageMode (CENTER)
  image(milk,milkgood.position.x,milkgood.position.y,160,310)
  pop ()
  Engine.update(engine);
  fill('black')
  rect(dickenson.position.x,dickenson.position.y,1200,10)
  cannon.display()
  for (i=0;i<balls.length;i++){
    showCannonBalls(balls[i],i)
  }
  showBoats()
}
function showCannonBalls(ball,i){
  if(ball){
    ball.display()
  }
}
function showBoats(){
  if(boats.length>0){
    if(boats[boats.length-1]==undefined || boats[boats.length-1].body.position.x<width-300){
      var crikets=[-20,-40,-60,-80]
      var baseball=random(crikets)
      boat=new Boat(width-100,height-60,150,150,baseball)
   boats.push(boat)
    }
    //command display boat one by one use for loop
    for(var i=0;i<boats.length;i=i+1){
      if(boats[i]){
        Matter.Body.setVelocity(boats[i].body,{x:-1,y:0})
        boats[i].display()
      }
    }
  }
  else{
    boat=new Boat(width-100,height-60,150,150,-60)
    boats.push(boat)
  }
}
function keyPressed(){
  if(keyCode==DOWN_ARROW){
    //creating CAnnoball
    cannonBall=new CannonBall(cannon.x,cannon.y)
    balls.push(cannonBall)
    
  }
}
function keyReleased(){
  if(keyCode==DOWN_ARROW){
    balls[balls.length-1].shot()
  }
}
