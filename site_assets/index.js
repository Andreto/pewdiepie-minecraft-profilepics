var root = document.documentElement;
var imageContainer = document.getElementById('image-container');

function generateImgs(key){
  console.log(key);
  imageContainer.innerHTML = "";
  for (var i in filenames) {
    if (filenames[i].includes(key.toLowerCase())) {
      let imgElem = document.createElement('img');
      imgElem.src = 'high_res/' + filenames[i];
      imgElem.classList.add('profile-img');

      let aElem = document.createElement('a');
      aElem.href = 'high_res/' + filenames[i];

      aElem.appendChild(imgElem);
      imageContainer.appendChild(aElem);
    }
  }
}
function setImgSize() {
  let val = document.getElementById('img-size-range').value;
  console.log(val + 'px');
  root.style.setProperty('--img-size', val + 'px');
}


generateImgs("");
