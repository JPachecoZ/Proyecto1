let canvas = document.getElementById("canvas");

let canvasProperties = {
    height: 500,
    width: 500,
}

let object1 = {
    height: 50,
    width: 50,
}

canvas.setAttribute("width", canvasProperties.width);
canvas.setAttribute("height", canvasProperties.height);

let ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect((canvasProperties.height - object1.height)/2,(canvasProperties.width - object1.width)/2,50,50);

let ctx2 = canvas.getContext("2d");
ctx2.fillStyle = "#FF0000";
ctx2.fillRect(0,0,50,50);

console.log(ctx)