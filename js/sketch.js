function setup() {

    createCanvas(500, 500);

}


function draw() {

    noLoop();
    background('GREEN');


    //strokeWeight(1);
    stroke('yellow');
    /*
    Direct({x1:0, y1: 0, x2: width, y2: height}); //   \ 

    stroke('blue');
    Direct({x1:width, y1: 0, x2: 0, y2: height}); // / 

    stroke('red');
    Direct({x1:0, y1: height / 2, x2: width, y2: width /2}); // --

    stroke('purple');
    Direct({x1:width/2, y1: 0, x2: width/2, y2: height}); // |

    */

    Circle({
        radius: 50,
        x: 200,
        y: 200
    });

    /*
    var cursor = {

    	punto:{
    		x:20,
    		y:200

    	},
    	angulo:0

    };

    Koch(cursor,400,1);
    */

}