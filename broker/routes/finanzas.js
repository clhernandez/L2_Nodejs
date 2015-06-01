var express = require('express');
var request = require('request');
var ObjectId = require('mongodb').ObjectID;
var router = express.Router();

router.get('/ordenes/get_all', function (req, res){
	console.log("Listar ordenes de compra");
	var ordenes = [];

	req.db.ordenes.find({}).each(function(err, orden) {
		if(orden!=null){
			//Agregar los ordenes obtenidos a un array
			ordenes.push(orden);
		}else{
			//al no encontrar mas ordenes retorna la respuesta.
			if(ordenes.length==0){
				ordenes.push({error:1, mensaje:'No exiten ordenes'});
			}
			res.json(ordenes);
		}
	});
});

router.post('/ordenes/add_orden', function (req, res){
	console.log("Ingresar ordenes de compra");
	var datos = JSON.parse(req.body.datos);
	console.log(datos.productos);
	var documento = [datos];
	console.log(documento);
	//res.json({codigo:1, mensaje:"Orden ingresada correctamente"});

	req.db.ordenes.insert(documento, function(err, result) {
		    if (err){
		    	result = err;
		    	res.json(500, result);
		    }else{
		    	console.log("add orden: "+result);
		   		res.json(result);
		    }
	});
});

router.get('/ordenes/get_by_id', function (req, res){
	console.log("obtener ordenes de compra por id");
	var id_orden = req.body.id_orden_producto;
	console.log(id_orden);

	req.db.ordenes.findOne({"_id": new ObjectId(id_orden)} ,function(err, result) {
		if (err){
	    	result = err;
	    	res.json(500, result);
	    }else{
	    	console.log("Orden: "+result);
	   		res.json(result);
	    }
	});
});

router.put('/ordenes/modify_by_id', function (req, res){
	console.log("Modificar orden de trabajo by id");
	var datos = JSON.parse(req.body.datos);
	var documento = datos;
	console.log(documento);


	req.db.ordenes.update({"_id": new ObjectId(datos.id_orden)},documento, function(err, result){
		if (err){
	    	result = err;
	    	console.log(result);
	    	res.json(500, result);
	    }else{
	    	console.log("res update: "+result);
	   		res.json(result);
	    }
	});
});

router.delete('/ordenes/delete_by_id', function (req, res){
	console.log("eliminar orden de compra por id");
	var id_orden = req.body.id_orden_producto;
	console.log(id_orden);

	req.db.ordenes.remove({"_id": new ObjectId(id_orden)} ,function(err, result) {
		if (err){
	    	result = err;
	    	res.json(500, result);
	    }else{
	    	console.log("Orden: "+result);
	   		res.json(result);
	    }
	});
});




module.exports = router;