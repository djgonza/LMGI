$(document).ready(function() {

	seccion = "";

	function mostrarTituloSeccion (texto) {
		$("#tituloSeccion").css("animation", "mostrarTituloSeccion 3s forwards");
		$("#tituloSeccion").html("<span>"+texto+"</span>");

	}

	function ocultarTituloSeccion (texto) {
		$("#tituloSeccion").css("animation", "ocultarTituloSeccion 3s forwards");
		window.setTimeout(function () {
			mostrarTituloSeccion (texto);
		}, 2000);
	}

	function clickIcono (nombreSeccion) {
		if (seccion == "") {
			navIconos ();
			mostrarTituloSeccion (nombreSeccion);
		}else if (seccion != nombreSeccion){
			ocultarTituloSeccion(nombreSeccion);
		}
		seccion = nombreSeccion;
	}


	//inicia la animacion de la barra de navegacion
	function navIconos () {
		$("#iconoComics").css("animation", "navIconoComic 3s forwards");
		$("#iconoContacto").css("animation", "navIconoContacto 3s forwards");
		$("#iconoPeliculas").css("animation", "navIconoPeliculas 3s forwards");
		$("#iconoGaleria").css("animation", "navIconoGaleria 3s forwards");
		$("#iconoHistoria").css("animation", "navIconoHistoria 3s forwards");

		$("#navegacion").css("animation", "navegacion 3s forwards");

	}

	$("#iconoComics").click(function() {
		clickIcono ("Comics");
	});
	$("#iconoContacto").click(function() {
		clickIcono ("Contacto");
	});
	$("#iconoPeliculas").click(function() {
		clickIcono ("Peliculas");
	});
	$("#iconoGaleria").click(function() {
		clickIcono ("Galeria");
	});
	$("#iconoHistoria").click(function() {
		clickIcono ("Historia");
	});


});