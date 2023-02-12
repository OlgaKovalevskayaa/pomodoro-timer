const timerShow = document.querySelector("#pomodoro-time");
const buttonStart = document.querySelector("#start");
const buttonBreak = document.querySelector("#break");
const buttonPomodoro = document.querySelector("#pomodoro");
const buttonReset = document.querySelector("#reset");
let minutes = 25;
let seconds = 00;
let idInterval = null;
const pomodoroTime = document.querySelector("#pomodoro-time");

buttonStart.addEventListener("click", start)

function start() {
    buttonStart.textContent = "stop";
    idInterval = setInterval(funcName, 100);
    this.removeEventListener('click', start);
    this.addEventListener('click', stop);
}

function stop() {
    buttonStart.textContent = "start";
    clearInterval(idInterval);
    this.removeEventListener('click', stop);
    this.addEventListener('click', start);
};


const funcName = function() {
    if (minutes === 0 && seconds === 0) {
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

buttonBreak.addEventListener("click", function breakMode() {
    clearInterval(idInterval);
    buttonStart.textContent = "start";
    minutes = 5;
    seconds = 0;
    pomodoroTime.textContent = '05 : 00'

    return buttonReset.addEventListener("click", function() {
        clearInterval(idInterval);
        buttonStart.textContent = "start";
        minutes = 5;
        seconds = 0;
        pomodoroTime.textContent = '05 : 00'
    })
})

buttonPomodoro.addEventListener("click", function tomatoMode() {
    clearInterval(idInterval);
    buttonStart.textContent = "start";
    minutes = 25;
    seconds = 0;
    pomodoroTime.textContent = '25 : 00'

    return buttonReset.addEventListener("click", function() {
        clearInterval(idInterval);
        buttonStart.textContent = "start";
        minutes = 25;
        seconds = 0;
        pomodoroTime.textContent = '25 : 00'
    })
})

buttonReset.addEventListener("click", function() {
    clearInterval(idInterval);
    buttonStart.textContent = "start";
    minutes = 25;
    seconds = 0;
    pomodoroTime.textContent = '25 : 00'
})