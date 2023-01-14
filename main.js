const timeout = 20;

function startCountdown(seconds) {
  console.log(seconds);
  let timeRemaining = seconds;
  const countdownTimer = setInterval(function () {
    if (timeRemaining <= 0) {
      clearInterval(countdownTimer);
      timeRemaining = seconds;
    }
    timeRemaining -= 1;
    console.log(timeRemaining);
  }, 1000);
}
const interval = setInterval(startCountdown, 20000, timeout);
