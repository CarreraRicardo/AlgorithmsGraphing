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