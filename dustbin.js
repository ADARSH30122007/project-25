class Dustbin{
	constructor(x,y,width,height){
	var options={
		'isStatic':true
	}
	this.bodyb=Bodies.rectangle(x,y,width,height,options);
	this.bodyb.width=width
	this.bodyb.height=height
	World.add(world,this.bodyb);
	this.image = loadImage("images/dustbingreen.png");
	}
	
	display(){
	fill("white");
	imageMode(CENTER);
	image(this.bodyb.position.x,this.bodyb.position.y,this.bodyb.width,this.bodyb.height);
	}
	}