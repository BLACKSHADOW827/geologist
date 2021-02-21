class sand{
    constructor(x, y,radius) {
      var options = {
          'restitution':0.1,
          'friction':20,
          'density':5
      }
  this.body=Bodies.circle(x,y,10,options) 
  World.add(world,this.body) 

}
display(){
    var pos=this.body.position
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y );
    rotate(angle);
    ellipseMode(RADIUS);
    fill("green");
    circle(0, 0,10);
    pop();
  
}
}