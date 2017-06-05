var power = 1; // 0 = normal // 1 = detected // 2 = afraid
var frame = 0;
var ghost = new CDSprite();
var _film = new Image();

	function CDSprite(){
	    this.cdspritesheet = new Image();
	    this.cdspritesheet.src = 'img/cd_spritesheet.png';
	    this.width = 32;
	    // this.height = 32;
	    this.CDrender = function(x,y,power){
			//CDclearCanvas();
	    //draw sa Image
			console.log("rendeeeerrrrr x ==" + x + "    y == " + y);
		    context.drawImage(this.cdspritesheet, frame*this.width, power*this.height, this.width, this.height, x, y, this.width, this.height);
		}
	}

	function CDUpdate(x,y,power){
		// console.log("upppdatttteeee x ==" + x + "    y == " + y);
		if(frame > 3){
			frame = 0;
		}
		ghost.CDrender(x,y,power);
		frame++;
	}

	function CDclearCanvas(eatenFilm, x , y) {
		// console.log("clearrrrrrcanvas x ==" + x + "    y == " + y);
		_film.src = "img/film.png";
		// console.log("eatenFilm >> "+eatenFilm);
		if(eatenFilm){
			context.clearRect(x,y,32,32);
		}
		// else if(!eatenFilm){
			// console.log("HERE");
			context.clearRect(x,y,32,32);
			context.drawImage(_film, x, y);

		}	

	}

window.requestAnimFrame = (function(callback) {
			 return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			 function(callback) {
				 window.setTimeout(callback, 1000 / 60);
			 };
})();





function CD() {
	
	//this.ghost = new CDSprite();
	this.randomNumber;
	this.right = false;
	this.left = false;
	this.up = false;
	this.down = false;
	this.dead = false;
	this.cd_x;
	this.cd_y;
	this.power;



	this.init = function(x, y){
		
		// console.log(" x ==" + x + "    y == " + y);
		context = $('#canvas-maze')[0].getContext('2d');
		width = $('#canvas-maze').width();
		height = $('#canvas-maze').height();
		// console.log("cheeeeeeeeeeeeeeeeeeex ==" + x + "    y == " + y);
		this.cd_x = x;
		this.cd_y = y;
		// console.log("ccccccccccccckkkkk cd_x ==" + this.cd_x + "    cd_y == " + this.cd_y);
		this.up = true;
		//this.x =  this.cd_x;
		//this.y =  this.cd_y;
			// requestAnimFrame(function() {
			// 	console.log("lurking x ==" + x + "    y == " + y);
				//CDUpdate(this.cd_x, this.cd_y,this.power);
			// });
		return;
	}

	this.CDmove = function (eatenFilm){
		//while(!dead){
			// requestAnimFrame(function() {
				CDclearCanvas(eatenFilm,this.cd_x,this.cd_y);;
			// });
			// console.log("lurking x ==" + this.cd_x + "    y == " + this.cd_y);
			

			if(this.cd_x == 737 && this.cd_y == 285){
				this.cd_x = 1;
			}else if(this.cd_x == 1 && this.cd_y == 285){
				this.cd_x = 737;
			}
			x = this.cd_x;
			y = this.cd_y;

			//checking corners
			if( (x == 33 && y == 29) || (x == 545 && y == 317) || (x == 33 && y == 445) ){
				state = 0;
			}else if((x == 257 && y == 29) || (x == 353 && y == 29) || (x == 385 && y == 29) ||
					 (x == 481 && y == 29) || (x == 545 && y == 125) || (x == 609 && y == 125) ||
					 (x == 161 && y == 253) || (x == 577 && y == 253) || (x == 321 && y == 317) || 
					 (x == 417 && y == 317) || (x == 129 && y == 125) || (x == 193 && y == 125)){
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
			}else if((x == 257 && y == 189) || (x == 417 && y == 445) || (x == 257 && y == 317) ||
					 (x == 577 && y == 285) || (x == 129 && y == 317) || (x == 129 && y == 253)){
				state = 6;
			}else if((x == 353 && y == 189) || (x == 385 && y == 189) || (x == 161 && y == 317) ||
					 (x == 257 && y == 445) || (x == 481 && y == 445) || (x == 321 && y == 509) ||
					 (x == 417 && y == 509) ){
				state = 7;
			}else if((x == 481 && y == 189) || (x == 481 && y == 317) || (x == 321 && y == 445) ||
				     (x == 161 && y == 285) || (x == 609 && y == 253) || (x == 609 && y == 317)){
				state = 8;
			}else{
				state = 9;
			}

			//checking state
			if(state == 0){
				this.randomNumber = Math.floor((Math.random() * 2) + 1);
				if(this.randomNumber == 1){
					this.right 	= true;
					this.left 	= false;
					this.up 		= false;
					this.down 	= false;
				}else{
					this.right 	= false;
					this.left 	= false;
					this.up 		= false;
					this.down 	= true;
				}
			}else if(state == 1){
				this.randomNumber = Math.floor((Math.random() * 3) + 1);
				if(this.randomNumber == 1){
					this.right 	= true;
					this.left 	= false;
					this.up 		= false;
					this.down 	= false;
				}else if(this.randomNumber == 2){
					this.right 	= false;
					this.left 	= false;
					this.up 		= false;
					this.down 	= true;
				}else{
					this.right 	= false;
					this.left 	= true;
					this.up 		= false;
					this.down 	= false;
				}
			}else if(state == 2){
				this.randomNumber = Math.floor((Math.random() * 2) + 1);
				if(this.randomNumber == 1){
					this.right 	= false;
					this.left 	= true;
					this.up 		= false;
					this.down 	= false;
				}else{
					this.right 	= false;
					this.left 	= false;
					this.up 		= false;
					this.down 	= true;
				}
			}else if(state == 3){
				this.randomNumber = Math.floor((Math.random() * 2) + 1);
				if(this.randomNumber == 1){
					this.right 	= true;
					this.left 	= false;
					this.up 		= false;
					this.down 	= false;
				}else{
					this.right 	= false;
					this.left 	= false;
					this.up 		= true;
					this.down 	= false;
				}
			}else if(state == 4){
				this.randomNumber = Math.floor((Math.random() * 4) + 1);
				if(this.randomNumber == 1){
					this.right 	= false;
					this.left 	= true;
					this.up 		= false;
					this.down 	= false;
				}else if(this.randomNumber == 2){
					this.right 	= false;
					this.left 	= false;
					this.up 		= false;
					this.down 	= true;
				}else if(this.randomNumber == 3){
					this.right 	= true;
					this.left 	= false;
					this.up 		= false;
					this.down 	= false;
				}else{
					this.right 	= false;
					this.left 	= false;
					this.up 		= true;
					this.down 	= false;
				}
			}else if(state == 5){
				this.randomNumber = Math.floor((Math.random() * 2) + 1);
				if(this.randomNumber == 1){
					this.right 	= false;
					this.left 	= true;
					this.up 		= false;
					this.down 	= false;
				}else{
					this.right 	= false;
					this.left 	= false;
					this.up 		= true;
					this.down 	= false;
				}
			}else if(state == 6){
				this.randomNumber = Math.floor((Math.random() * 3) + 1);
				if(this.randomNumber == 1){
					this.right 	= true;
					this.left 	= false;
					this.up 		= false;
					this.down 	= false;
				}else if(this.randomNumber == 2){
					this.right 	= false;
					this.left 	= false;
					this.up 		= false;
					this.down 	= true;
				}else{
					this.right 	= false;
					this.left 	= false;
					this.up 		= true;
					this.down 	= false;
				}
			}else if(state == 7){
				this.randomNumber = Math.floor((Math.random() * 3) + 1);
				if(this.randomNumber == 1){
					this.right 	= true;
					this.left 	= false;
					this.up 		= false;
					this.down 	= false;
				}else if(this.randomNumber == 2){
					this.right 	= false;
					this.left 	= false;
					this.up 		= true;
					this.down 	= false;
				}else{
					this.right 	= false;
					this.left 	= true;
					this.up 		= false;
					this.down 	= false;
				}
			}else if(state == 8){
				this.randomNumber = Math.floor((Math.random() * 3) + 1);
				if(this.randomNumber == 1){
					this.right 	= false;
					this.left 	= false;
					this.up 		= true;
					this.down 	= false;
				}else if(this.randomNumber == 2){
					this.right 	= false;
					this.left 	= false;
					this.up 		= false;
					this.down 	= true;
				}else{
					this.right 	= false;
					this.left 	= true;
					this.up 		= false;
					this.down 	= false;
				}
			}
			if( (x == 353 && y == 253) || (x == 385 && y == 253) ){
				this.right 	= false;
				this.left 	= false;
				this.up 		= true;
				this.down 	= false;
			}else if( x == 321 && y == 253){
				this.right 	= true;
				this.left 	= false;
				this.up 		= false;
				this.down 	= false;
			}if( x == 417 && y == 253){
				this.right 	= false;
				this.left 	= true;
				this.up 		= false;
				this.down 	= false;
			}

			console.log("state1 == " + state);
			//looping
			if(this.right){
				this.cd_x+=32;
			}else if(this.left){
				this.cd_x-=32;
			}else if(this.up){
				this.cd_y-=32;
			}else if(this.down){
				this.cd_y+=32;
			}
			this.x = this.cd_x;
			this.y = this.cd_y;

			//if powerfilm is eaten power = 2
			this.power = 0
			CDUpdate(this.cd_x, this.cd_y,this.power);
		//}
	}
}




