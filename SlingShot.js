class Slingshot{
constructor(bodyA,pointB){
    var options ={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
lenght:10
    }
    this.pointB = pointB
    this.Sling = Matter.Constraint.create(options);
    World.add(world,this.Sling);
}
fly(){
    this.Sling.bodyA = null
}
display(){
    if(this.Sling.bodyA){

    
    var PointA=this.Sling.bodyA.position;
    var PointB=this.pointB
    strokeWeight(4);
    line(PointA.x,PointA.y,PointB.x,PointB.y)
    }
}
}