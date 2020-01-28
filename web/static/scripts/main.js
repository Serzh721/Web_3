let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let size = 25;
let radius = 3;

let xCanvas = document.getElementById("canvas-form:xCanvas");
let yCanvas = document.getElementById("canvas-form:yCanvas");
let counter;
let table = document.getElementById("table-form:result-table").childNodes[3];
drawArea(radius);
drawAxis();
drawResize();

function handleRChange(event) {
    clearCanvas();
    radius = Number(event.target.value);
    drawArea(radius);
    drawAxis();
    drawResize();
}

let r = document.getElementById("main-form:r");

function handleRChange2() {
    clearCanvas();
    drawArea(r.value);
    drawAxis();
    drawResize();
}

function handleSubmit() {
    clearCanvas();
    drawArea(r.value);
    drawAxis();
    drawResize();
}

function isPointInArea(x, y, r) {
    return ((x <= 0 && x >= -r && y >= 0 && y <= r / 2) || (x <= 0 && y <= 0 && x * x + y * y <= (r / 2) * (r / 2)) || (x >= 0 && y <= 0 && y >= x / 2 - r / 2));
}

function handleCanvasClick(event) {
    let obj = event.target;
    let x = Number(((event.pageX - window.pageXOffset - obj.getBoundingClientRect().x - obj.width / 2) / size).toFixed(2));
    let y = Number((-(event.pageY - window.pageYOffset - obj.getBoundingClientRect().y - obj.height / 2) / size).toFixed(2));
    if (x >= -4 && x <= 4 && y >= -3 && y <= 5) {
        xCanvas.value = x;
        yCanvas.value = y;
        checkCanvas();
    }
}