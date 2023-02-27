
  images_array = [
    "standingout-1.JPG",
    "standingout-2.JPG",
    "standingout-3.JPG",
    "standingout-4.JPG",
    "standingout-5.JPG",
    "standingout-6.JPG"
  ]



function get_random_image(){
  random_index = Math.floor(Math.random() * images_array.length);
  selected_image = images_array[random_index];
  document.getElementById('main-img').src = `assets/images/${selected_image}`;
}


window.onload = function () {
  setTimeout(get_random_image, 3000);
};

