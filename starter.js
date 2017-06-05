function Starter(){
	
}
// 	var frame = 0;
// 	var start_x = 0;
// 	var start_y = 0;
// 	var start = new Start_Sprite();


// function Start_Sprite(){
//   this.start_spritesheet = new Image();
//   this.start_spritesheet.src = 'img/starter.png';
//   this.width = 768;
//   this.height = 576;
//   this.Start_render = function(){
// 	Start_clearCanvas();
// 	this.positionx = start_x;
// 	this.positiony = start_y;
//     //draw sa Image
//     start_context.drawImage(this.start_spritesheet, frame*this.width, 0*this.height, this.width, this.height, this.positionx, this.positiony, this.width, this.height);
// 	}

// }

// function Start_Update(){
// 	if(frame > 1){
// 		frame = 0;
// 	}
// 	start.Start_render();
// 	frame++;
// }

// function Start_clearCanvas() {
// 	//start_context.clearRect(start_x,start_y,768,576);

// }

// setInterval(Start_Update, 100);



// function starter(){
// 	console.log("INSIDE STARTER" );
// 	start_context = $('#canvas-start')[0].getstart_context('2d');
// 	width = $('#canvas-start').width();
// 	height = $('#canvas-start').height();
// 	start_x = 0;
// 	start_y = 0;
// 	this.x =  start_x;
// 	this.y =  start_y;
// 		requestAnimFrame(function() {
// 			// console.log("walking");
// 				 Start_Update();
// 		});
// 	return;
// }



document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      window.location.href = 'index.html';
    }
});
