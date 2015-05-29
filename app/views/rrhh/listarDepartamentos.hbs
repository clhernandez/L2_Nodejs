<%@include file="base/header.jsp"  %> 

<body>
	<%@include file="base/top_menu.jsp"  %> 

	<div class="container-fluid">
		<div class="row">
			<jsp:include page="base/left_menu.jsp" flush="true"></jsp:include>
			
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<h1 class="page-header">Listado Departamentos</h1>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>ID</th>
								<th>Nombre Departamento</th>
								<th>Administrador</th>
								<th>Ubicacion</th>
								<th>Modificar</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${departamentos}" var="dep">
							<tr>
								<td>${dep.id_departamento}</td>
								<td>${dep.nombre_departamento}</td>
								<td>${dep.administrador}</td>
								<td>${dep.ubicacion}</td>
								<td><a href="#" class="modificar_departamento text-center" attr-id="${dep.id_departamento}"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>
								<td><a href="#" class="eliminar_departamento text-center" attr-id="${dep.id_departamento}"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></td>
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
	        <h4 class="modal-title">Modificar Departamento</h4>
	      </div>
	      <div class="modal-body">
	        <form class="form-signin" action="modificarDepartamento" name="form_mod_departamento" id="form_mod_departamento">
	        	<input name="id_departamento" type="hidden" id="input_id_departamento" class="form-control">
				<label for="input_nombre_departamento" class="sr-only">nombre_departamento</label>
				<input name="nombre_departamento" type="text" id="input_nombre_departamento" class="form-control" placeholder="nombre_departamento" required autofocus="">
				<label for="input_administrador" class="sr-only">administrador</label>
				<input name="administrador" type="text" id="input_administrador" class="form-control" placeholder="administrador" required autofocus="">
				<label for="input_ubicacion" class="sr-only">ubicacion</label>
				<input name="ubicacion" type="text" id="input_ubicacion" class="form-control" placeholder="ubicacion"  required autofocus="">
			      </form>
			      <span id='msjws' class='alert alert-info hide' ></span>
	      </div>
	      
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
	        <button type="button" class="btn btn-primary" id="guardar_departamento">Guardar Cambios</button>
	      </div>
	    </div>
	  </div>
	</div>

	<jsp:include page="base/footer.jsp" flush="true"></jsp:include>
	<script>
		$(document).ready(function(){
			var reload = false;
			$(".modificar_departamento").click(function(){
				var entrada = $(this).attr("attr-id");
				console.log(entrada);
				$.post("getDepartamentoById", {id_departamento: entrada}, function(json){
					if(json!=null){
						$("#input_id_departamento").val(json.id_departamento);
						$("#input_nombre_departamento").val(json.nombre_departamento);
						$("#input_administrador").val(json.administrador);
						$("#input_ubicacion").val(json.ubicacion);
						$('#myModal').modal();
					}
				});
				
			});
			$("#guardar_departamento").click(function(){
				$.post("modificar_departamento", $("#form_mod_departamento").serialize(), function(json){
					$("#msjws").empty();
					$("#msjws").text(json.msj);
					$("#msjws").removeClass("hide");
					reload=true;
				});
			});
			
			$(".eliminar_departamento").click(function(){
				var entrada = $(this).attr("attr-id");
				if(confirm("¿Esta seguro que desea eliminar a este departamento?")){
					
					$.post("eliminarDepartamentoById", {id_departamento: entrada}, function(json){
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
		#msjws{
			display:block;
		}
	</style>
</body>
</html>