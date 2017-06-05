var maze = new Maze();
var player = new Stereo();
var cd1 = new CD();
var cd2 = new CD();
var cd3 = new CD();
var cd4 = new CD();
var film = new Film();
var curr;
var count = 0;
var i, j, m, n;
var moveUp=false;
var moveDown=false;
var moveLeft=false;
var moveRight=false;
var count = 8;
var step = 0;
var init = 1;
var score = 0;
var cds = [];

//setInterval(checkEnd, 1);
setInterval(movement, 100);
setInterval(CDmove1, 150);
var canvas = document.getElementById("myCanvas");
var context;

function initGame() {
	console.log("No. of films >> "+film.map.length);
	player.init();
	cd1.init(353, 253);
	cd2.init(321, 253);
	cd3.init(385, 253);
	cd4.init(417, 253);
	film.init();
}

function initScore(){
	context = $('#canvas-maze')[0].getContext('2d');
	width = $('#canvas-maze').width();
	height = $('#canvas-maze').height();
	drawScore();
	return;
}


function drawScore() {
		context.clearRect(680, 5, 680, 20);
    context.font = "16px Arial";
    context.fillStyle = "#000000";
    context.fillText("Score: "+player.score(), 680, 20);
}

function onKeyDown(evt) {
	curr = evt.keyCode;
	switch (curr) {
		case 37: _left(); break;
		case 38: _up(); break;
		case 39: _right(); break;
		case 40: _down();break;
	}
}

function isvalid(input) {
	switch (input) {
		case 1: {
			i = player.x - 32;
			j = player.y;
			if(i ===  -31 && j === 285) {
					return true;
			}
			else{
				if(!maze.contains(i,j))
					return true;
				else
					return false;
			}
			break;
		}
		case 2: {
			i = player.x;
			j = player.y - 32;
			if(!maze.contains(i,j))
				return true;
			else
				return false;
		}
		case 3: {
			i = player.x + 32;
			j = player.y;
			if( i === 769 && j === 285)
				return true;
			else
				if(!maze.contains(i,j))
					return true;
				else
					return false;
			break;
		}
		case 4: {
			i = player.x;
			j = player.y + 32;
			if((i == 353 && j == 221)  || (i == 385 && j == 221 )){
				return false;
			}
			else if(!maze.contains(i,j))
				return true;
			else
				return false;
			break;
		}
	}
}

function _left(){
	if(isvalid(1))  {
		moveLeft=true; moveRight=false; moveUp=false; moveDown=false;
	}
	else {
		moveLeft=false;
	}
}

function _up(){
	if(isvalid(2)){
		moveUp=true; moveDown=false; moveRight=false; moveLeft=false;
	}
	else {
		moveUp=false;
	}
}

function _right(){
	if(isvalid(3)) {
		moveRight=true; moveDown=false; moveLeft=false; moveUp=false;
	}
	else {
		moveRight=false;
	}
}

function _down(){
	if(isvalid(4)) {
		moveDown=true; moveUp=false; moveLeft=false; moveRight=false;
	}
	else {
		moveDown = false;
	}
}

function movement(){
	console.log("Score is: "+player.score());

	drawScore();
	if(player.score() >= 186){
		window.location.href = 'win.html';
	}

	if((cd1.cd_x == player.x && cd1.cd_y == player.y) || (cd2.cd_x == player.x && cd2.cd_y == player.y) || (cd3.cd_x == player.x && cd3.cd_y == player.y) ||(cd4.cd_x == player.x && cd4.cd_y == player.y)){
		window.location.href = 'gameover.html';
	}

	if(moveLeft && isvalid(1)) {
		if(i ===  -31 && j === 285) {
				player.move(1,true);
		}
		else{
			player.move(1,false);
		}
	}
	if(moveUp && isvalid(2)){
		player.move(2,false);
	}
	if(moveRight && isvalid(3)){
		if( i === 769 && j === 285)
			player.move(3,true)
		else
			if(!maze.contains(i,j))
				player.move(3,false);
	}
	if(moveDown && isvalid(4))
		player.move(4,false);
}

function CDmove1(){
	var eatenFilm = player.eaten_contains(cd1.x,cd1.y);
	cd1.CDmove(eatenFilm);
	console.log("x1 = " +cd1.x + "y1 = " + cd1.y);

	var eatenFilm = player.eaten_contains(cd2.x,cd2.y);
	cd2.CDmove(eatenFilm);
	console.log("x2 = " +cd2.x + "y2 = " + cd2.y);

	var eatenFilm = player.eaten_contains(cd3.x,cd3.y);
	cd3.CDmove(eatenFilm);
	console.log("x3 = " +cd3.x + "y3 = " + cd3.y);

	var eatenFilm = player.eaten_contains(cd4.x,cd4.y);
	cd4.CDmove(eatenFilm);
	console.log("x4 = " +cd4.x + "y4 = " + cd4.y);
}

function checkEnd() {
	console.log("Score is: "+player.score());

	drawScore();
	if(player.score() == 185){
		window.location.href = 'win.html';
	}

	if((cd1.cd_x == player.x && cd1.cd_y == player.y) || (cd2.cd_x == player.x && cd2.cd_y == player.y) || (cd3.cd_x == player.x && cd3.cd_y == player.y) ||(cd4.cd_x == player.x && cd4.cd_y == player.y)){
		window.location.href = 'gameover.html';
	}
}

$(document).keydown(onKeyDown);
