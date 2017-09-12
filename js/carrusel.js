document.addEventListener('DOMContentLoaded', fondo1);





var delay = 10000; // Tiempo entre imágenes

var carrusel1 = document.getElementById('carrusel1');
var carrusel2 = document.getElementById('carrusel2');

var contador1 = 1;
var contador2 = 1;




function fondo1() {

	carrusel2.style.zIndex = "-2";

	carrusel1.style.backgroundImage = "url(img/img1" + contador1 + ".jpg)";
	carrusel1.setAttribute('class', 'aparecer');
	carrusel1.style.zIndex = "-1";



	setTimeout(function(){ 

		carrusel1.setAttribute('class', 'desaparecer');

		fondo2();

	}, delay);



	contador1 = contador1 + 1;

	if (contador1 > 3) {

		contador1 = 1;
	}
}






function fondo2() {

	carrusel1.style.zIndex = "-2";

	carrusel2.style.backgroundImage = "url(img/img2" + contador2 + ".jpg)";
	carrusel2.setAttribute('class', 'aparecer');
	carrusel2.style.zIndex = "-1";



	setTimeout(function(){ 

		carrusel2.setAttribute('class', 'desaparecer');

		fondo1();

	}, delay);



	contador2 = contador2 + 1;

	if (contador2 > 3) {

		contador2 = 1;
	}
}