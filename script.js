const timerShow = document.querySelector("#pomodoro-time");
const buttonStart = document.querySelector("#start");
buttonStart.addEventListener("click", start)
let idInterval;


function start() {
    buttonStart.textContent = "stop";
    idInterval = setInterval(funcName, 10);
    this.removeEventListener('click', start);
    this.addEventListener('click', stop);
}

function stop() {
    buttonStart.textContent = "start";
    clearInterval(idInterval);
    this.removeEventListener('click', stop);
    this.addEventListener('click', start);
};

let minutes = 25;
let seconds = 00;
const funcName = function() {
    if (minutes == 0 && seconds == 0) {
        clearInterval(idInterval);
        minutes = 25;
        seconds = 0;
        buttonStart.textContent = "start";
    } else if (seconds != 0) {
        seconds -= 1;
    } else if (seconds == 0) {
        seconds = 59;
        minutes -= 1;
    };

    function format(val) {
        if (val < 10) {
            return `0${val}`;
        }

        return val;
    }
    timerShow.textContent = `${format(minutes)} : ${format(seconds)}`;
};