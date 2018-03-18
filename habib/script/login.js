var usuarios = '[{"cedula":"1082929730","isJurado":true},{"cedula":"1082929731","isJurado":false}]'

$(document).ready(function() {
	$("#entrar").click(function() {
		var objJSON = JSON.parse(usuarios);
		var sw = true;
		for (var i = 0; i < objJSON.length; i++) {
			if (objJSON[i].cedula == document.getElementById("cedula").value) {
				if (objJSON[i].isJurado) {
					window.location.href = "html/lista.html";
				} else {
					window,location.href = "html/tarjeton.html";
				}
				sw = false;
				break;
			}
		}
		if (sw) 
		alertify.alert("Cédula no registrada.");
	});
});