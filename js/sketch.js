
var punto = {x1:300,y1:400,x2:20,y2:100}; 


function setup(){

	createCanvas(500,500);

}


function draw(){

	noLoop();
	background('GREEN');
	stroke('yellow');
	//DDA(punto);
	//Direct(punto);
	Bresenham(punto);
	
}
