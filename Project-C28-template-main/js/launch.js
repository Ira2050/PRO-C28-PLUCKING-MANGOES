class launcher{
        constructor(body, anchor){
            var options = {
                bodyA: body,
                pointB: anchor,
                stiffness: 0.004,
                length: 1
            }
            this.bodyA=body; 
            this.pointB=anchor;
            //this.sling1 = loadImage('sprites/sling1.png');
            //this.sling2 = loadImage('sprites/sling2.png');
            //this.sling3 = loadImage('sprites/sling3.png');
            //this.pointB = pointB
            this.launcher = Constraint.create(options);
            World.add(world, this.launcher);
        }
    
        attach(body){
            this.launcher.bodyA = body;
        }
    
        fly(){
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