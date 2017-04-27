
var punto = {x1:70,y1:70,x2:20,y2:10};


function setup(){

	createCanvas(500,500);

}


function draw(){

	noLoop();
	background('GREEN');
	stroke('yellow');
	DDA(punto);
	
}
