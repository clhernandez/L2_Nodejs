var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
	var data = {cantidadCargos:2, cantidadDepartamentos:3, cantidadTrabajadores:4};


	var dataset = {d:data, layout:'rrhh/base/layout'};
	res.render('rrhh/index', dataset);
});

router.get('/listarTrabajadores', function(req, res, next) {
	var data = {};
	request.get({url:'http://localhost:3001/rrhh/trabajadores/listar'}, function(err,response,body){ 
		console.log("obtener listado de trabajadores")
		if (!err && response.statusCode == 200) {
	    	data = JSON.parse(body);
	  	}
	  	console.log(data);
  		
		var dataset = {data:data, layout:'rrhh/base/layout'};
		res.render('rrhh/listarTrabajadores', dataset);
	});



});

module.exports = router;
