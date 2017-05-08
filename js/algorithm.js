function DDA (punto){

	var pendiente = (punto.y2 - punto.y1) / (punto.x2 - punto.x1);
	var right = false;

	if(punto.x1 > punto.x2 || punto.y1 > punto.y2){

		//pendiente *= -1;

		if(pendiente === 0){

			right = true;
		}

	}
	
	nextPoint(pendiente);

	
	function nextPoint(pendiente){

		if(pendiente ===1 || pendiente === 0 && right === false){

			
			var y = punto.y1;
			var x = punto.x1;

			for(var i = punto.x1; i < punto.x2 ; i++){

				point(x,y);
				x++;
				y = Math.round(y + pendiente);


			}
		}
		else if( pendiente > 1){

			var y = punto.y1;
			var x = punto.x1;

			for(var i = punto.y1; i < punto.y2; i++){

				point(x,y);
				y++;
				x = Math.round(x + (1/pendiente));


			}


		}
		else if(pendiente === -1 || right === true){

			
			var y = punto.y1;
			var x = punto.x1;

			for(var i = punto.x1; i > punto.x2 ; i--){

				point(x,y);
				x--;
				y = Math.round(y - pendiente);


			}


		}
		else if(pendiente < -1){

			var y = punto.y1;
			var x = punto.x1;

			for(var i = punto.y1; i > punto.y2; i--){

				point(x,y);
				y--;
				x = Math.round(x - (1/pendiente));


			}


		}


	}


}

function Direct(punto){

	var pendiente = (punto.y2 - punto.y1) / (punto.x2 - punto.x1);

	var b = punto.y1 - (pendiente * punto.x1);

	var x = punto.x1;
	var y = punto.y1;

	if(punto.x1 < punto.x2){

		for(var i = punto.x1; i < punto.x2; i++){

			point(x,y);
			x++;
			y = Math.round(pendiente * x + b);
		}

	}
	else if(punto.x1 > punto.x2){

		for(var i = punto.x1; i > punto.x2; i--){

			point(x,y);
			x--;
			y = Math.round(pendiente * x + b);
		}


	}
	else if(punto.x1  === punto.x2){

		pendiente = (punto.x2 - punto.x1) / (punto.y2 - punto.y1);

		b = punto.x1 - (pendiente * punto.y1);

		if(punto.y1 < punto.y2){

			for(var i = punto.y1; i < punto.y2; i++){

				point(x,y);
				y++;
				x = Math.round(pendiente * y + b);
			}

		}
		else{

			for(var i = punto.y1; i > punto.y2; i--){

				point(x,y);
				y--;
				x = Math.round(pendiente * y + b);
			}


		}

		

	}

	

}

function Bresenham(punto){

	var deltaX = punto.x2 - punto.x1;
	var deltaY = punto.y2 - punto.y1;
	var dosDeltaX = deltaX * 2;
	var dosDeltaY = deltaY * 2;
	var resta = dosDeltaY - dosDeltaX;

	var pk = dosDeltaY - deltaX;

	var x = punto.x1;
	var y = punto.y1;

	nextPoint();

	function nextPoint(){

		if(punto.x1 < punto.x2){

			

			for(var i = punto.x1; i < punto.x2; i++){

				if(pk > 0){

					point(x++,y++);

					pk = pk + resta;

				}
				else if(pk < 0){

					point(x++,y);

					pk = pk + dosDeltaY;

				}

			}

		}
		else if(punto.x1 > punto.x2){

			 resta = dosDeltaX - dosDeltaY;

			 pk = dosDeltaX - deltaY;
			 
			for(var i = punto.x1; i > punto.x2; i--){

				if(pk > 0){

					point(x--,y++);

					pk = pk - resta;
					 

				}
				else if(pk < 0){

					point(x--,y);

					pk = pk - dosDeltaX;

					
				
				}

			}

		}
		else if(punto.x1 === punto.x2){

				for(var i = punto.y1; i < punto.y2; i++){

					if(pk > 0){

						point(x,y++);

						pk = pk + resta;

					}
					else if(pk < 0){

						point(x++,y);

						pk = pk + dosDeltaY;

					}

				}


		}

	}
}

function Circle (circle){

	var radius = circle.radius;
	var x = 0;
	var y = radius;

	var p = 5/4 - radius; 

	nextPoint();

	function nextPoint(){
		
		point(x + circle.x,y + circle.y);
		
		
		//console.log((x) + "," + (y));
	
		
		while(x < y){

			x++;
			
			if(p < 0){

				p = p + (2 * x) + 1;
				
			}
			else{

				
				y--;
				p = p + 2*(x - y) + 1;
				

			}

			point(circle.x + x, circle.y + y);
			point(circle.x + x, circle.y - y);
			point(circle.x - x, circle.y + y);
			point(circle.x - x, circle.y - y);
			point(circle.x + y, circle.y + x);
			point(circle.x + y, circle.y - x);
			point(circle.x - y, circle.y + x);
			point(circle.x - y, circle.y - x);

			//console.log((x + circle.x) + "," + (y + circle.y));	
			
		}

		
		
	}

}


function Koch(cursor,dist,N){

	if(N === 0){

		console.log(cursor.punto);

		cursor.punto = kochNext(cursor,dist);

		console.log(cursor.punto);
	}
	else{

		Koch(cursor,dist / 3, N - 1);

		cursor.angulo = cursor.angulo + Math.PI / 3;

		Koch(cursor,dist /3 ,N - 1);

		cursor.angulo = cursor.angulo - Math.PI * 2 / 3;

		Koch(cursor,dist /3, N - 1);

		cursor.angulo = cursor.angulo + Math.PI / 3;

		Koch(cursor,dist / 3,N - 1);

	}

}

function kochNext(cursor,dist){

	var p = {};

	p.x = cursor.punto.x + dist * Math.cos(cursor.angulo);
	p.y = cursor.punto.y + dist * Math.sin(cursor.angulo);



	line(cursor.punto.x,cursor.punto.y,p.x,p.y);

	return p;


}