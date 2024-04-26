window.addEventListener("load", function () {
  const closeBt = document.querySelector(".popup-close");
  const popup = document.querySelector(".popup");
  closeBt.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
