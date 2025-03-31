let timerInterval;
let timeLeft = 1500; // 25 minutes in seconds
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    timeLeft = 1500; // 25 minutes in seconds
    updateDisplay();
}

function setShortBreak() {
    stopTimer();
    timeLeft = 300; // 5 minutes in seconds
    updateDisplay();
}

function setLongBreak() {
    stopTimer();
    timeLeft = 900; // 15 minutes in seconds
    updateDisplay();
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
    } else {
        stopTimer();
        alert("Time's up!");
    }
}

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
