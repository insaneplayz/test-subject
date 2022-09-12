class bird{
  constructor(x,y,w,h){
     this.x = x
     this.y = y
     this.w = w
     this.h = h
     var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);

      this.width = width;
      this.height = height;
      this.image = loadImage("bird.png");
  World.add(world, bird)
 
  }
      
   display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
        
     
  }
}