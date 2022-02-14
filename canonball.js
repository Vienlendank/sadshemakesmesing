class CannonBall {
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.radius=30
        this.body=Bodies.circle(x,y,this.radius,option)
        World.add(world,this.body)
        this.cannonballimage=loadImage('assets/cannonball.png')
        this.trajectory=[]


    }
    shot(){
        var x=cannon.a-28 
        x=x*(3.1415/180)
        var velocity=p5.Vector.fromAngle(x)
        velocity.mult(0.5)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.1415),y:velocity.y*(180/3.1415)})
    }
    display(){
        var po=this.body.position
        push ()
        imageMode (CENTER)
        image (this.cannonballimage,po.x,po.y,this.radius,this.radius)

        pop ()
        //getting all the position of the cannon ball and storing them in an empty array
        
        if(this.body.velocity.x>0){
            var position=[po.x,po.y]
            this.trajectory.push(position)

        }
        //extracting individual x coordinate of every positions of the cannon balls one by one using a for loop and setting an image of all those positions
        for(var i=0;i<this.trajectory.length;i++){
            image(this.cannonballimage,this.trajectory[i][0],this.trajectory[i][1],5,5)
        }


    }
}
