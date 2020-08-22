window.onload = function () {
  //definitions
  const canvas = document.getElementById("lab1-canvas");
  canvas.width = 600;
  canvas.height = 300;
  const context = canvas.getContext("2d");

  context.beginPath();
  context.lineWidth = 15;
  context.strokeStyle = "red";
  context.lineCap = "butt";
  context.lineJoin = "miter";
  context.shadowColor = "blue";
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 10;
  context.moveTo(100, 100);
  context.lineTo(200, 100);
  context.lineTo(100, 200);
  context.lineTo(200, 200);
  context.stroke();

  context.beginPath();
  context.lineWidth = 15;
  context.strokeStyle = "blue";
  context.lineCap = "round";
  context.lineJoin = "round";
  context.shadowColor = "yellow";
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 10;
  context.moveTo(350, 100);
  context.lineTo(250, 100);
  context.lineTo(350, 200);
  context.lineTo(250, 200);
  context.stroke();

  context.beginPath();
  context.lineWidth = 15;
  context.strokeStyle = "green";
  context.lineCap = "square";
  context.lineJoin = "bevel";
  context.shadowColor = "red";
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur = 10;
  context.moveTo(400, 100);
  context.lineTo(500, 100);
  context.lineTo(400, 200);
  context.lineTo(500, 200);
  context.stroke();
};
