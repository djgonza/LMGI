$(document).ready(function() {

	function navegar (boton, icono, rotacion, direccion) {

		if(boton.find("i").text() == "play_arrow"){
			$("#main").css("animation", direccion+"-centro 1s forwards");
			boton.find("i").text(icono).css("transform", "rotate(0deg)");
		}else{
			$("#main").css("animation", "centro-"+direccion+" 1s forwards");
			boton.find("i").text("play_arrow").css("transform", "rotate("+rotacion+"deg)");
		}

	}

	//click
	$("#boton_peliculas").click(function(){
		navegar ($(this), "video_library", 90, "arriba");
	});

	$("#boton_comics").click(function(){
		navegar ($(this), "library_music", 0, "izquierda");
	});

	$("#boton_musica").click(function(){
		navegar ($(this), "donut_small", 180, "derecha");
	});

	$("#boton_cuestionario").click(function(){
		navegar ($(this), "feedback", 270, "abajo");
	});

	//hover
	$("#boton_peliculas").hover(
		function(){
			$("#boton_peliculas_nombre").css("visibility", "visible");
		}, 
		function () {
			$("#boton_peliculas_nombre").css("visibility", "hidden");
		}
	);

	$("#boton_comics").hover(
		function(){
			$("#boton_comics_nombre").css("visibility", "visible");
		}, 
		function () {
			$("#boton_comics_nombre").css("visibility", "hidden");
		}
	);

	$("#boton_musica").hover(
		function(){
			$("#boton_musica_nombre").css("visibility", "visible");
		}, 
		function () {
			$("#boton_musica_nombre").css("visibility", "hidden");
		}
	);

	$("#boton_cuestionario").hover(
		function(){
			$("#boton_cuestionario_nombre").css("visibility", "visible");
		}, 
		function () {
			$("#boton_cuestionario_nombre").css("visibility", "hidden");
		}
	);

});