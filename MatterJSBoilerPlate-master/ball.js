class Ball{
    constructor(x,y){
        var options ={
            'isStatic': true,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2,
          
        }
        this.body = Bodies.circle(x,y,5,options);
        this.r = 5;
        this.image = loadImage("sprites/paper.png");

        World.add(world,this.body);
    }
    display() {
       push();
       var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();

    }
};

