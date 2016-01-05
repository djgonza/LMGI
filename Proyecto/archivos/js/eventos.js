$(document).ready(function() {

	function navegar (boton, icono, rotacion, direccion) {
		
		if(!boton === $("#boton_peliculas")){
			$("#boton_peliculas").find("i").text("video_library").css("transform", "rotate(0deg)");
		}
		if(!boton === $("#boton_comics")){
			$("#boton_comics").find("i").text("history").css("transform", "rotate(0deg)");
		}
		if(!boton === $("#boton_contacto")){
			$("#boton_contacto").find("i").text("account_circle").css("transform", "rotate(0deg)");
		}
		if(!boton === $("#boton_historia")){
			$("#boton_historia").find("i").text("turned_in").css("transform", "rotate(0deg)");
		}

		if(boton.find("i").text() == "play_arrow"){
			$("#main").css("animation", direccion+"-centro 1s forwards");
			boton.find("i").text(icono).css("transform", "rotate(0deg)");
		}else{
			$("#main").css("animation", "centro-"+direccion+" 1s forwards");
			boton.find("i").text("play_arrow").css("transform", "rotate("+rotacion+"deg)");
		}

	}

	$("#boton_peliculas").click(function(){
		navegar ($(this), "video_library", 90, "arriba");
	});

	$("#boton_comics").click(function(){
		navegar ($(this), "history", 0, "izquierda");
	});

	$("#boton_contacto").click(function(){
		navegar ($(this), "account_circle", 180, "derecha");
	});

	$("#boton_historia").click(function(){
		navegar ($(this), "turned_in", 270, "abajo");
	});

});