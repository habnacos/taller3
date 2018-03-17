var obtJson = '[{"cedula":"1082929730","isJurado":false},{"cedula":"1082929731","isJurado":false},{"cedula":"1082929732","isJurado":false},'+
	'{"cedula":"1082929733","isJurado":false},{"cedula":"1082929734","isJurado":false},{        "cedula":"1082929735","isJurado":true},'+
	'{"cedula":"1082929736","isJurado":true},{"cedula":"1082929737","isJurado":true},{"cedula":"1082929738","isJurado":true},{"cedula":'+
	'"1082929739","isJurado":true},{"cedula":"1082929740","isJurado":false},{"cedula":"1082929741","isJurado":false},{"cedula":"1082929742",'+
	'"isJurado":false},{"cedula":"1082929743","isJurado":false},{"cedula":"1082929744","isJurado":false},{"cedula":"1082929745","isJurado":false'+
    '},{"cedula":"1082929746","isJurado":false},{"cedula":"1082929747","isJurado":false},{"cedula":"1082929748","isJurado":false},{"cedula":'+
    '"1082929749","isJurado":false},{"cedula":"1082929750","isJurado":false},{"cedula":"1082929751","isJurado":false},{"cedula":"1082929752",'+
    '"isJurado":false},{"cedula":"1082929753","isJurado":false},{"cedula":"1082929754","isJurado":false},{"cedula":"1082929755","isJurado":false},'+
    '{"cedula":"1082929756","isJurado":false},{"cedula":"1082929757","isJurado":false},{"cedula":"108292959","isJurado":false},{"cedula":"1082929760",'+
    '"isJurado":false},{"cedula":"1082929761","isJurado":false},{"cedula":"1082929762","isJurado":false},{"cedula":"1082929763","isJurado":false}]';



$(document).ready(function () {
    //$.getJSON("../json/usuarios.json", function( data ) {
    	var count = 1;
	    var tabla = "<table class=lista border=1>";
	    var usuaros = JSON.parse(obtJson);

	    tabla += "<tr class=encabezado><td rowspan=2>ORD</td><td rowspan=2><b>No. CEDULA</b>VERIFIQUE TODO EL NÚMERO</td><td colspan=3>APELLIDOS Y NOMBRES SEGUN CEDULA</td>";
	    tabla += "<tr 	class=encabezado><td>PRIMER APELLIDO</td><td>SEGUNDO APELLIDO</td><td>NOMBRES</td>";
		for (var i = 0; i<usuaros.length; i++) {
			tabla += "<tr>"
			for (var j = 1; j <= 5; j++) {
				switch (j) {
					case 1:
						tabla += "<td><input type=checkbox class=voto>"+(count++)+"</td>";
						break;
					case 2:
						tabla += "<td id=vt>"+usuaros[i].cedula+"</td>";
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

function show5(){
	if (!document.layers&&!document.all&&!document.getElementById)
	return

	var Digital=new Date()
	var hours=Digital.getHours()
	var minutes=Digital.getMinutes()
	var seconds=Digital.getSeconds()

	var dn="PM"
	if (hours<12)
	dn="AM"
	if (hours>12)
	hours=hours-12
	if (hours==0)
	hours=12

	if (minutes<=9)
	minutes="0"+minutes
	if (seconds<=9)
	 seconds="0"+seconds
	//change font size here to your desire
	myclock="<font size='5' face='Arial' ><b><font size='1'>Hora actual:</font></br>"+hours+":"+minutes+":"
	+seconds+" "+dn+"</b></font>"
	if (document.layers){
	document.layers.liveclock.document.write(myclock)
	document.layers.liveclock.document.close()
	}
	else if (document.all)
	liveclock.innerHTML=myclock
	else if (document.getElementById)
	document.getElementById("liveclock").innerHTML=myclock
	setTimeout("show5()",1000)
}
window.onload=show5