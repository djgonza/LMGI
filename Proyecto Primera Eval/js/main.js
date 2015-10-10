$(document).ready(function() {

	function ocultarNavBar () {
		$("#navBar-back").css("height", "0");
		if($(window).width() < 992)
			$("#navBar").css("left", "-105%");
	}

	function mostrarNavBar () {
		$("#navBar").css("left", 0);
		$("#navBar-back").css("height", "100%");
	}

	/* navBar */
	$("#buttonNav").click(function() {
		mostrarNavBar ();
	});

	$("#navBar-back").click(function () {
		ocultarNavBar ();
	});

	/* Secciones */

		//default
		$("#seccion").load("secciones/inicio.html");
		$("#titulo-seccion>span").html("Inicio");

		//Inicio
		$("#link-inicio").click(function() {
			$("#seccion").load("secciones/inicio.html");
			$("#titulo-seccion>span").html("Inicio");
			ocultarNavBar ();
		});
		//Galeria
		$("#link-galeria").click(function() {
			$("#seccion").load("secciones/galeria.html");
			$("#titulo-seccion>span").html("Galeria");
			ocultarNavBar ();
		});
		//Contacto
		$("#link-contacto").click(function() {
			$("#seccion").load("secciones/contacto.html");
			$("#titulo-seccion>span").html("Contacto");
			ocultarNavBar ();
		});
		//Historia
		$("#link-historia").click(function() {
			$("#seccion").load("secciones/historia.html");
			$("#titulo-seccion>span").html("Historia");
			ocultarNavBar ();
		});
		//Peliculas
		$("#link-peliculas").click(function() {
			$("#seccion").load("secciones/peliculas.html");
			$("#titulo-seccion>span").html("Peliculas");
			ocultarNavBar ();
		});
		//Comics
		$("#link-comics").click(function() {
			$("#seccion").load("secciones/comics.html");
			$("#titulo-seccion>span").html("Comics");
			ocultarNavBar ();
		});

	/* Botones */
	



});