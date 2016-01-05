$(document).ready(function() {
	
	//inicializacion de la resolucion de la pantalla
	definirVentana ();

	//cambiar tamaño de la ventana
	$(window).resize(function() {
  		definirVentana ()
	});

});

function definirVentana () {
	$("#main").width($(window).width() * 3);
	$("#main").height($(window).height() * 3);
}