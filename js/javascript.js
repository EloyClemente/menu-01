document.addEventListener('DOMContentLoaded', (function(){


var header      = document.getElementById('header');
var buttonLarge = document.getElementById('buttonLarge');
var botonTexto  = document.getElementById('botonTexto');
var buttonSmall = document.getElementById('buttonSmall');
var nav = document.getElementById('nav');
var ul1 = document.getElementById('ul1');
var ul2 = document.getElementById('ul2');
var ul3 = document.getElementById('ul3');




window.onload   = resetear;
window.onresize = resetear;



function resetear(){

	var viewport = window.innerWidth;


	if(viewport < 480)
	{

		// Elimina el vuelo de batman
		setTimeout(function(){

			nav.style.transition = "none";

		}, 300); // <-- lo que dura la transición

		
		nav.style.top        = "60px";
		nav.style.left       = "-100%";
		ul2.style.height     = "0px";
		ul3.style.height     = "0px";	
		botonTexto.innerHTML = "Menú"
		buttonLarge.style.boxShadow = "3px 3px 5px #666";
	}





	if(viewport > 480)
	{

		// Elimina el vuelo de batman
		setTimeout(function(){

			nav.style.transition = "none";

		}, 300); // <-- lo que dura la transición


		nav.style.top    = "-60px";
		nav.style.left   = "0%";
		ul2.style.height = "0px";
		ul3.style.top    = "0px";
		ul3.style.height = "180px";
		buttonLarge.style.boxShadow = "none";
		nav.style.boxShadow = "none";
	}

} // Resetear










// TOGGLE PANEL

buttonLarge.addEventListener('click', togglePanel);

function togglePanel(){



	var viewport = window.innerWidth;



	if(viewport < 480)
	{

		if(nav.style.left   == "-100%")
		{
			nav.style.left       = "0%";
			botonTexto.innerHTML = "Cerrar menú"
			nav.style.boxShadow = "3px 3px 5px #666";
		}

		else
		{
			nav.style.left       = "-100%";
			ul2.style.height     = "0px";
			ul3.style.height     = "0px";
			botonTexto.innerHTML = "Menú"
		}

		nav.style.transition = "left, .3s";
	}
}












// TOGGLE MENU NAVEGACIÓN

buttonSmall.addEventListener('click', function(){


	if(nav.style.top == "-60px")
	{
		nav.style.top    = "0px";
		nav.style.boxShadow = "3px 3px 5px #666";
	}

	else
	{
		nav.style.top    = "-60px";
		nav.style.boxShadow = "none";
	}

	nav.style.transition = "height, .3s";
});











// TOGGLE PROYECTOS

var linkProyectos = document.getElementById('linkProyectos');

linkProyectos.addEventListener('click', function(){



	var viewport = window.innerWidth;



	if(viewport < 480)
	{
		if(ul2.style.height == "0px")
		{
			ul2.style.height = "240px";
		}

		else
		{
			ul2.style.height = "0px";
			ul3.style.height = "0px";
		}

		ul2.style.transition = "height, .3s";
	}
});











// TOGGLE NAVA

var linkNava = document.getElementById('linkNava');

linkNava.addEventListener('click', function(event){


	event.preventDefault();


	var viewport = window.innerWidth;



	if(viewport < 480)
	{
		if(ul3.style.height == "0px")
		{
			ul3.style.height = "180px";
			ul2.style.height = "420px";
		}

		else
		{
			ul3.style.height = "0px";
			ul2.style.height = "240px"
		}

		ul3.style.transition = "height, .3s";
	}
});












// STICKY

window.onscroll = sticky;



function sticky(){


	nav.style.transition  = "none";


	var viewport          = window.innerWidth;
	var viewportHeight    = window.innerHeight;


	// Height cabecera
	var heightHeader      = header.offsetHeight;

	// Top cabecera
	var topHeader         = header.getBoundingClientRect().top;

	// Bottom del botón
	var bottomButtonLarge = buttonLarge.getBoundingClientRect().bottom;




	if(viewport < 480) 
	{
		
		if(topHeader < -heightHeader)
		{
			buttonLarge.style.position   = "fixed";
			buttonLarge.style.top        = "0";
			nav.style.position           = "fixed";
			nav.style.top                = "60px";
		}
		else
		{
			buttonLarge.style.position   = "static";
			nav.style.position           = "absolute";
			nav.style.top                = "60px";
		}
	}
}







})());