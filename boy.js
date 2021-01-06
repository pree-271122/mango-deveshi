
//NO NEED TO CREATE A CLASS FOR BOY JUST USE PRELOAD
//CHECK SKETCH.JS


class  Boy{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("boy.png")
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("lawnGreen");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };