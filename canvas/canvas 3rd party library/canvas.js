const j3 = document.querySelector('#js-1');

j3.width = window.innerWidth;
j3.height = window.innerHeight;

//tentukan kontex
const c = j3.getContext('2d');

// manipulasi canvas
c.fillStyle = 'rgb(244, 7, 7)';
c.strokeStyle = 'blue';
c.lineWidth = 2;

 c.rect(10, 30, 100, 100);
 c.fill();
 c.stroke();

c.beginPath();
c.arc(170, 80, 50, 0, 2 * Math.PI);
c.fillStyle = "green";
c.fill();
c.stroke();

c.fillStyle = "yellow";
c.beginPath();
c.moveTo(350, 50);
c.lineTo(250, 50);
c.lineTo(300, 140);
c.fill();
c.closePath();
c.stroke();
