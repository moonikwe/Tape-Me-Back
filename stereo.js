	var power = 0;
	var frame = 0;
	var stereo_x = 353;
	var stereo_y = 317;
	var stereo = new Sprite();
	var standstill = [
		[33,29], [257,  29],  [353,  29],	[385,  29],		[481,  29],	[705,29],
		[33,125],	[129, 125],[193, 125],[545, 125],[609, 125], [705, 125],
		[257, 189], [257, 189], [481, 189],
		[129, 253],[193, 253], [545, 253],[609, 253],
		[161, 285],[609, 285],
		[193, 317],[257, 317],[481, 317],[545, 317],[609, 317],
		[33, 445], [129, 445],  [193, 445], [321, 445], [417, 445],[545, 445], [609, 445],[705, 445],
		[33, 509],[705, 509],
	];

function standstill_contains(x,y){
	var result = false;
	for (var i = 0; i < standstill.length; i++) {
		var position = standstill[i];
		if (position[0] == x && position[1] == y) {
			result = true;
		}
	}
	return result;
}

function Sprite(){
  this.spritesheet = new Image();
  this.spritesheet.src = 'img/stereo_spritesheet.png';
  this.width = 32;
  this.height = 32;
  this.render = function(){
	clearCanvas();
	this.positionx = stereo_x;
	this.positiony = stereo_y;
    //draw sa Image
    context.drawImage(this.spritesheet, frame*this.width, power*this.height, this.width, this.height, this.positionx, this.positiony, this.width, this.height);
	}

}

function Update(){
	if(frame > 2){
		frame = 1;
	}
	if(this.standstill_contains(stereo_x,stereo_y)){
		frame=0;
	}
	stereo.render();
	frame++;
}

function clearCanvas() {
	context.clearRect(stereo_x,stereo_y,32,32);

}

window.requestAnimFrame = (function(callback) {
			 return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			 function(callback) {
				 window.setTimeout(callback, 1000 / 60);
			 };
})();


function Stereo() {
	var eaten = [];;
	eaten.push([385,253]);
	eaten.push([353,253]);
	eaten.push([385,221]);
	eaten.push([353,221]);
	eaten.push([321,253]);
	eaten.push([417,253]);
	var score = 0;

	this.init = function (){
		context = $('#canvas-maze')[0].getContext('2d');
		width = $('#canvas-maze').width();
		height = $('#canvas-maze').height();
		stereo_x = 353;
		stereo_y = 317;
		this.x =  stereo_x;
		this.y =  stereo_y;
			requestAnimFrame(function() {
				// console.log("walking");
					 Update();
			});
		return;
	}

	this.move = function (direction, path){
		requestAnimFrame(function() {
			console.log("walking");
				 Update();
		});
		clearCanvas();
		switch (direction) {
			case 1: { // left
				if(path){
					stereo_x = 737;
					stereo_y = 285;
				}
				else
					stereo_x -= 32;
				break;
			}
			case 2: { // up
				stereo_y -= 32;
				break;
			}
			case 3: { // right
				if(path){
					stereo_x = 1;
					stereo_y = 285;
				}
				else
					stereo_x += 32;
				break;
			}
			case 4: { // down
				// if(!(stereo_x == 335 && stereo_y == 221)  || (stereo_x == 385 && stereo_y == 221 )){
					stereo_y += 32;
				// }
				break;
			}
		}
		this.x =  stereo_x;
		this.y =  stereo_y;

		// console.log("Player has eatenFilm "+this.eaten_contains(stereo_x,stereo_y));
		if(!(this.eaten_contains(stereo_x,stereo_y))){
			// console.log("pushing coordinates x "+stereo_x+" y "+stereo_y);
			score++;
			eaten.push([stereo_x,stereo_y]);
			console.log("Player has eatenFilm "+this.eaten_contains(stereo_x,stereo_y));
		}

		return;
	}



	this.eaten_contains = function (x,y) {
      var result = false;
      for (var i = 0; i < eaten.length; i++) {
        var film_eaten = eaten[i];
        if (film_eaten[0] == x && film_eaten[1] == y) {
          result = true;
        }
      }
      return result;
   }

	this.score = function(){
		 return score;
	 }

}
