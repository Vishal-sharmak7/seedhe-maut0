const popupRef = document.getElementById("popup");



document
  .getElementById("booking-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    this.reset();
    popupRef.classList.add("open-popup");
  });

onPopupClosed = () => {
  popupRef.classList.remove("open-popup");
};
