const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;
ctx.lineWidth = 2;

const colors = [
  "#cd84f1",
  "#ffcccc",
  "#ff4d4d",
  "#ffaf40",
  "#fffa65",
  "#32ff7e",
  "#7efff5",
  "#17c0eb",
  "#7158e2",
  "#3d3d3d",
];

function onMousemove(event) {
  ctx.beginPath();
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onMousemove);
