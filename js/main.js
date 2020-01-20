const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const list = document.querySelectorAll('nav li');
const closeNav = document.querySelector('.close');
const buttonShowTextAbout = document.querySelector('.more');
const showTextAbout = document.querySelector('.more_text');
const hideTextAbout = document.querySelector('.hide_text');
const cookieChoicesInfo = document.querySelector('.cookie_choices_info');
const cookieChoiceDismiss = document.querySelector('#cookieChoiceDismiss');

function showNav() {
	nav.classList.toggle('off');
	burger.classList.toggle('off');
}
burger.addEventListener('click', showNav);
closeNav.addEventListener('click', showNav);

for (i = 0; i < list.length; i++) {
	list[i].addEventListener('click', showNav);
}
function showText() {
	buttonShowTextAbout.classList.toggle('offText');
	showTextAbout.classList.remove('more_text');
	showTextAbout.classList.add('onText');
}
buttonShowTextAbout.addEventListener('click', showText);

function hideText() {
	buttonShowTextAbout.classList.toggle('offText');
	showTextAbout.classList.remove('onText');
	showTextAbout.classList.add('more_text');
}
hideTextAbout.addEventListener('click', hideText);

function hideCookie() {
	cookieChoicesInfo.classList.add('offText');
}
cookieChoiceDismiss.addEventListener('click', hideCookie);
