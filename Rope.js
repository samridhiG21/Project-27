class Rope{
    constructor(bodyA, pointB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 200
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}