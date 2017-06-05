var power2 = 0; // 0 = normal // 1 = detected // 2 = afraid
var frame2 = 0;
var cd2_x;
var cd2_y;
var ghost2 = new CD2Sprite();
var randomNumber2;
var right2 = false;
var left2 = false;
var up2 = false;
var down2 = false;
//var dead = false;
var _film2 = new Image();

function CD2Sprite(){
  this.cd2spritesheet = new Image();
  this.cd2spritesheet.src = 'img/cd_spritesheet.png';
  this.width2 = 32;
  this.height2 = 32;
  this.CD2render = function(){
		CD2clearCanvas();
		this.positionx2 = cd2_x; //cd2_x
	  this.positiony2 = cd2_y; //cd2_y
    //draw sa Image
    context.drawImage(this.cd2spritesheet, frame2*this.width2, power2*this.height2, this.width2, this.height2, this.positionx2, this.positiony2, this.width2, this.height2);
	}

}

function CD2update(){
	if(frame2 > 3){
		frame2 = 0;
	}
	ghost2.CD2render();
	frame2++;
}

function CD2clearCanvas(eatenFilm2) {
	_film2.src = "img/film.png";
	// console.log("eatenFilm >> "+eatenFilm);
	if(eatenFilm2){
		context.clearRect(cd2_x,cd2_y,32,32);
	}
	else if(!eatenFilm2){
		// console.log("HERE");
		context.clearRect(cd2_x,cd2_y,32,32);
		context.drawImage(_film2, cd2_x, cd2_y);

	}	

}

window.requestAnimFrame = (function(callback2) {
			 return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			 function(callback2) {
				 window.setTimeout(callback2, 1000 / 60);
			 };
})();





function CD2() {
	this.init2 = function(xx, yy){
		console.log(" x ==" + xx + "    y == " + yy);
		context2 = $('#canvas-maze')[0].getContext('2d');
		width2 = $('#canvas-maze').width();
		height2 = $('#canvas-maze').height();
		cd2_x = xx;
		cd2_y = yy;
		//up2 = true;
		this.x =  cd2_x;
		this.y =  cd2_y;
			requestAnimFrame(function() {
				console.log("lurking x ==" + xx + "    y == " + yy);
				CD2update();
			});
		return;
	}

	this.CD2move = function (eatenFilm2){
		//while(!dead){
			requestAnimFrame(function() {
				console.log("lurking");
				CD2update();
			});
			CD2clearCanvas(eatenFilm2);
			if(cd2_x == 737 && cd2_y == 285){
				cd2_x = 1;
			}else if(cd2_x == 1 && cd2_y == 285){
				cd2_x = 737;
			}
			x2 = cd2_x;
			y2 = cd2_y;

			//checking corners
			if( (x2 == 33 && y2 == 29) || (x2 == 545 && y2 == 317) || (x2 == 33 && y2 == 445) ){
				state2 = 0;
			}else if((x2 == 257 && y2 == 29) || (x2 == 353 && y2 == 29) || (x2 == 385 && y2 == 29) ||
					 (x2 == 481 && y2 == 29) || (x2 == 545 && y2 == 125) || (x2 == 609 && y2 == 125) ||
					 (x2 == 161 && y2 == 253) || (x2 == 577 && y2 == 253) || (x2 == 321 && y2 == 317) || 
					 (x2 == 417 && y2 == 317) || (x2 == 129 && y2 == 125) || (x2 == 193 && y2 == 125)){
				state2 = 1;
			}else if((x2 == 705 && y2 == 29) || (x2 == 193 && y2 == 317) || (x2 == 705 && y2 == 445) ){
				state2 = 2;
			}else if((x2 == 33 && y2 == 125) || (x2 == 545 && y2 == 253) || (x2 == 193 && y2 == 445) ||
					 (x2 == 609 && y2 == 445) || (x2 == 33 && y2 == 509) ){
				state2 = 3;
			}else if((x2 == 257 && y2 == 125) || (x2 == 353 && y2 == 125) || (x2 == 385 && y2 == 125) ||
					 (x2 == 481 && y2 == 125) || (x2 == 129 && y2 == 285) || (x2 == 609 && y2 == 285) ){
				state2 = 4;
			}else if((x2 == 705 && y2 == 125) || (x2 == 193 && y2 == 253) || (x2 == 577 && y2 == 317) ||
					 (x2 == 129 && y2 == 445) || (x2 == 545 && y2 == 445) || (x2 == 705 && y2 == 509)  ){
				state2 = 5;
			}else if((x2 == 257 && y2 == 189) || (x2 == 417 && y2 == 445) || (x2 == 257 && y2 == 317) ||
					 (x2 == 577 && y2 == 285) || (x2 == 129 && y2 == 317) || (x2 == 129 && y2 == 253)){
				state2 = 6;
			}else if((x2 == 353 && y2 == 189) || (x2 == 385 && y2 == 189) || (x2 == 161 && y2 == 317) ||
					 (x2 == 257 && y2 == 445) || (x2 == 481 && y2 == 445) || (x2 == 321 && y2 == 509) ||
					 (x2 == 417 && y2 == 509) ){
				state2 = 7;
			}else if((x2 == 481 && y2 == 189) || (x2 == 481 && y2 == 317) || (x2 == 321 && y2 == 445) ||
				     (x2 == 161 && y2 == 285) || (x2 == 609 && y2 == 253) || (x2 == 609 && y2 == 317)){
				state2 = 8;
			}else{
				state2 = 9;
			}

			//checking state2
			if(state2 == 0){
				randomNumber2= Math.floor((Math.random() * 2) + 1);
				if(randomNumber2== 1){
					right2 	= true;
					left2 	= false;
					up2 	= false;
					down2 	= false;
				}else{
					right2 	= false;
					left2 	= false;
					up2 	= false;
					down2 	= true;
				}
			}else if(state2 == 1){
				randomNumber2= Math.floor((Math.random() * 3) + 1);
				if(randomNumber2== 1){
					right2 	= true;
					left2 	= false;
					up2 	= false;
					down2 	= false;
				}else if(randomNumber2== 2){
					right2 	= false;
					left2 	= false;
					up2 	= false;
					down2 	= true;
				}else{
					right2 	= false;
					left2 	= true;
					up2 	= false;
					down2 	= false;
				}
			}else if(state2 == 2){
				randomNumber2= Math.floor((Math.random() * 2) + 1);
				if(randomNumber2== 1){
					right2 	= false;
					left2 	= true;
					up2 	= false;
					down2 	= false;
				}else{
					right2 	= false;
					left2 	= false;
					up2 		= false;
					down2 	= true;
				}
			}else if(state2 == 3){
				randomNumber2= Math.floor((Math.random() * 2) + 1);
				if(randomNumber2== 1){
					right2 	= true;
					left2 	= false;
					up2 	= false;
					down2 	= false;
				}else{
					right2 	= false;
					left2 	= false;
					up2 		= true;
					down2 	= false;
				}
			}else if(state2 == 4){
				randomNumber2= Math.floor((Math.random() * 4) + 1);
				if(randomNumber2== 1){
					right2 	= false;
					left2 	= true;
					up2 		= false;
					down2 	= false;
				}else if(randomNumber2== 2){
					right2 	= false;
					left2 	= false;
					up2 	= false;
					down2 	= true;
				}else if(randomNumber2== 3){
					right2 	= true;
					left2 	= false;
					up2 	= false;
					down2 	= false;
				}else{
					right2 	= false;
					left2 	= false;
					up2 	= true;
					down2 	= false;
				}
			}else if(state2 == 5){
				randomNumber2= Math.floor((Math.random() * 2) + 1);
				if(randomNumber2== 1){
					right2 	= false;
					left2 	= true;
					up2 	= false;
					down2 	= false;
				}else{
					right2 	= false;
					left2 	= false;
					up2 	= true;
					down2 	= false;
				}
			}else if(state2 == 6){
				randomNumber2= Math.floor((Math.random() * 3) + 1);
				if(randomNumber2== 1){
					right2 	= true;
					left2 	= false;
					up2 	= false;
					down2 	= false;
				}else if(randomNumber2== 2){
					right2 	= false;
					left2 	= false;
					up2 	= false;
					down2 	= true;
				}else{
					right2 	= false;
					left2 	= false;
					up2 	= true;
					down2 	= false;
				}
			}else if(state2 == 7){
				randomNumber2= Math.floor((Math.random() * 3) + 1);
				if(randomNumber2== 1){
					right2 	= true;
					left2 	= false;
					up2 	= false;
					down2 	= false;
				}else if(randomNumber2== 2){
					right2 	= false;
					left2 	= false;
					up2 	= true;
					down2 	= false;
				}else{
					right2 	= false;
					left2 	= true;
					up2 	= false;
					down2 	= false;
				}
			}else if(state2 == 8){
				randomNumber2= Math.floor((Math.random() * 3) + 1);
				if(randomNumber2== 1){
					right2 	= false;
					left2 	= false;
					up2 	= true;
					down2 	= false;
				}else if(randomNumber2== 2){
					right2 	= false;
					left2 	= false;
					up2 	= false;
					down2 	= true;
				}else{
					right2 	= false;
					left2 	= true;
					up2 	= false;
					down2 	= false;
				}
			}
			if( (x2 == 353 && y2 == 253) || (x2 == 385 && y2 == 253) ){
				right2 	= false;
				left2 	= false;
				up2 		= true;
				down2 	= false;
			}else if( x2 == 321 && y2 == 253){
				right2 	= true;
				left2 	= false;
				up2 		= false;
				down2 	= false;
			}if( x2 == 417 && y2 == 253){
				right2 	= false;
				left2 	= true;
				up2 		= false;
				down2 	= false;
			}

			console.log("state == " + state2);

			//looping
			if(right2){
				cd2_x+=32;
			}else if(left2){
				cd2_x-=32;
			}else if(up2){
				cd2_y-=32;
			}else if(down2){
				cd2_y+=32;
			}
			this.x = cd2_x;
			this.y = cd2_y;
		//}
	}
}




