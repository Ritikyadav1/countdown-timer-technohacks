var hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    container = document.querySelector('.container'),
    start = document.querySelector('.start'),
    pause = document.querySelector('.pause'),
    reset = document.querySelector('.reset'),
    count_time = 120; 

start.onclick = function() {
  var counter = setInterval(function() {
    count_time--;
    if (count_time >= 0) {
      var remainingMinutes = Math.floor(count_time / 60);
      var remainingSeconds = count_time % 60;
      
     
      minutes.textContent = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;
      seconds.textContent = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
      
      if (count_time === 0) {
        clearInterval(counter);
      }
    }
  }, 1000);

  pause.removeAttribute('disabled');
  reset.removeAttribute('disabled');
  start.setAttribute('disabled', 'disabled');

  pause.onclick = function() {
    clearInterval(counter);
    start.removeAttribute('disabled');
    pause.setAttribute('disabled', 'disabled');
  }
  reset.onclick = function() {
    clearInterval(counter);
    count_time = 120;
    minutes.textContent = '02';
    seconds.textContent = '00';
    start.removeAttribute('disabled');
    reset.setAttribute('disabled', 'disabled');
    pause.setAttribute('disabled', 'disabled');
  }
}
