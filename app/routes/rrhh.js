var express = require('express');
var request = require('request');
var router = express.Router();
var timeoutGlobal = 2000;

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
	var data = {cantidadCargos:2, cantidadDepartamentos:3, cantidadTrabajadores:4};

	var dataset = {d:data, layout:'rrhh/base/layout'};
	res.render('rrhh/index', dataset);
});

/*.................................TRABAJADORES.................................................*/

/*GET pagina listado de trabajadores*/
router.get('/listarTrabajadores', function(req, res, next) {
	var data = {};
	data.layout ='rrhh/base/layout';

	request.get({url: req.servicios.rrhh.trabajadores.get_all, timeout:timeoutGlobal}, function(err,response,body){
		console.log("obtener listado de trabajadores...")
		if (!err && response.statusCode == 200) {
			data.trabajadores = JSON.parse(body);
			res.render('rrhh/listarTrabajadores', data);
	  	}
	}).on('error', function(){
		data.codigo = -1;
		data.mensaje = "Ocurrio un problema al listar a los trabajadores, vuelva a intentarlo dentro de unos momentos.";
		res.render('rrhh/listarTrabajadores', data);
	});
});

/*GET Obtiene un objeto JSON con los datos de un trabajador obtenido por rut.*/
router.get('/getTrabajadorByRut', function(req, res, next) {
	var rut = req.query.rut;
	console.log(rut);
	var data = {};
	request.get({url:req.servicios.rrhh.trabajadores.get_by_rut, timeout:timeoutGlobal, qs:{rut:rut}}, function(err,response,body){ 
		console.log("obtener trabajador")
		if (!err && response.statusCode == 200) {
	    	data = JSON.parse(body);
	    	console.log(data);
			res.json(data);
	  	}

	}).on('error', function(){
		data.codigo = -1;
		data.mensaje = "Ocurrio un problema al obtener al trabajador, vuelva a intentarlo dentro de unos momentos.";
		res.json(data);
	});
});


/*POST modifica los datos de un trabajador mediante AJAX*/
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

	request.put({url: req.servicios.rrhh.trabajadores.modify_by_rut, timeout:timeoutGlobal, 
		form: {id_trabajador : id_trabajador, rut : rut, nombre : nombre, apellido : apellido, 
			email : email, password : password, telefono : telefono, fecha_contratacion : fecha_contratacion, 
			sueldo : sueldo, id_departamento_fk : id_departamento_fk, id_cargo_fk : id_cargo_fk}}, function(err,response,body){

		console.log("modificar trabajador")
		if (!err && response.statusCode == 200) {
	    	data.codigo = JSON.parse(body);
	    	data.mensaje = "Modificacion Exitosa."
	    	res.json(data);
	  	}
		
	}).on('error', function(){
		data.codigo = -1;
		data.mensaje = "Ocurrio un problema al modificar al trabajador, vuelva a intentarlo dentro de unos momentos.";
		res.json(data);
	});
});

/*POST Elimina trabajador por RUT mediante AJAX*/
router.post('/eliminarTrabajadorById', function(req, res, next) {
	var rut = req.body.rut;
	console.log(rut);

	var data = {};

	request.del({url:req.servicios.rrhh.trabajadores.delete_by_rut, timeout:timeoutGlobal, 
		form: {rut : rut}, qs:{rut : rut}}, function(err,response,body){

		console.log("Eliminar trabajador")
		if (!err && response.statusCode == 200) {
	    	data.codigo = JSON.parse(body);
			res.json(data)
	  	}

	  	;
	}).on('error', function(){
		data.codigo = -1;
		data.mensaje = "Ocurrio un problema al eliminar al trabajador, vuelva a intentarlo dentro de unos momentos.";
		res.json(data);
	});
});

/*GET Despliega pagina para el ingreso de trabajadores*/
router.get('/ingresarTrabajador', function(req, res, next) {
	console.log("Ingresar trabajador");
	var data = {};
	data.layout = 'rrhh/base/layout';
	res.render('rrhh/ingresarTrabajador', data);
});

/*POST metodo que mediante peticion AJAX ingresa un trabajador*/
router.post('/add_trabajador', function(req, res, next) {
	var data = {};
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

	//ingresar el trabajador 
	request.post({url:req.servicios.rrhh.trabajadores.add_trabajador, timeout:timeoutGlobal, 
		form: {rut : rut, nombre : nombre, apellido : apellido, 
			email : email, password : password, telefono : telefono, fecha_contratacion : fecha_contratacion, 
			sueldo : sueldo, id_departamento_fk : nombreDepartamento, id_cargo_fk : nombreCargo} }, function(err,response,body){ 

			if (!err && response.statusCode == 200) {
				//console.log(JSON.parse(body)); //body trae los datos del trabajador
				data.mensaje = "Trabajador ingresado correctamente";
				data.codigo = response.statusCode;
				res.json(data);
		  	}else{
		  		//Manejdo de errores del servicio
		  		if(!err && response.statusCode==500){
		  			var parse = JSON.parse(body);
		  			console.log(parse);
		  			if(parse.code==11000){
		  				data.codigo=11000; 
		  				data.mensaje="Error, email ya existe.";

		  			}
		  			res.json(data);
		  		}
		  	}
		  	
	}).on('error', function(){
		data.codigo = -1;
		data.mensaje = "Ocurrio un problema al ingresar al trabajador, vuelva a intentarlo dentro de unos momentos.";
		res.json(data);
	});
});

module.exports = router;
