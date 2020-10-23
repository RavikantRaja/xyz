class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            //stiffness: 0.04,
           // length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            var offset1 = pointB.x+this.offsetX;
            var offset2 = pointB.y+this.offsetY;
            strokeWeight(4);
            stroke("white");
            line(pointA.x, pointA.y-50,offset1, offset2);
        }
}