const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.moveTo(50, 50);
ctx.lineTo(200, 50);
ctx.stroke();
