var power = 0; // 0 = normal // 1 = detected // 2 = afraid
var frame = 0;
var cd_x = 353;
var cd_y = 317;
var ghost = new CDSprite();
var randomNumber;
var right = false;
var left = false;
var up = false;
var down = false;
var dead = false;

function CDSprite(){
  this.cdspritesheet = new Image();
  this.cdspritesheet.src = 'img/cd_spritesheet.png';
  this.width = 32;
  this.height = 32;
  this.CDrender = function(){
		clearCanvas();
		this.positionx = cd_x;
	  this.positiony = cd_y;
    //draw sa Image
    context.drawImage(this.cdspritesheet, frame*this.width, power*this.height, this.width, this.height, this.positionx, this.positiony, this.width, this.height);
	}

}

function CDUpdate(){
	if(frame > 3){
		frame = 0;
	}
	ghost.CDrender();
	frame++;
}

function CDclearCanvas() {
	// film.src = 'img/film.png';
	// console.log("eatenFilm >> "+eatenFilm);
	// if(eatenFilm){
	// 	context.clearRect(cd_x,cd_y,32,32);
	// }
	// else{
	// 	context.clearRect(cd_x,cd_y,32,32);
	// 	context.drawImage(film, cd_x, cd_y);
	// }	
	context.clearRect(stereo_x,stereo_y,32,32);

}

window.requestAnimFrame = (function(callback) {
			 return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			 function(callback) {
				 window.setTimeout(callback, 1000 / 60);
			 };
})();





function CD() {
	this.init(){
		context = $('#canvas-maze')[0].getContext('2d');
		width = $('#canvas-maze').width();
		height = $('#canvas-maze').height();
		cd_x = 353;
		cd_y = 253;
		up = true;
		this.x =  cd_x;
		this.y =  cd_y;
			requestAnimFrame(function() {
				console.log("lurking");
				CDUpdate();
			});
		return;
	}

	function CDmove(){
		while(!dead){
			requestAnimFrame(function() {
				console.log("lurking");
				CDUpdate();
			});

			//checking corners
			if( (x == 33 && y == 29) || (x == 545 && y == 317) || (x == 33 && y == 445) ){
				state = 0;
			}else if((x == 257 && y == 29) || (x == 353 && y == 29) || (x == 385 && y == 29) ||
					 (x == 481 && y == 29) || (x == 545 && y == 125) || (x == 609 && y == 125) ||
					 (x == 161 && y == 253) || (x == 577 && y == 253) || (x == 321 && y == 317) || 
					 (x == 417 && y == 317) ){
				state = 1;
			}else if((x == 705 && y == 29) || (x == 193 && y == 317) || (x == 705 && y == 445) ){
				state = 2;
			}else if((x == 33 && y == 125) || (x == 545 && y == 253) || (x == 193 && y == 445) ||
					 (x == 609 && y == 445) || (x == 33 && y == 509) ){
				state = 3;
			}else if((x == 257 && y == 125) || (x == 353 && y == 125) || (x == 385 && y == 125) ||
					 (x == 481 && y == 125) || (x == 129 && y == 285) || (x == 609 && y == 285) ){
				state = 4;
			}else if((x == 705 && y == 125) || (x == 193 && y == 253) || (x == 577 && y == 317) ||
					 (x == 129 && y == 445) || (x == 545 && y == 445) || (x == 705 && y == 509)  ){
				state = 5;
			}else if((x == 257 && y == 189) || (x == 417 && y == 445) || (x == 257 && y == 317) ){
				state = 6;
			}else if((x == 353 && y == 189) || (x == 385 && y == 189) || (x == 161 && y == 317) ||
					 (x == 257 && y == 445) || (x == 481 && y == 445) || (x == 321 && y == 509) ||
					 (x == 417 && y == 509) ){
				state = 7;
			}else if((x == 481 && y == 189) || (x == 481 && y == 317) || (x == 321 && y == 445) ){
				state = 8;
			}else{
				state = 9;
			}

			//checking state
			if(state == 0){
				randomNumber = Math.floor((Math.random() * 2) + 1);
				if(randomNumber == 1){
					right 	= true;
					left 	= false;
					up 		= false;
					down 	= false;
				}else{
					right 	= false;
					left 	= false;
					up 		= false;
					down 	= true;
				}
			}else if(state == 1){
				randomNumber = Math.floor((Math.random() * 3) + 1);
				if(randomNumber == 1){
					right 	= true;
					left 	= false;
					up 		= false;
					down 	= false;
				}else if(randomNumber == 2){
					right 	= false;
					left 	= false;
					up 		= false;
					down 	= true;
				}else{
					right 	= false;
					left 	= true;
					up 		= false;
					down 	= false;
				}
			}else if(state == 2){
				randomNumber = Math.floor((Math.random() * 2) + 1);
				if(randomNumber == 1){
					right 	= false;
					left 	= true;
					up 		= false;
					down 	= false;
				}else{
					right 	= false;
					left 	= false;
					up 		= false;
					down 	= true;
				}
			}else if(state == 3){
				randomNumber = Math.floor((Math.random() * 2) + 1);
				if(randomNumber == 1){
					right 	= true;
					left 	= false;
					up 		= false;
					down 	= false;
				}else{
					right 	= false;
					left 	= false;
					up 		= true;
					down 	= false;
				}
			}else if(state == 4){
				randomNumber = Math.floor((Math.random() * 4) + 1);
				if(randomNumber == 1){
					right 	= false;
					left 	= true;
					up 		= false;
					down 	= false;
				}else if(randomNumber == 2){
					right 	= false;
					left 	= false;
					up 		= false;
					down 	= true;
				}else if(randomNumber == 3){
					right 	= true;
					left 	= false;
					up 		= false;
					down 	= false;
				}else{
					right 	= false;
					left 	= false;
					up 		= true;
					down 	= false;
				}
			}else if(state == 5){
				randomNumber = Math.floor((Math.random() * 2) + 1);
				if(randomNumber == 1){
					right 	= false;
					left 	= true;
					up 		= false;
					down 	= false;
				}else{
					right 	= false;
					left 	= false;
					up 		= true;
					down 	= false;
				}
			}else if(state == 6){
				randomNumber = Math.floor((Math.random() * 3) + 1);
				if(randomNumber == 1){
					right 	= true;
					left 	= false;
					up 		= false;
					down 	= false;
				}else if(randomNumber == 2){
					right 	= false;
					left 	= false;
					up 		= false;
					down 	= true;
				}else{
					right 	= false;
					left 	= false;
					up 		= true;
					down 	= false;
				}
			}else if(state == 7){
				randomNumber = Math.floor((Math.random() * 3) + 1);
				if(randomNumber == 1){
					right 	= true;
					left 	= false;
					up 		= false;
					down 	= false;
				}else if(randomNumber == 2){
					right 	= false;
					left 	= false;
					up 		= true;
					down 	= false;
				}else{
					right 	= false;
					left 	= true;
					up 		= false;
					down 	= false;
				}
			}else if(state == 8){
				randomNumber = Math.floor((Math.random() * 3) + 1);
				if(randomNumber == 1){
					right 	= false;
					left 	= false;
					up 		= true;
					down 	= false;
				}else if(randomNumber == 2){
					right 	= false;
					left 	= false;
					up 		= false;
					down 	= true;
				}else{
					right 	= false;
					left 	= true;
					up 		= false;
					down 	= false;
				}
			}

			//looping
			if(right){
				cd_x+=32;
			}else if(left){
				cd_x-=32;
			}else if(up){
				cd_y-=32;
			}else if(down){
				cd_y+=32;
			}

		}
	}
}




