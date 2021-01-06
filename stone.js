class Stone
{
    constructor(x,y,r)
    {
        var options=
        {
            //you didn't give any options
            restitution:0,
			friction:1,
			density:1.2  
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        this.image=loadImage("stone.png");
        World.add(world,this.body);   
    }
    display()
    {
       //you didn't give push pop and translate ,
       // because we are making the stone fly
        var stonepos=this.body.position;		
        push()
        translate(stonepos.x, stonepos.y);
       
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image, 0,0,this.r, this.r)
        pop()
        
    }
}