const timeout = 20;

const tick = new Audio("./201766__waveplaysfx__tick.wav");

const beep = new Audio("./96640__cgeffex__sci-fi-beep-03.wav");

const timeRemainingDisplay = document.getElementById("time-remaining");

function setTimeRemaining(timeRemaining) {
  timeRemainingDisplay.innerHTML = timeRemaining;
}

function clearTimeRemaining() {
  timeRemainingDisplay.style.display = "none";
}

function showTimeRemaining() {
  timeRemainingDisplay.style.display = "block";
}

function startCountdown(seconds) {
  beep.play();
  setTimeout(() => {
    showTimeRemaining();
    let timeRemaining = seconds;
    document.title = timeRemaining;
    const countdownTimer = setInterval(function () {
      setTimeRemaining(timeRemaining);
      if (timeRemaining <= 0) {
        clearInterval(countdownTimer);
        clearTimeRemaining();
        setTimeout(() => {
          beep.play();
        }, 1000);
      }
      tick.play();
      timeRemaining -= 1;
    }, 1000);
  }, 1000);
}
const interval = setInterval(startCountdown, 50000, timeout);
