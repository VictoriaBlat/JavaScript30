window.addEventListener("keydown", handlePresskey);
function handlePresskey(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  audio.currentTime = 0;
  audio.play();
  const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  keyElement.classList.add("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(e.propertyName);
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
