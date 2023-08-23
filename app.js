const toggle = function () {
  document.querySelector(`.modal`).classList.toggle(`hidden`);
  document.querySelector(`.overlay`).classList.toggle(`hidden`);
}

document.querySelectorAll(`.show-modal`).forEach(function(modal){
  modal.addEventListener("click", function() {
    toggle();
  });
});

document.querySelector(`.close-modal`).addEventListener("click", function () {
  toggle();
});

document.querySelector(`.overlay`).addEventListener("click", function() {
  toggle();
})
