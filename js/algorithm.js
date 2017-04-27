function DDA (punto){

	var pendiente = (punto.y2 - punto.y1) / (punto.x2 - punto.x1);
	var right = false;

	if(punto.x1 > punto.x2 || punto.y1 > punto.y2){

		pendiente *= -1;

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

			for(var i = punto.x1; i > punto.x2; i--){

				if(pk > 0){

					point(x--,y--);

					pk = pk - resta;

				}
				else if(pk < 0){

					point(x--,y);

					pk = pk - dosDeltaY;

				}

			}

		}

	
	}
}