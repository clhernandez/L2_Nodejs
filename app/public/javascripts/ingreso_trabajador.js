$(document).ready(function(){
	$("#btn_add_trabajador").click(function(){
		if($('#form_add_trabajador')[0].checkValidity()){
			$.post("add_trabajador", $("#form_add_trabajador").serialize(), function(json){
				console.log(json);
				if(json.codigo!=-1){
					$("#form_add_trabajador")[0].reset();
				}
				$("#mensaje").empty().append(json.mensaje);
				$("#mensaje").removeClass('hide');
			});
		}else{
			var $myForm = $("#form_add_trabajador");
			$('<input type="submit">').hide().appendTo($myForm).click().remove();
		}
	});
});