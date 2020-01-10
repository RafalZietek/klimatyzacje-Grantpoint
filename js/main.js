const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const list = document.querySelectorAll('nav li');
const closeNav = document.querySelector('.close');
const closeArrow = document.querySelector('.arrow');



function showNav() {
	nav.classList.toggle('off');
	burger.classList.toggle('off');
	closeArrow.classList.toggle('off');
}

burger.addEventListener('click', showNav);
closeNav.addEventListener('click', showNav);

for(i=0;i<list.length;i++) {
	list[i].addEventListener('click', showNav);
}

/*wysokość sekcji*/
const heightHHEader = document.querySelector('#header').clientHeight;
const heightAbout = document.querySelector('#about').clientHeight;

/*odległość sekcji od początku strony*/
const distanceAbouToStart = document.querySelector('#about').offsetTop;

/*pobranie elementów box sekcji about*/
const boxes = document.querySelectorAll('.about_belt');
const articles = document.querySelectorAll('.about_belt p');


/*pokazanie umiejętnoścui w sekcji about */
function hideElements() {
const scrollPosition = window.scrollY;

	if (scrollPosition > distanceAbouToStart - heightAbout) {
		boxes.forEach(box => {
			box.classList.add('showArticle');
		});
		articles.forEach(article => {
			article.classList.add('showArticle');
		});
	} else {
		boxes.forEach(box => {
			box.classList.remove('showArticle')
		});
		articles.forEach(article => {
			article.classList.remove('showArticle');
		});
	}	
}

window.addEventListener("scroll", hideElements)