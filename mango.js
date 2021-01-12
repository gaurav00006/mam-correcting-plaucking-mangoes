class mango {
    constructor(x,y) {
        var options  = {
          
            
            'isStatic': true,
            'density': 0.25
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
  
    display() {
       
        push();
       
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, 50,50);
        pop();
    }
  }
