class Dustbin{
    constructor() {
      var options = {
         'isStatic':true,
      }
      this.body1 = Bodies.rectangle(900,320,20,100 ,options);
      this.width1 = 20;
      this.height1 = 100;
      
      World.add(world, this.body1);
      this.body2 = Bodies.rectangle(1100,320,20,100 ,options);
      this.width2 = 20;
      this.height2 = 100;
      
      World.add(world, this.body2);
      this.body3 = Bodies.rectangle(1000,360,200,20 ,options);
      this.width3= 200;
      this.height3 = 20;
      
      World.add(world, this.body3);
    }
    display(){
      push();
      translate(this.body3.position.x, this.body3.position.y);
      rotate(this.body3.angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width3, this.height3);
      pop();
      
      push();
      translate(this.body1.position.x, this.body1.position.y);
      rotate(this.body1.angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width1, this.height1);
      pop();

      push();
      translate(this.body2.position.x, this.body2.position.y);
      rotate(this.body2.angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width2, this.height2);
      pop();

      
    }
  };