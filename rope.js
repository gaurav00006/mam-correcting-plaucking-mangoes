class Rope{
	constructor(body1,pointB, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyA:body1,
			pointB:pointB,
			pointB:{x:this.offsetX, y:this.offsetY},
			stiffness:0.04
		} 
		//console.log(options);
		
		this.bodyA=body1
		this.pointB=pointB
		
		this.rope=Constraint.create(options);
		World.add(world,this.rope);
	}


    fly(){
        this.rope.bodyA = null;
    }

	display(){
		
        
	
        if(this.rope.bodyA!=null){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
        
	  
	}

}