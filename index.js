var audio = document.getElementById('audio');
var playPauseButton = document.getElementById('play-pause-button');

playPauseButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';
  }
});