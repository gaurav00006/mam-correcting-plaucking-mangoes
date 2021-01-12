class Boy {
    constructor(x,y) {
        var options  = {
          
            
            'isStatic': true,
            'density': 0.25
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("boy.png");
        World.add(world, this.body);
    }
  
    display() {
       
        push();
       
        imageMode(CENTER);
        image(this.image, 200, 620, 250,250);
        pop();
    }
  }
