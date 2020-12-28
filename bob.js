class Bob{
    constructor(x, y, radius) {
      var options = {
        'isStatic':false,  
        'restitution':0.3,
          'friction':0.02,
          'density':1.2
      }
      
      this.body = Matter.Bodies.circle(x, y, radius, options) ;
      this.radius = radius;

      

      
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill(235,41,139);
      ellipse(0, 0, this.radius);
      pop();
    }
  }
  