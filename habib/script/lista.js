$(document).ready(function () {
	var tabla = "<table>";
	for (var i = 0; i < 10; i++) {
		tabla += "<tr>"
		for (var i = 0; i < 5; i++) {
			tabla += "<td>habib</td>";
		}
		tabla += "</tr>"
	}
	tabla += "</table>";
	$("#box").html(tabla);
});