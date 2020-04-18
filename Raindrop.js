class Raindrop {
    constructor(x,y) {
        
        this.body = Bodies.rectangle(x, y, 10, 30);

        this.h = 30;
        this.w = 10;
        
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
         translate(pos.x, pos.y);

        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, 10, 30);

        pop();
    }   
};



