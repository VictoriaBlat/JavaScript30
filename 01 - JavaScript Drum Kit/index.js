window.addEventListener("keydown", handlePresskey);
function handlePresskey(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  audio.currentTime = 0;
  audio.play();
}
