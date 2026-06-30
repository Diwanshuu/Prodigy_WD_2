let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let timer = null;
let isRunning = false;
let lapCount = 1;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");

const laps = document.getElementById("laps");

function updateDisplay() {
    minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
    millisecondsDisplay.textContent = milliseconds < 10 ? "0" + milliseconds : milliseconds;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;

        timer = setInterval(() => {
            milliseconds++;

            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            updateDisplay();
        }, 10);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);

    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    isRunning = false;
    lapCount = 1;

    laps.innerHTML = "";

    updateDisplay();
}

function recordLap() {
    if (isRunning) {
        const lap = document.createElement("li");

        lap.textContent =
            `Lap ${lapCount}: ${minutesDisplay.textContent}:${secondsDisplay.textContent}:${millisecondsDisplay.textContent}`;

        laps.appendChild(lap);
        lapCount++;
    }
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);

updateDisplay();