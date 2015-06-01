var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/trabajadores/get_all', function (req, res){
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
			if(trabajadores.length==0){
				trabajadores.push({error:1, mensaje:'No exiten trabajadores'});
			}
			res.json(trabajadores);
		}
	});
});

router.get('/trabajadores/get_by_rut', function (req, res){
	console.log("Get Trabajador by Rut");
	var rut = req.query.rut;
	console.log(rut);

	var trabajadores = [];
	var flagfind=false; //bloquear peticion asincrona.

	req.db.usuarios.findOne({rut:rut},function(err, result) {
		if (err){
	    	result = err;
	    	res.json(500, result);
	    }else{
	    	console.log("Trabajador: "+result);
	    res.json(result);
	    }
	});
});

router.post('/trabajadores/add', function (req, res){
	console.log("Ingresar Trabajador");
	var rut = req.body.rut;
	var nombre = req.body.nombre;
	var apellido = req.body.apellido;
	var email = req.body.email;
	var password = req.body.password;
	var telefono = req.body.telefono;
	var fecha_contratacion = req.body.fecha_contratacion;
	var sueldo = req.body.sueldo;
	var nombreDepartamento = req.body.id_departamento_fk;
	var nombreCargo = req.body.id_cargo_fk;

	req.db.usuarios.insert({rut : rut ,nombre : nombre, apellido : apellido,
			email : email, password : password, telefono : telefono, fecha_contratacion : fecha_contratacion, 
			cargo : nombreCargo, departamento : nombreDepartamento, sueldo : sueldo}, function(err, result) {
		    if (err){
		    	result = err;
		    	res.json(500, result);
		    }else{
		    	console.log("add Trabajador: "+result);
		   		res.json(result);
		    }
	});

});


router.put('/trabajadores/modify_by_rut', function (req, res){
	console.log("Modificar Trabajador by Rut");
	var data = {};

	var id_trabajador = req.body.id_trabajador;
	var rut = req.body.rut;
	var nombre = req.body.nombre;
	var apellido = req.body.apellido;
	var email = req.body.email;
	var password = req.body.password;
	var telefono = req.body.telefono;
	var fecha_contratacion = req.body.fecha_contratacion;
	var sueldo = req.body.sueldo;
	var nombreDepartamento = req.body.id_departamento_fk;
	var nombreCargo = req.body.id_cargo_fk;

	req.db.usuarios.update({rut: rut},{rut : rut ,nombre : nombre, apellido : apellido,
		email : email, password : password, telefono : telefono, fecha_contratacion : fecha_contratacion, 
		cargo : nombreCargo, departamento : nombreDepartamento, sueldo : sueldo}, function(err, result){
			if (err){
		    	result = err;
		    	res.json(500, result);
		    }else{
		    	console.log("modificar Trabajador: "+result);
		   		res.json(result);
		    }
	});
});

router.delete('/trabajadores/delete_by_rut', function (req, res){
	console.log("Eliminar Trabajador by Rut");
	console.log(req.query.rut);
	console.log(req.body.rut);
	var rut = req.query.rut;
	console.log(rut);

	req.db.usuarios.remove({rut:rut},function(err, result) {
	    if (err){
	    	result = err;
	    	res.json(500, result);
	    }else{
	    	console.log("Eliminar Trabajador: "+result);
	   		res.json(result);
	    }
	});
});

module.exports = router;
