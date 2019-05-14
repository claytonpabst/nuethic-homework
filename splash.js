function setCarouselButtonHeight(){
  const itemHeight = document.getElementsByClassName("carousel-item")[0].children[0].clientHeight
  const buttons = document.getElementsByClassName("carousel-button")
  for (let button of buttons) {
    button.style.lineHeight = itemHeight + "px"
  }
}

function windowResized() {
  setCarouselButtonHeight()
}

document.addEventListener("DOMContentLoaded", function() {
  setCarouselButtonHeight()
});
window.onresize = windowResized