var canvas = document.getElementById("mycvs");
var ctx = canvas.getContext("2d");
var x = 0, xSpeed = 2;

function drawOnLoad(){
	update();
}

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	x += xSpeed;
	drawRect(x);
	drawCircle(x);
	if ((x + 10) > canvas.width || x < 0) {
      xSpeed *=-1;
  	}
	requestAnimationFrame(update);
}

function drawCircle(y) {
	ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
	ctx.beginPath();
	ctx.arc(120, y, 10, 0, 2*Math.PI);
	ctx.fill();
}

function drawRect(x) {
	ctx.fillStyle = "rgb(0,0,255)";
	ctx.fillRect(x,100, 10, 10);
}