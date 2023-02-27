
  images_array = [
    "housenumbers-1.JPG",
    "housenumbers-2.JPG",
    "housenumbers-3.JPG",
    "housenumbers-4.JPG",
    "housenumbers-5.JPG",
    "housenumbers-6.JPG",
    "housenumbers-7.JPG"

  ]



function get_random_image(){
  random_index = Math.floor(Math.random() * images_array.length);
  selected_image = images_array[random_index];
  document.getElementById('main-img').src = `assets/images/${selected_image}`;
}
