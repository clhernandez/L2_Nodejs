var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dashboard', function(req, res, next) {

	var data = {cantidadProductos:2, cantidadOrdenes:3, cantidadClientes:4, cantidadOrdenesProducto: 2};


	var dataset = {d:data, layout:'finanzas/base/layout'};
	res.render('finanzas/index', dataset);
});

router.get('/listarProductos', function(req, res, next) {
	var data = {layout:'finanzas/base/layout'};

	res.render('finanzas/listarProductos', data);
});

module.exports = router;
