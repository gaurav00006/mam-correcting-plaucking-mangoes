class tree {
    constructor(x,y) {
        var options  = {
          
            
            'isStatic': true,
            'density': 0.25
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
    }
  
    display() {
       
        push();
       
        imageMode(CENTER);
        image(this.image, 600, 460, 500,500);
        pop();
    }
  }
