<%@include file="base/header.jsp"  %> 

<body>
	<%@include file="base/top_menu.jsp"  %> 

	<div class="container-fluid">
		<div class="row">
			<jsp:include page="base/left_menu.jsp" flush="true"></jsp:include>
			
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<h1 class="page-header">Listado Orden Productos</h1>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>Id Producto</th>
								<th>Cantidad</th>
								<th>Modificar</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${ordenProductos}" var="oprd" varStatus="loop">
							<tr>
								<td>${loop.count}</td>
								<td>${oprd.id_producto}</td>
								<td>${oprd.cantidad}</td>
								<td><a href="#" class="modificar_orden_producto text-center" attr-id="${oprd.id_orden_producto}"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>
								<td><a href="#" class="eliminar_orden_producto text-center" attr-id="${oprd.id_orden_producto}"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></td>
							</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade" id="myModal">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title">Modificar Orden Producto</h4>
	      </div>
	      <div class="modal-body">
	        <form class="form-signin" id="form_mod_orden_producto">
	        	<input type="hidden" id="input_id_orden_producto" name="id_orden_producto">
				<label for="input_nombre" class="sr-only">Producto</label>
				<select class="form-control" id="input_id_producto" name="id_producto" required>
					<c:forEach items="${productos}" var="prd" varStatus="loop">
						<option value="${prd.id_producto}">${prd.nombre}</option>
					</c:forEach>
				</select>
				<label for="input_cantidad" class="sr-only">Cantidad Producto</label>
				<input name="cantidad" type="number" id="input_cantidad" class="form-control" placeholder="Cantidad Producto"  autofocus="">
			</form>
		      <span id='msjws' class='alert alert-info hide' ></span>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
	        <button type="button" class="btn btn-primary" id="guardar_orden_producto">Guardar Cambios</button>
	      </div>
	    </div>
	  </div>
	</div>

	<jsp:include page="base/footer.jsp" flush="true"></jsp:include>
	<script>
		$(document).ready(function(){
			var reload = false;
			$(".modificar_orden_producto").click(function(){
				var entrada = $(this).attr("attr-id");
				$.post("getOrdenProductoById", {id_orden_producto: entrada}, function(json){
					if(json!=null){
						console.log(json);
						$("#input_id_orden_producto").val(json.id_orden_producto);
						$("#input_id_producto option[value="+ json.id_producto +"]").attr("selected",true);
						$("#input_cantidad").val(json.cantidad);
						
						$('#myModal').modal();
					}
				});
				
			});
			$("#guardar_orden_producto").click(function(){
				if($('#form_mod_orden_producto')[0].checkValidity()){
					$.post("modificarOrdenProducto", $("#form_mod_orden_producto").serialize(), function(json){
						$("#msjws").empty();
						$("#msjws").text(json.msj);
						$("#msjws").removeClass("hide");
						reload=true;
					});	
				}else{
					var $myForm = $("#form_mod_orden_producto");
					$('<input type="submit">').hide().appendTo($myForm).click().remove();
				}
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
			$('#myModal').on('hide.bs.modal', function (e) {
				if(reload==true){
					location.reload();
				}
			});
		});
	</script>
	<style>
		#myModal form input{
			margin-bottom:5px;
		}
		#myModal form select{
			margin-bottom:5px;
		}
		#msjws{
			display:block;
		}
	</style>
</body>
</html>