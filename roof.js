class roof{
    constructor(x,y,width,height){
        var option = {
          isStatic = true
        };
        this.x = x;
        this.y = y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("grey");
      rect(0,0,this.width,this.height);
      pop();
    }
};