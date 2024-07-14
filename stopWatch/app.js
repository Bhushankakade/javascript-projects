const timer = document.querySelector(".timer");
let second = 0;
let minute = 0;
let hour = 0;
let stopwatch = false;
let timeout;

function start() {
  if (stopwatch == false) {
    stopwatch = true;
    stopwatchTimer();
  }
}

function stop() {
  if (stopwatch == true) {
    stopwatch = false;
    clearTimeout(timeout);
  }
}

function stopwatchTimer() {
  if (stopwatch == true) {
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);

    second = second + 1;

    if (second == 60) {
      minute = minute + 1;
      second = 0;
    }
    if (minute == 60) {
      hour = hour + 1;
      minute = 0;
      second = 0;
    }

    if (second < 10) {
      second = "0" + second;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
  }

  timer.innerHTML = `${second} : ${minute} : ${hour}`;

  timeout = setTimeout("stopwatchTimer()", 100);
}

function reset() {
  clearTimeout(timeout);
  timer.innerHTML = "00 : 00 : 00";
  stopwatch = false;
  second = 0;
  minute = 0;
  hour = 0;
}
