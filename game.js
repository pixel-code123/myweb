let score = 0;
let timeLeft = 10;
let timer;

const button = document.getElementById("clickButton");
const resetButton = document.getElementById("resetButton");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

button.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
});

resetButton.addEventListener("click", () => {
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  button.disabled = false;
  button.textContent = "クリック";
  clearInterval(timer);
  startTimer();
});

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      button.disabled = true;
      button.textContent = "ゲーム終了！";
    }
  }, 1000);
}

// 最初に1回スタートする
startTimer();
