class Bob {
    constructor(x,y,r){
    var options={
     isStatic: false,
     restitution: 0.3,
     friction: 0.5,
     density: 1.2 
     
    }
    this.y=y
    this.x=x
    this.r=r
    this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
    
    World.add(world, this.body);
    }
    
    display(){
        var bobpos=this.body.position;		
        push()
        translate(bobpos.x, bobpos.y);
        imageMode(CENTER)
        strokeWeight(10);
        stroke("darkred");
        fill("red");
        ellipse(0,0,this.r, this.r);
        pop()
    } 
    
    }
    