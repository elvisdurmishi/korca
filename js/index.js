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

const FloatLabel = (() => {
  // add active class and placeholder
  const handleFocus = (e) => {
    const target = e.target;
    target.parentNode.classList.add('active');
    target.setAttribute('placeholder', target.getAttribute('data-placeholder'));
  };

  // remove active class and placeholder
  const handleBlur = (e) => {
    const target = e.target;
    if (!target.value) {
      target.parentNode.classList.remove('active');
    }
    target.removeAttribute('placeholder');
  };

  // register events
  const bindEvents = (element) => {
    const floatField = element.querySelector('input');
    floatField.addEventListener('focus', handleFocus);
    floatField.addEventListener('blur', handleBlur);
  };

  // get DOM elements
  const init = () => {
    const floatContainers = document.querySelectorAll('.float-container');

    floatContainers.forEach((element) => {
      if (element.querySelector('input').value) {
        element.classList.add('active');
      }

      bindEvents(element);
    });
  };

  return {
    init: init,
  };
})();

FloatLabel.init();
