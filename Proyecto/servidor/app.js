'use strict';

var fs = require('fs');
var express = require('express');
var app 	= express();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer();
var xml2js = require('xml2js');

//parser para las peticiones
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// contenido estatico
app.use(express.static('cliente'));

app.get('/', function(req, res){
	res.sendfile('./cliente/index.html');
});

app.post('/', upload.array(), function (req, res){

	// leemos el rss
	fs.readFile('cliente/rss.xml', "utf8", function(err, data) {
		
		if (err) throw err;

		// leemos el rss
		var parser = new xml2js.Parser();
    	parser.parseString(data, function (err, result) {
	        
    		if (err) throw err;

	        //añadimos el nuevo elemento
	        result.rss.channel[0].item.unshift({
	        	title: [req.body.titulo],
	        	link: [req.body.link],
	        	description: [req.body.descripcion + '<img src="'+req.body.imagen+'" /img>'],
	        	image: [{
	        		url: [req.body.imagen]
	        	}]
	        });

	        // parseamos a xml
	        var builder = new xml2js.Builder();
			var xml = builder.buildObject(result);

			// reescribimos el archivo
			fs.writeFile('cliente/rss.xml', xml, function(err) {
				if (err) throw err;
				console.log("Item añadido al rss");
				console.dir(req.body);
			}); 

	    });

    });

	//guardamos la nueva noticia en el rss

});

app.listen(3000, function(){

	console.log('servidor corriendo en el puerto 3000');

});
