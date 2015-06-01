	$(document).ready(function(){
		var reload = false;
		$(".modificar_orden_producto").click(function(){
			var entrada = $(this).attr("attr-id");
			$.post("getOrdenProductoById", {id_orden_producto: entrada}, function(json){
				if(json!=null){
					console.log(json);
					$("#input_id_orden_producto").val(json._id);

					//datos orden
					var orden = json.orden;
					$("#input_fecha_orden")[0].value = orden.fechaOrden;
					$("#input_total_bruto").val(orden.totalBruto);
					$("#input_iva").val(orden.iva);
					$("#input_total_neto").val(orden.totalNeto);

					//Datos cliente
					var cliente = json.cliente;
					console.log(cliente);
					$("#input_nombre").val(cliente.nombre);
					$("#input_apellido").val(cliente.apellido);
					$("#input_direccion").val(cliente.direccion);
					$("#input_telefono").val(cliente.telefono);
					$("#input_ciudad").val(cliente.ciudad);
					$("#input_region").val(cliente.region);

					//productos
					var productos= json.productos;
					for (var i = 0; i < productos.length; i++) {
						console.log(productos[i]);
						listaProductos.cntProductos=listaProductos.cntProductos+1;
						agregar_producto_tabla(productos[i]);
					};

					$("#input_id_producto option[value="+ json.id_producto +"]").attr("selected",true);
					$("#input_cantidad").val(json.cantidad);
					
					$('#contenedor_mod_orden').slideToggle();
				}
			});
			
		});
		$("#btn_modificar_orden").click(function(){
			if($('#form_orden_producto')[0].checkValidity()){
				if($('#form_datos_cliente')[0].checkValidity()){
				actualizarOrden();

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
				entrada.id_orden = $("#input_id_orden_producto").val();
				entrada.cliente = datosCliente;
				entrada.orden = datosOrden;

				console.log(JSON.stringify(entrada));

				var json = JSON.stringify(entrada);

				$.ajax({
					url:'modificarOrden',
				  	type: "post", //This sends in url
				  	data: {jsonParam: json}, //This will encode your json for url automatically
				  	dataType: "json", //With this the response will be automatically json-decoded!
				  	success: function(json){ //Assuming your server output was '{"lastName":"Villegas"}' as string
				  		console.log(json);
				  		if(json.codigo==1){
				  			$("#msj_mod_orden").text("Modificacion realizada correctamente");
				  			$('#modalResp').modal();
				  		}else{
							$("#msj_mod_trb").empty().text(json.mensaje);
							$("#modalResp").modal();
						}
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

		$('#modalResp').on('hide.bs.modal', function (e) {
			location.reload();
		});
		
		$(".eliminar_orden_producto").click(function(){
			var entrada = $(this).attr("attr-id");
			console.log(entrada);
			if(confirm("¿Esta seguro que desea eliminar esta orden producto?")){
				$.post("eliminarOrdenProductoById", {id_orden_producto: entrada}, function(json){
					location.reload();
				});
			}
			
		});
	});