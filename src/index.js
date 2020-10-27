console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let dogImgs = [];
fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => dogImgs = json.message);

function addImages(images){
  for (const dog of images) {
      const dogContainer = document.getElementById('dog-image-container');
      const elem = document.createElement("img");
      dogContainer.appendChild(elem).src = dog;
    }
}

document.addEventListener("DOMConentLoaded", addImages(dogImgs))
// for (const dog of dogImgs) {
//     const dogContainer = document.getElementById('dog-image-container');
//     const elem = document.createElement("img");
//     dogContainer.appendChild(elem).src = dog;
//   }
