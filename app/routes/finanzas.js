var express = require('express');
var request = require('request');
var router = express.Router();
var timeoutGlobal = 2000;

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
	var data = {cantidadProductos:2, cantidadOrdenes:3, cantidadClientes:4, cantidadOrdenesProducto: 2};

	var dataset = {d:data, layout:'finanzas/base/layout'};
	res.render('finanzas/index', dataset);
});

router.get('/listarOrdenProductos', function(req, res, next) {
	var data = {layout:'finanzas/base/layout'};

	request.get({url: req.servicios.finanzas.ordenes_compra.get_all, timeout:timeoutGlobal}, function(err,response,body){
		console.log("obtener listado de ordenes...")
		if (!err && response.statusCode == 200) {
			data.ordenes = JSON.parse(body);
			console.log(data);
			res.render('finanzas/listarOrdenProductos', data);
	  	}

	}).on('error', function(){
		//error
		data.codigo = -1;
		data.mensaje = "Ocurrio un problema al consultar las Ordenes, vuelva a intentarlo dentro de unos momentos.";
		res.render('finanzas/listarOrdenProductos', data);
	});
	
});

router.get('/ingresarOrdenProducto', function(req, res, next) {
	var data = {layout:'finanzas/base/layout'};
	res.render('finanzas/ingresarOrdenProducto', data);	
});

router.post('/ingresarOrden', function(req, res, next) {
	var data = {};
	var entrada = req.body.jsonParam;;
	console.log(entrada);

	console.log("Agregar orden de compra");
	request.post({url:req.servicios.finanzas.ordenes_compra.add_orden, timeout:timeoutGlobal, form: {datos : entrada}}, function(err,response,body){

		if (!err && response.statusCode == 200) {
	    	data.codigo=0;
	    	data.mensaje = JSON.parse(body);
	    	res.json(data);
	  	}

	}).on('error', function(){
		//TIMEOUT
		console.log("error");
		data.codigo = -1;
		data.mensaje = "Ocurrio un problema al ingresar la Orden, vuelva a intentarlo dentro de unos momentos.";

		res.json(data);
	});

});


router.post('/getOrdenProductoById', function(req, res, next) {
	var data = {};
	var entrada = req.body.id_orden_producto;;
	console.log(entrada);

	console.log("obtener orden de compra por id");
	request.get({url:req.servicios.finanzas.ordenes_compra.get_by_id, timeout:timeoutGlobal, form: {id_orden_producto : entrada}}, function(err,response,body){

		if (!err && response.statusCode == 200) {
	    	data = JSON.parse(body);
	    	data.codigo =response.statusCode;
	    	res.json(data);
	  	}

	}).on('error', function(){
		//TIMEOUT
		data.codigo = -1;
		data.mensaje = "Ocurrio un problema al obtener la Orden, vuelva a intentarlo dentro de unos momentos.";
		res.json(data);
	});

});

router.post('/modificarOrden', function(req, res, next) {
	var data = {};
	var entrada = req.body.jsonParam;;
	console.log(entrada);

	console.log("modificar orden de compra por id");
	request.put({url:req.servicios.finanzas.ordenes_compra.modify_by_id, timeout:timeoutGlobal, form: {datos : entrada}}, function(err,response,body){

		if (!err && response.statusCode == 200) {
	    	data.codigo = JSON.parse(body);
	    	res.json(data);
	  	}
		

	}).on('error', function(){
		//TIMEOUT
		data.codigo = -1;
		data.mensaje = "Ocurrio un problema al modificar la Orden, vuelva a intentarlo dentro de unos momentos.";
		res.json(data);
	});
});


router.post('/eliminarOrdenProductoById', function(req, res, next) {
	var data = {};
	var entrada = req.body.id_orden_producto;;
	console.log(entrada);

	console.log("eliminar orden de compra por id");
	request.del({url:req.servicios.finanzas.ordenes_compra.delete_by_id, timeout:timeoutGlobal, form: {id_orden_producto : entrada}}, function(err,response,body){

		if (!err && response.statusCode == 200) {
	    	data = JSON.parse(body);
	    	data.codigo =response.statusCode;
	    	console.log(data);
			res.json(data);
	  	}

	  	
	}).on('error', function(){
		//TIMEOUT
		data.codigo = -1;
		data.mensaje = "Ocurrio un problema al eliminar la Orden, vuelva a intentarlo dentro de unos momentos.";
		res.json(data);
	});

});



module.exports = router;