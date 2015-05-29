var express = require('express');
var router = express.Router();

router.get('/trabajadores/listar', function (req, res){
	console.log("Listar Trabajadores");
	var trabajadores = [];
	var flagfind=false; //bloquear peticion asincrona.

	var result = req.db.usuarios.find({});//buscar todos los trabajadores
	result.each(function(err, trabajador) {
		if(trabajador!=null){
			//Agregar los trabajadores obtenidos a un array
			trabajadores.push(trabajador);
		}else{
			//al no encontrar mas trabajadores retorna la respuesta.
			console.log(trabajadores.length);
			if(trabajadores.length==0){
				trabajadores.push({error:1, mensaje:'No exiten trabajadores'});
			}
			res.json(trabajadores);
		}
	});

});

module.exports = router;
