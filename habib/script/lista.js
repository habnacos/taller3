var obtJson;

$getJSON("../json/usuarios.json", function(data) {
	obtJson = data.items;
	alert(obtJson);
})


$(document).ready(function () {
	var tabla = "<table>";


	for (var i = 0; i < 10; i++) {
		tabla += "<tr>"
		for (var j = 0; j < 5; j++) {
			tabla += "<td>habib</td>";
		}
		tabla += "</tr>"
	}
	tabla += "</table>";
	alert(tabla);
	$("#box").html(tabla);
});