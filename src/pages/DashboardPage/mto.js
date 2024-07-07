document.addEventListener("DOMContentLoaded", function (event) {
  let circle = document.querySelectorAll(".circle");
  circle.forEach(function (progress) {
    let degree = 0;
    var targetDegree = parseInt(progress.getAttribute("data-degree"));
    let color = progress.getAttribute("data-color");

    var interval = setInterval(function () {
      degree += 1;
      if (degree > degree) {
        clearInterval(interval);
        return;
      }
      progress.style.background = `conic-gradient(${color} ${degree}%,#222 0%)`;
    });
  });
});
