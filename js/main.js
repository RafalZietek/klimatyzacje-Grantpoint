const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const list = document.querySelectorAll('nav li');
const closeNav = document.querySelector('.close');
const closeArrow = document.querySelector('.arrow');

const hiddenTextAbout = document.querySelector('.more');
const showTextAbout = document.querySelector('.more_text');

function showNav() {
	nav.classList.toggle('off');
	burger.classList.toggle('off');
}

burger.addEventListener('click', showNav);
closeNav.addEventListener('click', showNav);

for (i = 0; i < list.length; i++) {
	list[i].addEventListener('click', showNav);
}
function hiddenText() {
	hiddenTextAbout.classList.toggle('offText');
	showTextAbout.classList.remove('more_text');
	showTextAbout.classList.add('onText');
}
hiddenTextAbout.addEventListener('click', hiddenText);

/*wysokość sekcji*/
const heightHHEader = document.querySelector('#header').clientHeight;
const heightAbout = document.querySelector('#about').clientHeight;

/*odległość sekcji od początku strony*/
const distanceAbouToStart = document.querySelector('#about').offsetTop;

/*pobranie elementów box sekcji about*/
const boxes = document.querySelectorAll('.about_belt');
const articles = document.querySelectorAll('.about_belt p');
