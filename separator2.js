let separator2 = document.querySelector('.separator2');
let originalPhoto2 = document.querySelector('.photo-original2');
let filteredPhoto2 = document.querySelector('.photo2');
let photoContainer2 = document.querySelector('.photos2');
let flag2 = false;

separator2.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  flag2 = true;
}, false);

document.addEventListener('mouseup', function () {
  flag2 = false;
}, false);

photoContainer2.addEventListener('mousemove', function (evt) {
  let res = evt.pageX - this.offsetLeft;

  if (flag2 && (res > 0) && (res < filteredPhoto2.offsetWidth)) {
    separator2.style.left = res + 'px';
    originalPhoto2.style.width = res + 'px';
  }

}, false);