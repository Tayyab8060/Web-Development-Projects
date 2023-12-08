document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("alert").style.display = "block";
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("alert").style.display = "block";
  });

document
  .querySelector("#alert .btn-close")
  .addEventListener("click", function () {
    document.getElementById("alert").style.display = "none";
  });

