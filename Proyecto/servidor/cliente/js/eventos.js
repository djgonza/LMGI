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

	$("#rss_form").submit(
		function(event) {

			console.log($("input[name='titulo']").val());

			if($("input[name='titulo']").val() == ""){
				event.preventDefault();
				alert("Titulo necesario");
				$("input[name='titulo']").focus();
				return;
			}

			if($("input[name='link']").val() == ""){
				event.preventDefault();
				alert("Link necesario");
				$("input[name='link']").focus();
				return;
			}

			if($("input[name='descripcion']").val() == ""){
				event.preventDefault();
				alert("Descripcion necesaria");
				$("input[name='descripcion']").focus();
				return;
			}

			if($("input[name='imagen']").val() == ""){
				event.preventDefault();
				alert("Imagen necesaria");
				$("input[name='imagen']").focus();
				return;
			}

			//avisamos al usuario
			alert("Item añadido");

			//escondemos el formualario
			$("#rss").addClass('hide');
			
		}
	);
	//click
	$("#boton_peliculas").click(function(){
		navegar ($(this), "video_library", 90, "arriba");
	});

	$("#boton_comics").click(function(){
		navegar ($(this), "donut_small", 180, "derecha");
	});

	$("#boton_musica").click(function(){
		navegar ($(this), "library_music", 0, "izquierda");
	});

	$("#boton_cuestionario").click(function(){
		navegar ($(this), "feedback", 270, "abajo");
	});

	$("#boton_add_rss").click(function(){

		if($('#rss').hasClass('hide')){
			$('#rss').removeClass('hide');
		}else{
			$('#rss').addClass('hide');
		}

		//resetamos el formulario
		$("input[name='titulo']").val("");
		$("input[name='link']").val("");
		$("input[name='descripcion']").val("");
		$("input[name='imagen']").val("");

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

	$("#boton_rss").hover(
		function(){
			$("#boton_rss_nombre").css("visibility", "visible");
		}, 
		function () {
			$("#boton_rss_nombre").css("visibility", "hidden");
		}
	);

	$("#boton_add_rss").hover(
		function(){
			$("#boton_add_rss_nombre").css("visibility", "visible");
		}, 
		function () {
			$("#boton_add_rss_nombre").css("visibility", "hidden");
		}
	);

});