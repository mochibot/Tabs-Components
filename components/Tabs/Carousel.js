let backBtn = document.getElementById('previous-btn');
let fwdBtn = document.getElementById('next-btn');
let images = document.querySelectorAll('.box-img');
let index = 0;

function slide(direction) {
  images[index].classList.remove('img-selected');
  index += direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  } 
  images[index].classList.add('img-selected');
}

fwdBtn.addEventListener('click', () => {
  slide(1);
})

backBtn.addEventListener('click', () => {
  slide(-1);
})


