$(document).ready(function() {

	/* navBar */


	/* Secciones */

		//default
		$("#seccion").load("secciones/inicio.html");
		$("#titulo-seccion>span").html("Inicio");

		//Inicio
		$("#link-inicio").click(function() {
			$("#seccion").load("secciones/inicio.html");
			$("#titulo-seccion>span").html("Inicio");
		});
		//Galeria
		$("#link-galeria").click(function() {
			$("#seccion").load("secciones/galeria.html");
			$("#titulo-seccion>span").html("Galeria");
		});
		//Contacto
		$("#link-contacto").click(function() {
			$("#seccion").load("secciones/contacto.html");
			$("#titulo-seccion>span").html("Contacto");
			console.log($("#seccion").load("contacto.html"));
		});
		//Historia
		$("#link-historia").click(function() {
			$("#seccion").load("secciones/historia.html");
			$("#titulo-seccion>span").html("Historia");
		});
		//Peliculas
		$("#link-peliculas").click(function() {
			$("#seccion").load("secciones/peliculas.html");
			$("#titulo-seccion>span").html("Peliculas");
		});
		//Comics
		$("#link-comics").click(function() {
			$("#seccion").load("secciones/comics.html");
			$("#titulo-seccion>span").html("Comics");
		});

	/* Botones */
	$("#buttonNav").click(function() {
		$("#navBar").css("left", 0);
		$("#navbar").css("padding-left", 240px)
	});

});