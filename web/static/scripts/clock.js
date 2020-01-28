beginTime();

function beginTime() {
    let container = document.getElementById("time-container");
    changeTime(container);
    const interval = 12;
    setInterval(() => changeTime(container), interval * 1000);
}

function changeTime(container) {
    let date = new Date();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    container.innerHTML = `<p>Текущее время: ${hours}:${minutes}:${seconds}</p><p>Updating every 12 seconds</p>`;
}