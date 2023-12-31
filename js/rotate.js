const image = document.getElementById("main-img");
let degrees = 0;
image.addEventListener("click", () => {
  degrees += 360;
  image.style.transform = `rotate(${degrees}deg)`;
});
