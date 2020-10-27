console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let dogImgs = [];

function addImages(images){
  for (const dog of images) {
      const dogContainer = document.getElementById('dog-image-container');
      const elem = document.createElement("img");
      elem.src = dog;
      dogContainer.appendChild(elem);
    }
}

// fetch(imgUrl)
//   .then(resp => resp.json())
//   .then(json => dogImgs = json.message);

document.addEventListener('DOMContentLoaded', function() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => dogImgs = json.message);
})
