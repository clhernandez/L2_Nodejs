<%@include file="base/header.jsp"  %> 

<body>
	<%@include file="base/top_menu.jsp"  %> 

	<div class="container-fluid">
		<div class="row">
			<jsp:include page="base/left_menu.jsp" flush="true"></jsp:include>
			
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<h1 class="page-header">Listado de Cargos</h1>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>Nombre del Cargo</th>
								<th>Sueldo Minimo</th>
								<th>Sueldo Maximo</th>
								<th>Modificar</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${cargos}" var="crg">
							<tr>
								<td>${crg.id_cargo}</td>
								<td>${crg.nombre_cargo}</td>
								<td>${crg.sueldo_min}</td>
								<td>${crg.sueldo_max}</td>
								<td><a href="#" class="modificar_cargo text-center" attr-id="${crg.id_cargo}"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>
								<td><a href="#" class="eliminar_cargo text-center" attr-id="${crg.id_cargo}"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></td>
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
	        <h4 class="modal-title">Modificar Cargo</h4>
	      </div>
	      <div class="modal-body">
	        <form class="form-signin" action="modificarCargo" name="form_mod_cargo" id="form_mod_cargo">
	        	<input name="id_cargo" type="hidden" id="input_id_cargo" class="form-control">
				<label for="input_nombre_cargo" class="sr-only">cargo</label>
				<input name="nombre_cargo" type="text" id="input_nombre_cargo" class="form-control" placeholder="nombre_cargo" required autofocus="">
				<label for="input_sueldo_min" class="sr-only">sueldo minimo</label>
				<input name="sueldo_min" type="number" id="input_sueldo_min" class="form-control" placeholder="sueldo_min" required autofocus="">
				<label for="input_sueldo_max" class="sr-only">sueldo maximo</label>
				<input name="sueldo_max" type="number" id="input_sueldo_max" class="form-control" placeholder="sueldo_max"  required autofocus="">
			</form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
	        <button type="button" class="btn btn-primary" id="guardar_cargo">Guardar Cambios</button>
	      </div>
	    </div>
	  </div>
	</div>

	<jsp:include page="base/footer.jsp" flush="true"></jsp:include>
	<script>
	$(document).ready(function(){
		$(".modificar_cargo").click(function(){
			var entrada = $(this).attr("attr-id");
			console.log(entrada);
			$.post("getCargoById", {id_cargo : entrada}, function(json){
				console.log(json);
				if(json!=null){
					
					$("#input_id_cargo").val(json.id_cargo);
					$("#input_nombre_cargo").val(json.nombre_cargo);
					$("#input_sueldo_min").val(json.sueldo_min);
					$("#input_sueldo_max").val(json.sueldo_max);
					
					$('#myModal').modal();
				}
			});
			
		});
		$("#guardar_cargo").click(function(){
			console.log( $("#form_mod_cargo").serialize() );
			$.post("modificar_cargo", $("#form_mod_cargo").serialize(), function(json){
				console.log(json);
			});
		});
		
		$(".eliminar_cargo").click(function(){
			var entrada = $(this).attr("attr-id");
			console.log(entrada);
			if(confirm("¿Esta seguro que desea eliminar este cargo?")){
				
				$.post("eliminarCargoById", {id_cargo: entrada}, function(json){
					
				});
				
			}
			
		});
	});
	</script>
	<style>
		#myModal form input{
			margin-bottom:5px;
		}
	</style>
</body>
</html>