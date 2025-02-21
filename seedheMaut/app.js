// pre loader

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    loader.style.display = "none";
  }, 1800);
});

//booking popup

let popup = document.getElementById("popup");

function openPopup(event) {
   event.preventDefault();
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

