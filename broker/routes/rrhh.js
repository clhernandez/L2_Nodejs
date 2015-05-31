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
	    if (err) throw err;
	    console.log("Trabajador: "+result);
	    res.json(result);
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

	request.get({url:'http://localhost:3001/rrhh/departamentos/get_by_name', qs:{nombre:nombreDepartamento}}, function(err,response,body){ 
		
		if (!err && response.statusCode == 200) {
	    	data = JSON.parse(body);
			req.db.usuarios.insert({rut : rut ,nombre : nombre, apellido : apellido,
					email : email, password : password, telefono : telefono, fecha_contratacion : fecha_contratacion, 
					cargo : nombreCargo, departamento : nombreDepartamento, sueldo : sueldo ,sistema:data.sistema}, function(err, result) {
				    if (err){
				    	result = err;
				    	res.json(500, result);
				    }else{
				    	console.log("add Trabajador: "+result);
				   		res.json(result);
				    }
			});
	  	}else{
	  		data = {codigo: response.statusCode, mensaje:'Error al obtener codigo del sistema...'};
	  		res.json(data);
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
	
	console.log("obtener departamento");
	request.get({url:'http://localhost:3001/rrhh/departamentos/get_by_name', qs:{nombre:nombreDepartamento}}, function(err,response,body){ 
		
		if (!err && response.statusCode == 200) {
	    	data = JSON.parse(body);
	    	console.log(data);
	    	console.log("mondificar trabajador");

	    	req.db.usuarios.update({rut: rut},{rut : rut ,nombre : nombre, apellido : apellido,
			email : email, password : password, telefono : telefono, fecha_contratacion : fecha_contratacion, 
			cargo : nombreCargo, departamento : nombreDepartamento, sueldo : sueldo ,sistema:data.sistema}, function(err, result){
				if (err) throw err;
				console.log(result);
				res.json(result);
			});
	  	}else{
	  		data = {codigo: response.statusCode, mensaje:'Error al obtener el departamento...'};
	  		res.json(data);
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
	    if (err) throw err;
	    console.log("Resultado: "+result);
	    res.json(result);
	});
});

router.get('/departamentos/get_all', function (req, res){
	console.log("Listar Departamentos");
	var departamentos = [];
	var flagfind=false; //bloquear peticion asincrona.

	var result = req.db.departamentos.find({});//buscar todos los trabajadores
	result.each(function(err, departamento) {
		if(departamento!=null){
			//Agregar los trabajadores obtenidos a un array
			departamentos.push(departamento);
		}else{
			//al no encontrar mas trabajadores retorna la respuesta.
			console.log(departamentos.length);
			if(departamentos.length==0){
				departamentos.push({error:1, mensaje:'No exiten departamento'});
			}
			res.json(departamentos);
		}
	});
});

router.get('/departamentos/get_by_name', function (req, res){
	console.log("Get cargo by name");
	var nombre = req.query.nombre;
	console.log(nombre);

	req.db.departamentos.findOne({nombre_departamento:nombre},function(err, result) {
	    if (err) throw err;
	    console.log("departamento: "+result);
	    res.json(result);
	});
});

/*.................................CARGOS.................................................*/

router.get('/cargos/get_all', function (req, res){
	console.log("Listar Cargos");
	var cargos = [];
	var flagfind=false; //bloquear peticion asincrona.

	var result = req.db.cargos.find({});//buscar todos los trabajadores
	result.each(function(err, cargo) {
		if(cargo!=null){
			//Agregar los trabajadores obtenidos a un array
			cargos.push(cargo);
		}else{
			//al no encontrar mas trabajadores retorna la respuesta.
			console.log(cargos.length);
			if(cargos.length==0){
				cargos.push({error:1, mensaje:'No exiten cargos'});
			}
			res.json(cargos);
		}
	});
});

router.get('/cargos/get_by_name', function (req, res){
	console.log("Get cargo by _name");
	var nombre = req.query.nombre;
	console.log(nombre);

	req.db.cargos.findOne({nombre_cargo:nombre},function(err, result) {
	    if (err) throw err;
	    console.log("cargo: "+result);
	    res.json(result);
	});
});


module.exports = router;
