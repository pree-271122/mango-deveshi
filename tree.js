class  Tree{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("tree.png")
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
//check this for tree
// create it like dustbin class
 /* https://github.com/rupinwhitehatjr/e4e0e6e621f97ac9c97961c3f2bdd065/blob/master/js/tree.js */