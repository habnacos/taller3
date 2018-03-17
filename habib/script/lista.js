
$.getJSON("../json/usuarios.json", function( data ) {
    var obtJson = t;
});

$(document).ready(function () {
    //$.getJSON("../json/usuarios.json", function( data ) {
    	var count = 1;
	    var tabla = "<table class=lista border=1>";
	    tabla += "<tr class=encabezado><td rowspan=2>ORD</td><td rowspan=2><b>No. CEDULA</b>VERIFIQUE TODO EL NÚMERO</td><td colspan=3>APELLIDOS Y NOMBRES SEGUN CEDULA</td>";
	    tabla += "<tr 	class=encabezado><td>PRIMER APELLIDO</td><td>SEGUNDO APELLIDO</td><td>NOMBRES</td>";
		for (var i = 0; i<10; i++) {
			tabla += "<tr>"
			for (var j = 1; j <= 5; j++) {
				switch (j) {
					case 1:
						tabla += "<td><input type=checkbox class=voto>"+(count++)+"</td>";
						break;
					case 2:
						tabla += "<td>cedula</td>";
						break;
					default:
						tabla += "<td><input type=text class=texto></td>";
						break;
				}
			}
			tabla += "</tr>"
		}
		tabla += "</table>";
		$("#tabla").html(tabla);
	//})
});