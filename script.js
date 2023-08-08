var klikLove = document.querySelectorAll(".klikLove");

klikLove.forEach(function (e) {
  var lovePoint = e.querySelector(".lovePoint");
  var love = e.querySelector(".love");

  var loveCount = 0;
  var isLove = true;

  lovePoint.addEventListener("click", function () {
    if (!lovePoint.classList.contains("loved")) {
      loveCount++;
    } else {
      loveCount--;
    }
    love.textContent = loveCount;
    isLove = !isLove;

    // menghilangkan dan memunculkan warna pada icon love
    lovePoint.classList.toggle("loved");
  })
})

// menu button
var navbar = document.querySelector("#navbar");
var menuButton = document.querySelector("#menuButton");

function menu() {
  menuButton.classList.toggle("left-0");
}

document.addEventListener("click", function (e) {
  if (!menuButton.contains(e.target) && !navbar.contains(e.target)) {
    menuButton.classList.remove("left-0");
  } 
});

