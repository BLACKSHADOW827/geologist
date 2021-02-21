class Rubber {
    
  constructor(x, y,radius) {
    var options = {
        'restitution':0.2,
        'friction':5,
        'density':3
    }
this.body=Bodies.circle(x,y,25,options) 
World.add(world,this.body) 

}
display(){
  var pos=this.body.position
  var angle = this.body.angle;
  push();
  translate(pos.x,pos.y );
  rotate(angle);
  ellipseMode(RADIUS);
  fill("red");
  circle(0, 0,35);
  pop();

}
}