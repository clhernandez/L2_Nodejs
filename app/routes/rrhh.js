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
	data.layout ='rrhh/base/layout';

	request.get({url:'http://localhost:3001/rrhh/trabajadores/get_all'}, function(err,response,body){
		console.log("obtener listado de trabajadores...")
		if (!err && response.statusCode == 200) {
			data.trabajadores = JSON.parse(body);

	    	request.get({url:'http://localhost:3001/rrhh/departamentos/get_all'}, function(err,response,body){ 
				console.log("obtener listado de departamentos...")
				if (!err && response.statusCode == 200) {
					data.departamentos = JSON.parse(body);

			    	request.get({url:'http://localhost:3001/rrhh/cargos/get_all'}, function(err,response,body){ 
						console.log("obtener listado de cargos...")
						if (!err && response.statusCode == 200) {
							data.cargos = JSON.parse(body);

							// console.log(data);
					    	res.render('rrhh/listarTrabajadores', data);
					  	}else{
					  		data.codigo = response.statusCode;
					  		data.mensaje = 'Error al obtener los cargos';
					  		res.render('rrhh/listarTrabajadores', data);
					  	}
					});
			  	}else{
  			  		data.codigo = response.statusCode;
	  				data.mensaje = 'Error al obtener los departamentos';
			  		res.render('rrhh/listarTrabajadores', data);
			  	}
			});
	  	}
	});
});

router.get('/getTrabajadorByRut', function(req, res, next) {
	var rut = req.query.rut;
	console.log(rut);
	var data = {};
	request.get({url:'http://localhost:3001/rrhh/trabajadores/get_by_rut', qs:{rut:rut}}, function(err,response,body){ 
		console.log("obtener trabajador")
		if (!err && response.statusCode == 200) {
	    	data = JSON.parse(body);
	  	}else{
	  		data.codigo = response.statusCode;
	  		data.mensaje = 'Error al obtener el trabajador';
	  	}
	  	console.log(data);
  
		res.json(data);
	});
});

router.post('/modificar_trabajador', function(req, res, next) {
	var id_trabajador = req.body.id_trabajador;
	var rut = req.body.rut;
	var nombre = req.body.nombre;
	var apellido = req.body.apellido;
	var email = req.body.email;
	var password = req.body.password;
	var telefono = req.body.telefono;
	var fecha_contratacion = req.body.fecha_contratacion;
	var sueldo = req.body.sueldo;
	var id_departamento_fk = req.body.id_departamento_fk;
	var id_cargo_fk = req.body.id_cargo_fk;

	var data = {};

	request.put({url:'http://localhost:3001/rrhh/trabajadores/modify_by_rut', 
		form: {id_trabajador : id_trabajador, rut : rut, nombre : nombre, apellido : apellido, 
			email : email, password : password, telefono : telefono, fecha_contratacion : fecha_contratacion, 
			sueldo : sueldo, id_departamento_fk : id_departamento_fk, id_cargo_fk : id_cargo_fk}}, function(err,response,body){

		console.log("modificar trabajador")
		if (!err && response.statusCode == 200) {
	    	data.codigo = JSON.parse(body);
	    	data.mensaje = "Modificacion Exitosa."
	  	}else{
	  		data.codigo = response.statusCode;
	  		data.mensaje = 'Ocurrio un error en la modificacion al trabajador.';
	  	}

	  	console.log(data);
  
		res.json(data);
	});
});


module.exports = router;
