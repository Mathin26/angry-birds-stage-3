class Chain{
    constructor(bodyA,bodyB){
 var options={
     bodyA:bodyA,
     bodyB:bodyB,
     stiffness:1,
     length:121
 }
 this.chain=Constraint.create(options)
 World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        strokeWeight(3)
   stroke("red")
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }

}