var obtJson;


$.getJSON("../json/usuarios.json", function( data ) {
    obtJson = data.usuarios;
    console.log(obtJson);
})

$(document).ready(function () {
    //$.getJSON("../json/usuarios.json", function( data ) {
    	var count = 1;
	    var tabla = "<table class=lista border=1>";
		for (var i = 0; i<1000; i++) {
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