let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function formatTime(time) {
  let milliseconds = Math.floor((time % 1000) / 10);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / (1000 * 60)) % 60);

  return (
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + ":" +
    String(milliseconds).padStart(2, "0")
  );
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function start() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  pause();
  elapsedTime = 0;
  updateDisplay();
  laps.innerHTML = "";
}

function lap() {
  if (timerInterval) {
    const li = document.createElement("li");
    li.textContent = formatTime(elapsedTime);
    laps.appendChild(li);
  }
}
