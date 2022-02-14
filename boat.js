class Boat {
    constructor(x,y,w,h,boatPos){
        var option={
            friction:1.0,
            restitution:0.8,
            density:1

        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.width=w
        this.height=h
        this.boatPosition=boatPos
        World.add(world,this.body)
        this.image=loadImage("assets/boat.png")

}
    display(){
        var angle=this.body.angle
        var po=this.body.position
        push ()
        imageMode (CENTER)
        rotate (angle)
        translate (po.x,po.y)
        image (this.image,0,this.boatPosition,this.width,this.height)

        pop ()
    }
}