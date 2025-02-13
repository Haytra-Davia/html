const j2 = document.getElementById('js2');
j2.width = window.innerWidth;
j2.height = window.innerHeight;

const c = j2.getContext('2d');

c.fillStyle = 'rgb(244, 7, 7)';
c.strokeStyle = 'black';
c.lineWidth = 2;

let X = 100;
let Y = 80;
let speedX = 10;
let speedY = 10;
function draw() {
	window.requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
    console.log('draw');
	c.fillStyle = "Crimson";
	c.beginPath();
	c.arc(X, Y, 50, 0, 2 * Math.PI);
	c.fill();
	c.stroke();
    
    if(X + 50 > innerWidth || X - 50 < 0){ 
        speedX = -speedX;
    }
    if(Y + 50 > innerHeight || Y - 50 < 0){ 
        speedY = -speedY;
    }
    X += speedX;
    Y += speedY;
}


draw();