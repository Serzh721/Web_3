function drawAxis() {
    let h = canvas.height;
    let w = canvas.width;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w / 2, h);
    ctx.lineTo(w / 2, 0);
    ctx.lineTo(w / 2 + 3, 7);
    ctx.moveTo(w / 2, 0);
    ctx.lineTo(w / 2 - 3, 7);
    drawDigitsX(ctx, size, w, h);

    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.lineTo(w - 7, h / 2 + 3);
    ctx.moveTo(w, h / 2);
    ctx.lineTo(w - 7, h / 2 - 3);
    drawDigitsY(ctx, size, w, h);
    ctx.stroke();

    ctx.strokeStyle = "grey";
    ctx.lineWidth = 1;
    ctx.moveTo(w / 2 - 4 * size, h / 2 - 5 * size);
    ctx.lineTo(w / 2 + 4 * size, h / 2 - 5 * size);
    ctx.lineTo(w / 2 + 4 * size, h / 2 + 3 * size);
    ctx.lineTo(w / 2 - 4 * size, h / 2 + 3 * size);
    ctx.lineTo(w / 2 - 4 * size, h / 2 - 5 * size);
    ctx.stroke();
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //drawTextX(ctx, size, w, h);
    //drawTextY(ctx, size, w, h);
}

function drawDigitsX(ctx, i, w, h) {
    let t = w / 2;
    for (let j = 0; j < 5; j++) {
        t += i;
        ctx.moveTo(t, h / 2 + 3);
        ctx.lineTo(t, h / 2 - 3)
    }
    t = w / 2;
    for (let j = 0; j < 5; j++) {
        t -= i;
        ctx.moveTo(t, h / 2 + 3);
        ctx.lineTo(t, h / 2 - 3)
    }
}

// function drawTextX(ctx, i, w, h) {
//     ctx.font = "9px Verdana";
//     ctx.strokeStyle = "black";
//     let t = w / 2;
//     let r = parseFloat(document.getElementById("R").value);
//     t += i;
//     for (let j = 1; j < 6; j++) {
//         ctx.strokeText((j).toString(), t, h / 2 + 10);
//         t += i;
//     }
//     t = w / 2;
//     for (let j = 0; j < 6; j++) {
//         ctx.strokeText((-j).toString(), t, h / 2 + 10);
//         t -= i;
//     }
// }

function drawDigitsY(ctx, i, w, h) {
    let t = h / 2;
    for (let j = 0; j < 5; j++) {
        t += i;
        ctx.moveTo(w / 2 + 3, t);
        ctx.lineTo(w / 2 - 3, t);
    }
    t = h / 2;
    for (let j = 0; j < 5; j++) {
        t -= i;
        ctx.moveTo(w / 2 + 3, t);
        ctx.lineTo(w / 2 - 3, t);
    }
}

// function drawTextY(ctx, i, w, h) {
//     ctx.font = "9px Verdana";
//     ctx.strokeStyle = "black";
//     let t = h / 2;
//     let r = parseFloat(document.getElementById("R").value);
//     t += i;
//     for (let j = 1; j < 6; j++) {
//         ctx.strokeText((-j).toString(), w / 2, t + 10);
//         t += i;
//     }
//     t = h / 2;
//     for (let j = 0; j < 6; j++) {
//         ctx.strokeText((j).toString(), w / 2, t + 10);
//         t -= i;
//     }
// }

function drawArea(r) {
    let h = canvas.height;
    let w = canvas.width;
    ctx.strokeStyle = "#24502D";
    ctx.fillStyle = "#24502D";
    ctx.beginPath();
    ctx.moveTo(w / 2, h / 2);
    ctx.arc(w / 2, h / 2, r / 2 * size, Math.PI / 2, Math.PI, false);
    ctx.moveTo(w / 2, h / 2);
    ctx.lineTo(w / 2, h / 2 - r / 2 * size);
    ctx.lineTo(w / 2 - r * size, h / 2 - r / 2 * size);
    ctx.lineTo(w / 2 - r * size, h / 2);
    ctx.lineTo(w / 2, h / 2);
    ctx.lineTo(w / 2 + r * size, h / 2);
    ctx.lineTo(w / 2, h / 2 + r / 2 * size);
    ctx.fill();
}

function drawPoint(x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(canvas.width / 2 + x * size, canvas.height / 2 - y * size, 2, 0, Math.PI * 2, true);
    ctx.fill();
}

function clearCanvas() {
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

function drawPointsFromTable() {
    let table = document.getElementById("table-form:result-table").childNodes[3];
    try {
        for (let row of table.children) {
            let x = Number(row.children[0].innerText);
            let y = Number(row.children[1].innerText);
            let ch = row.children[3].innerText;
            drawPoint(x, y, isPointInArea(x, y, radius) ? "lime" : "red")
        }
    } catch {

    }
}

function drawResize() {
    table = document.getElementById("table-form:result-table").childNodes[3];
    counter = 0;
    drawStep();
}

function drawStep() {
    console.log(counter);
    if (counter < table.children.length) {
        let row = table.children[counter];
        if (!row.children[0].innerText) return;
        let x = Number(row.children[0].innerText);
        let y = Number(row.children[1].innerText);
        xCanvas.value = x;
        yCanvas.value = y;
        counter++;
        checkResize();
    }
}