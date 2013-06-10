var menuCanvas = document.getElementById("menu-canvas").getContext("2d");
var titleCanvas = document.getElementById("title-canvas").getContext("2d");

menuCanvas.canvas.width = window.innerWidth;
menuCanvas.canvas.height = window.innerHeight;

//draw menu
//draw arcs and lines
menuCanvas.beginPath();
menuCanvas.moveTo(20, 0);
menuCanvas.lineTo(20, 800);
menuCanvas.lineWidth = 25;
menuCanvas.strokeStyle = 'rgba(10, 96, 200, 1)';
menuCanvas.stroke();

menuCanvas.beginPath();
menuCanvas.moveTo(10, 0);
menuCanvas.lineTo(10, 900);
menuCanvas.lineWidth = 5;
menuCanvas.strokeStyle = 'rgba(10, 200, 10, 1)';
menuCanvas.stroke();

menuCanvas.beginPath();
menuCanvas.moveTo(20, 0);
menuCanvas.lineTo(20, 500);
menuCanvas.lineWidth = 10;
menuCanvas.strokeStyle = 'rgba(255, 36, 93, 1)';
menuCanvas.stroke();

menuCanvas.beginPath();
menuCanvas.moveTo(-30, 210);
menuCanvas.lineTo(210, -30);
menuCanvas.lineWidth = 50;
menuCanvas.strokeStyle = 'rgba(10, 76, 120, 0.75)';
menuCanvas.stroke();

menuCanvas.beginPath();
menuCanvas.arc(0, 0, 220, Math.PI * 0, Math.PI * 0.5);
menuCanvas.lineWidth = 25;
menuCanvas.strokeStyle = 'rgba(250, 250, 50, 1)';
menuCanvas.stroke();
	
menuCanvas.beginPath();
menuCanvas.arc(0, 0, 250, Math.PI * 0, Math.PI * 0.5);
menuCanvas.lineWidth = 50;
menuCanvas.strokeStyle = 'rgba(255, 153, 0, 1)';
menuCanvas.stroke();

//draw menu circles
menuCanvas.beginPath();
menuCanvas.arc(250, 25, 16, Math.PI * 0, Math.PI * 2);
menuCanvas.arc(25, 250, 16, Math.PI * 0, Math.PI * 2);
menuCanvas.fillStyle = 'rgba(155, 5, 155, 1)';
menuCanvas.fill();

menuCanvas.beginPath();
menuCanvas.arc(227, 105, 16, Math.PI * 0, Math.PI * 2);
menuCanvas.arc(105, 227, 16, Math.PI * 0, Math.PI * 2);
menuCanvas.fillStyle = 'rgba(155, 5, 155, 1)';
menuCanvas.fill();

menuCanvas.beginPath();
menuCanvas.arc(178, 178, 16, Math.PI * 0, Math.PI * 2);
menuCanvas.fillStyle = 'rgba(155, 5, 155, 1)';
menuCanvas.fill();

//draw title card
titleCanvas.beginPath();
titleCanvas.moveTo(20,0);
titleCanvas.lineTo(500,75);
titleCanvas.lineTo(450,150);
titleCanvas.lineTo(0,150);
titleCanvas.closePath();
titleCanvas.fillStyle = '#000';
titleCanvas.fill();

titleCanvas.beginPath();
titleCanvas.fillStyle = 'rgba(255, 255, 255, 1)';
titleCanvas.moveTo(0,30);
titleCanvas.lineTo(470, 30);
titleCanvas.arcTo(480, 30, 480, 40, 10);
titleCanvas.lineTo(480, 130);
titleCanvas.arcTo(480, 140, 470, 140, 10);
titleCanvas.lineTo(0,140);
titleCanvas.closePath();
titleCanvas.fill();

//draw health bars
titleCanvas.beginPath();
titleCanvas.strokeStyle = 'rgba(70, 70, 70, 1)';
titleCanvas.lineWidth = 26;
titleCanvas.moveTo(0, 85);
titleCanvas.lineTo(400, 85);
titleCanvas.lineCap = "round";
titleCanvas.stroke();

titleCanvas.beginPath();
titleCanvas.strokeStyle = 'rgba(50, 150, 50, 1)';
titleCanvas.lineWidth = 20;
titleCanvas.moveTo(0, 85);
titleCanvas.lineTo(400, 85);
titleCanvas.lineCap = "round";
titleCanvas.stroke();

titleCanvas.beginPath();
titleCanvas.strokeStyle = 'rgba(70, 70, 70, 1)';
titleCanvas.lineWidth = 26;
titleCanvas.moveTo(0, 116);
titleCanvas.lineTo(370, 116);
titleCanvas.lineCap = "round";
titleCanvas.stroke();

titleCanvas.beginPath();
titleCanvas.strokeStyle = 'rgba(50, 50, 150, 1)';
titleCanvas.lineWidth = 20;
titleCanvas.moveTo(0, 116);
titleCanvas.lineTo(370, 116);
titleCanvas.lineCap = "round";
titleCanvas.stroke();





