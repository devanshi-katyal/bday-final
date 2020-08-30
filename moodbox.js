ids = new Array(6); // an array with total number of ids
function aud_play_pause(idNumber) {
  var clickedAudio = document.getElementById(idNumber);

  for (var i = 0; i < ids.length; i++) {
    if ((i + 1) == idNumber && clickedAudio.currentTime == 0) { // if it's the current one and is not playing
      clickedAudio.play(); // start it
    } else { // either not the current one, or the current one but it is playing
      document.getElementById(i + 1).pause(); // Pause all ids before playing next file.
      document.getElementById(i + 1).currentTime = 0; // Set the time back to zero, else it will replay from the pause point.
    }

  }

}
