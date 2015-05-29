<%@include file="base/header.jsp"  %> 

<body>
	<%@include file="base/top_menu.jsp"  %> 

	<div class="container-fluid">
		<div class="row">
			<jsp:include page="base/left_menu.jsp" flush="true"></jsp:include>
			
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<h1 class="page-header">Listado de Ordenes</h1>
				<div class="table-responsive">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>Id Cliente</th>
								<th>Fecha Orden</th>
								<th>Modificar</th>
								<th>Eliminar</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${ordenes}" var="ord" varStatus="loop">
							<tr>
								<td>${loop.count}</td>
								<td>${ord.id_cliente}</td>
								<td>${ord.fecha_orden}</td>
								<td><a href="#" class="modificar_orden text-center" attr-id="${ord.id_orden}"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></a></td>
								<td><a href="#" class="eliminar_orden text-center" attr-id="${ord.id_orden}"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></a></td>
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
	        <h4 class="modal-title">Modificar Orden</h4>
	      </div>
	      <div class="modal-body">
	        <form class="form-signin" id="form_mod_orden">
	        	<input type="hidden" id="input_id_orden" name="id_orden">
				<label for="input_nombre" class="sr-only">Cliente</label>
				<select class="form-control" id="input_id_cliente" name="id_cliente" required>
					<c:forEach items="${clientes}" var="clt" varStatus="loop">
						<option value="${clt.id_cliente}">${clt.nombre}</option>
					</c:forEach>
				</select>
				<label for="input_fecha_orden" class="sr-only">Fecha Orden</label>
				<input name="fecha_orden" type="text" id="input_fecha_orden" class="form-control" placeholder="Fecha Orden"  autofocus="">
			</form>
		      <span id='msjws' class='alert alert-info hide' ></span>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
	        <button type="button" class="btn btn-primary" id="guardar_orden">Guardar Cambios</button>
	      </div>
	    </div>
	  </div>
	</div>

	<jsp:include page="base/footer.jsp" flush="true"></jsp:include>
	<script>
		$(document).ready(function(){
			var reload = false;
			$(".modificar_orden").click(function(){
				var entrada = $(this).attr("attr-id");
				$.post("getOrdenById", {id_orden: entrada}, function(json){
					if(json!=null){
						console.log(json);
						$("#input_id_orden").val(json.id_orden);
						$('.selDiv option[value="'+json.id_cliente+'"]')
						$("#input_fecha_orden").val(json.fecha_orden);
						
						$('#myModal').modal();
					}
				});
				
			});
			$("#guardar_orden").click(function(){
				if($('#form_mod_orden')[0].checkValidity()){
					$.post("modificarOrden", $("#form_mod_orden").serialize(), function(json){
						$("#msjws").empty();
						$("#msjws").text(json.msj);
						$("#msjws").removeClass("hide");
						reload=true;
					});	
				}else{
					var $myForm = $("#form_mod_orden");
					$('<input type="submit">').hide().appendTo($myForm).click().remove();
				}
			});
			
			$(".eliminar_orden").click(function(){
				var entrada = $(this).attr("attr-id");
				console.log(entrada);
				if(confirm("¿Esta seguro que desea eliminar esta orden?")){
					$.post("eliminarOrdenById", {id_orden: entrada}, function(json){
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