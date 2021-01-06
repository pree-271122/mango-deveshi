class sling{
	constructor(stone,pointA)
	{
		
		var options={ 
			bodyA:stone,			 
			pointB:pointA, 
			//change the stifness
			stiffness:0.04, 
			length:1
			
		}
		
		this.bodyA=stone,
		this.pointB=pointA,
		this.launcher=Constraint.create(options),
		World.add(world,this.launcher)
	}

	attach(body){
		//change the name it has to be launcher , 
		//if we want to name it slinj change it everywhere
		this.launcher.bodyA=body;
	}

	fly()
	{
		//change the name it has to be launcher , 
		//if we want to name it slinj change it everywhere
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}