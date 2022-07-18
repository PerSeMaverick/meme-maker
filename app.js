const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

// wall
ctx.fillRect(200, 200, 30, 150);
ctx.fillRect(400, 200, 30, 150);
// door
ctx.lineWidth = 3;
ctx.strokeRect(300, 290, 30, 60);
// ceil
ctx.lineWidth = 5;
ctx.moveTo(150, 200);
ctx.lineTo(320, 100);
ctx.moveTo(150, 200);
ctx.lineTo(480, 200);
ctx.lineTo(320, 100);
ctx.fill();
// load left
ctx.moveTo(202, 350);
ctx.lineTo(80, canvas.height);
ctx.stroke();
// load right
ctx.moveTo(428, 350);
ctx.lineTo(600, canvas.height);
ctx.stroke();
// person body, left arm
ctx.fillRect(350, 500, 20, 40);
ctx.moveTo(350, 502);
ctx.lineTo(330, 520);
ctx.stroke();
// right arm
ctx.moveTo(368, 502);
ctx.lineTo(390, 490);
ctx.stroke();
// left leg
ctx.moveTo(352, 540);
ctx.lineTo(340, 580);
ctx.moveTo(368, 540);
ctx.lineTo(380, 580);
ctx.stroke();

// head
ctx.moveTo(360, 500);
ctx.arc(360, 480, 20, 0, 2 * Math.PI);
ctx.fill();
// eyes
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(350, 475, 4, 1 * Math.PI, 2 * Math.PI);
ctx.arc(370, 475, 4, 1 * Math.PI, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(360, 490, 5, 2 * Math.PI, 1 * Math.PI);
ctx.fill();
