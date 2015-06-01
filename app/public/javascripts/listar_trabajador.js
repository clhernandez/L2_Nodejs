$(document).ready(function(){
	var reload = false;
	$(".modificar_trabajador").click(function(){
		var entrada = $(this).attr("attr-id");
		console.log(entrada);
		$.get("getTrabajadorByRut", {rut: entrada}, function(json){
			console.log(json);
			if(json.codigo!=-1){
				$("#input_id_trabajador").val(json._id);
				$("#input_rut").val(json.rut);
				$("#input_nombre").val(json.nombre);
				$("#input_apellido").val(json.apellido);
				$("#input_email").val(json.email);
				$("#input_password").val(json.password);
				$("#input_telefono").val(json.telefono);
				$("#input_fecha_contratacion").val(json.fecha_contratacion);
				$("#input_sueldo").val(json.sueldo);
				
				$("#input_id_cargo_fk option[value='"+ json.cargo +"']").attr("selected",true);
				$("#input_id_departamento_fk option[value='"+ json.departamento +"']").attr("selected",true);
				
				$('#myModal').modal();
			}else{
				$("#msj_mod_trb").empty().text(json.mensaje);
				$("#modalResp").modal();
			}
		});
		
	});

	$("#guardar_trabajador").click(function(){
		if($('#form_mod_trabajador')[0].checkValidity()){
			$.post("modificar_trabajador", $("#form_mod_trabajador").serialize(), function(json){
				$("#msjws").empty();
				$("#msjws").text(json.mensaje);
				$("#msjws").removeClass("hide");
				reload=true;
			});
		}else{
			var $myForm = $("#form_mod_trabajador");
			$('<input type="submit">').hide().appendTo($myForm).click().remove();
		}
		
	});
	
	$(".eliminar_trabajador").click(function(){
		var entrada = $(this).attr("attr-id");
		console.log(entrada);
		if(confirm("¿Esta seguro que desea eliminar a este trabajador?")){
			$.post("eliminarTrabajadorById", {rut: entrada}, function(json){
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