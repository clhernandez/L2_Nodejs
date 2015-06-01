var listaProductos = {}; //Almacenara los datos de los productos
var datosOrden = {};//almacenara los datos de la orden;
var datosCliente = {}; //almacenara los datos del cliente
listaProductos.productos=[];
listaProductos.cntProductos=0;//mantendra contados la cantidad de productos
$(document).ready(function(){

	$("#btn_ingresar_orden").click(function(){
		//descomentar para activar validaciones
		if($('#form_orden_producto')[0].checkValidity()){
			if($('#form_datos_cliente')[0].checkValidity()){
			console.log(listaProductos);
			console.log(datosOrden);
			datosCliente.nombre = $("#input_nombre").val();
			datosCliente.apellido = $("#input_apellido").val();
			datosCliente.direccion = $("#input_direccion").val();
			datosCliente.telefono = $("#input_telefono").val();
			datosCliente.ciudad = $("#input_ciudad").val();
			datosCliente.region = $("#input_region").val();
			console.log(datosCliente);
			var entrada = {};
			entrada = listaProductos;
			entrada.cliente = datosCliente;
			entrada.orden = datosOrden;
			console.log(entrada);
			console.log(JSON.stringify(entrada));
			var json = JSON.stringify(entrada);
			$.ajax({
				url:'ingresarOrden',
			  	type: "post", //This sends in url
			  	data: {jsonParam: json}, //This will encode your json for url automatically
			  	dataType: "json", //With this the response will be automatically json-decoded!
			  	success: function(json){ //Assuming your server output was '{"lastName":"Villegas"}' as string
			    	console.log(json);
			  	}
			});
			}else{
				var $myForm = $("#form_datos_cliente");
				$('<input type="submit">').hide().appendTo($myForm).click().remove();
			}
		}else{
			var $myForm = $("#form_orden_producto");
			$('<input type="submit">').hide().appendTo($myForm).click().remove();
		}
	});

	$("#btn_agragar_producto").click(function(){
		$(".modal-title").empty().append("Agregar Producto");
		$('#myModal').modal();
	});

	$('#myModal').on('hidden.bs.modal', function (e) {
	  $('#form_producto')[0].reset();
	});

	$("#guardar_producto").click(function(){
		var producto = {};
		if($('#form_producto')[0].checkValidity()){
			listaProductos.cntProductos=listaProductos.cntProductos+1;			
			producto.nombre= $("#input_nombre_producto").val();
			producto.precio = $("#input_precio").val();
			producto.descripcion = $("#input_descripcion").val();
			producto.cantidad = $("#input_cantidad").val();
			producto.id_prd = listaProductos.cntProductos;

			agregar_producto_tabla(producto);
			actualizarOrden();
		}else{
			var $myForm = $("#form_producto");
			$('<input type="submit">').hide().appendTo($myForm).click().remove();
		}
		
	});

	$('#myModalMod').on('hidden.bs.modal', function (e) {
	  $('#form_producto_mod')[0].reset();
	});

	$("#btn_modificar_prd").click(function(){
		var producto = {};
		if($('#form_producto_mod')[0].checkValidity()){
			producto.nombre=$("#myModalMod #input_nombre_producto").val();
			producto.precio = $("#myModalMod #input_precio").val();
			producto.descripcion = $("#myModalMod #input_descripcion").val();
			producto.cantidad = $("#myModalMod #input_cantidad").val();
			producto.id_prd = parseInt($("#myModalMod #id_prd_mod").val());
			eliminarPrd(producto.id_prd);

			listaProductos.productos.push(producto);
			agregar_producto_tabla(producto);
			actualizarOrden();
			console.log(listaProductos.productos);
		}else{
			var $myForm = $("#form_producto_mod");
			$('<input type="submit">').hide().appendTo($myForm).click().remove();
		}
	});
});

function agregar_producto_tabla(producto){
	listaProductos.productos.push(producto);

	var td_num = "<td>"+producto.id_prd+"</td>";
	var td_nombre = "<td>"+producto.nombre+"</td>";
	var td_descripcion = "<td>"+producto.descripcion+"</td>";
	var td_precio = "<td>"+producto.precio+"</td>";
	var td_cantidad = "<td>"+producto.cantidad+"</td>";
	var td_modificar = "<td><a href='#' class='modificar_producto text-center' onclick='cargarModificacionPrd("+producto.id_prd+");'><span class='glyphicon glyphicon-edit' aria-hidden='true'></span></a></td>";
	var td_eliminar = "<td><a href='#' class='eliminar_producto text-center' onclick='eliminarPrd("+producto.id_prd+");'><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></a></td>";
	$("#tabla_productos").append("<tr id='producto_"+producto.id_prd+"'>"+td_num+td_nombre+td_descripcion+td_precio+td_cantidad+td_modificar+td_eliminar+"</tr>");
}

function actualizarOrden(){
	var totalBruto = 0;
	var iva = 0;
	var totalNeto=0;
	console.log(listaProductos.productos);

	for (var i = 0; i < listaProductos.productos.length; i++) {
		console.log(listaProductos.productos[i]);
		totalBruto = totalBruto + parseInt(listaProductos.productos[i].precio);
	};
	iva = parseInt(totalBruto * 0.19);
	totalNeto = totalBruto+iva;

	datosOrden.fechaOrden = $("#input_fecha_orden").val();
	datosOrden.totalBruto = totalBruto;
	datosOrden.iva = iva;
	datosOrden.totalNeto = totalNeto;

	$("#input_total_bruto").val(totalBruto);
	$("#input_iva").val(iva);
	$("#input_total_neto").val(totalNeto);

}

function cargarModificacionPrd(id){
	var producto = {};
	for (var i = 0; i < listaProductos.productos.length; i++) {
		if(listaProductos.productos[i].id_prd===id){
			producto = listaProductos.productos[i];
			break;
		}
	};
	console.log(producto);

	$("#myModalMod #input_nombre_producto").val(producto.nombre);
	$("#myModalMod #input_precio").val(producto.precio);
	$("#myModalMod #input_descripcion").val(producto.descripcion);
	$("#myModalMod #input_cantidad").val(producto.cantidad);
	$("#myModalMod #id_prd_mod").val(producto.id_prd);

	$('#myModalMod').modal();
}

function eliminarPrd(id){
	console.log("Eliminar: "+id);

	for (var i = 0; i < listaProductos.productos.length; i++) {
		if(listaProductos.productos[i].id_prd===id){
			listaProductos.productos.splice(i, 1);
			break;
		}
	};
	$("#producto_"+id).remove();
	actualizarOrden();
}