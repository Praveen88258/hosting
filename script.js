let isFullScreen = false
const vectorList = document.querySelectorAll(".vector");
const modal = document.querySelector(".modal");
const preview = document.querySelector("#preview");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const fullscreenBtn = document.querySelector('#fullscreen')
const exitfullscreenBtn = document.querySelector('#exitfullscreen')

const navigation = (e) => {
  let index = Number(preview.dataset.index) - 1 + (e.currentTarget.classList.contains('next') ? 1 : -1)
  const selected = vectorList.item(index)
  preview.setAttribute("src", selected.firstChild.getAttribute("src"));
  preview.setAttribute("data-index", selected.dataset.index);
}
previous.addEventListener("click", navigation);
next.addEventListener("click", navigation);

document.querySelector("#close").addEventListener("click", (e) => {
  modal.classList.remove("show");
});

document.querySelector("#back").addEventListener("click", (e) => {
  modal.classList.remove("show");
});

document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("pointermove", (e) => e.preventDefault());
vectorList.forEach((img) => {
  img.addEventListener("click", (e) => {
    preview.setAttribute("src", e.currentTarget.firstChild.getAttribute("src"));
    preview.setAttribute("data-index", e.currentTarget.dataset.index);
    modal.classList.add("show");
  });
});

fullscreenBtn.addEventListener('click', openFullscreen)
exitfullscreenBtn.addEventListener('click', closeFullscreen)
document.addEventListener('fullscreenchange', () => {
  isFullScreen = !isFullScreen
  if (isFullScreen) {
    fullscreenBtn.classList.add('hide')
    exitfullscreenBtn.classList.remove('hide')
  } else {
    fullscreenBtn.classList.remove('hide')
    exitfullscreenBtn.classList.add('hide')
  }

})

function openFullscreen() {
  let elem = document.documentElement
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}