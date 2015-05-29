<%@include file="base/header.jsp"  %> 

<body>
	<%@include file="base/top_menu.jsp"  %> 

	<div class="container-fluid">
		<div class="row">
			<jsp:include page="base/left_menu.jsp" flush="true"></jsp:include>
			
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<h1 class="page-header">Listado de Clientes</h1>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>Nombre</th>
								<th>Apellido</th>
								<th>Direccion</th>
								<th>Telefono</th>																
								<th>Ciudad</th>
								<th>Region</th>
								<th>Modificar</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${clientes}" var="clt" varStatus="loop">
							<tr>
								<td>${loop.count}</td>
								<td>${clt.nombre}</td>
								<td>${clt.apellido}</td>
								<td>${clt.direccion}</td>
								<td>${clt.telefono}</td>
								<td>${clt.ciudad}</td>		
								<td>${clt.region}</td>																							
								<td><a href="#" class="modificar_cliente text-center" attr-id="${clt.id_cliente}"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>
								<td><a href="#" class="eliminar_cliente text-center" attr-id="${clt.id_cliente}"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></td>
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
	        <h4 class="modal-title">Modificar Cliente</h4>
	      </div>
	      <div class="modal-body">
	        <form class="form-signin" id="form_mod_cliente">
	        	<input type="hidden" id="input_id_cliente" name="id_cliente">
				<label for="input_nombre" class="sr-only">Nombre</label>
				<input name="nombre" type="text" id="input_nombre" class="form-control" placeholder="Nombre" required autofocus="">
				
				<label for="input_apellido" class="sr-only">Apellido</label>
				<input name="apellido" type="text" id="input_apellido" class="form-control" placeholder="Apellido"  required autofocus="">
				
				<label for="input_direccion" class="sr-only">Direccion</label>
				<input name="direccion" type="text" id="input_direccion" class="form-control" placeholder="Direccion"  autofocus="">
	      	
	      		<label for="input_telefono" class="sr-only">Telefono</label>
				<input name="telefono" type="text" id="input_telefono" class="form-control" placeholder="Telefono"  autofocus="">
	      	
	      		<label for="input_ciudad" class="sr-only">Ciudad</label>
				<input name="ciudad" type="text" id="input_ciudad" class="form-control" placeholder="Ciudad"  autofocus="">
	      	
	      		<label for="input_region" class="sr-only">Region</label>
				<input name="region" type="text" id="input_region" class="form-control" placeholder="Region"  autofocus="">
	      	
	      	</form>
		      <span id='msjws' class='alert alert-info hide' ></span>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
	        <button type="button" class="btn btn-primary" id="guardar_cliente">Guardar Cambios</button>
	      </div>
	    </div>
	  </div>
	</div>

	<jsp:include page="base/footer.jsp" flush="true"></jsp:include>
	<script>
		$(document).ready(function(){
			var reload = false;
			$(".modificar_cliente").click(function(){
				var entrada = $(this).attr("attr-id");
				$.post("getClienteById", {id_cliente: entrada}, function(json){
					if(json!=null){
						
						$("#input_id_cliente").val(json.id_cliente);
						$("#input_nombre").val(json.nombre);
						$("#input_apellido").val(json.apellido);
						$("#input_direccion").val(json.direccion);
						$("#input_telefono").val(json.telefono);
						$("#input_ciudad").val(json.ciudad);
						$("#input_region").val(json.region);
						
						$('#myModal').modal();
					}
				});
				
			});
			$("#guardar_cliente").click(function(){
				if($('#form_mod_cliente')[0].checkValidity()){
					$.post("modificarCliente", $("#form_mod_cliente").serialize(), function(json){
						$("#msjws").empty();
						$("#msjws").text(json.msj);
						$("#msjws").removeClass("hide");
						reload=true;
					});	
				}else{
					var $myForm = $("#form_mod_cliente");
					$('<input type="submit">').hide().appendTo($myForm).click().remove();
				}
			});
			
			$(".eliminar_cliente").click(function(){
				var entrada = $(this).attr("attr-id");
				console.log(entrada);
				if(confirm("¿Esta seguro que desea eliminar este cliente?")){
					$.post("eliminarClienteById", {id_cliente: entrada}, function(json){
						reload=true;
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
		#msjws{
			display:block;
		}
	</style>
</body>
</html>