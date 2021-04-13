let city = document.getElementById('city');
let katedralja = document.getElementById('katedralja');
let mountain = document.getElementById('mountain');
let sky = document.getElementById('sky');
let nightSky = document.getElementById('night-sky');
let timeBtn = document.getElementById('time-btn');

let imgController = 1;

function changeCover() {
  if (imgController === 1) {
    city.src = './images/City_night.png';
    katedralja.src = './images/Katedralja_night.png';
    mountain.src = './images/Mountain_night.png';
    sky.src = './images/Sky_night.png';
    // sky.src = './images/Sky_night.png';
    timeBtn.innerText = 'Day';
    imgController = 2;
  } else {
    city.src = './images/City_day.png';
    katedralja.src = './images/Katedralja_day.png';
    mountain.src = './images/Mountain_day.png';
    sky.src = './images/Sky_day.png';
    timeBtn.innerText = 'Night';
    imgController = 1;
  }
}

const translate = document.querySelectorAll('.translate');
const bigTitle = document.querySelector('.big-title');
const header = document.querySelector('header');
const shadow = document.querySelector('.shadow');

let headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;

  translate.forEach((element) => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  bigTitle.style.opacity = -scroll / (headerHeight / 2) + 1;
  shadow.style.height = `${scroll * 0.5 + 300}px`;
});
