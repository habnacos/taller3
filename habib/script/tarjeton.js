var partidos = [
	"POLO DEMOCRATICO ALTERNATIVO", "PARTIDO VERDE", "PARTIDO CONCERVADOR COLOMBIANO", "ALIANZA SOCIAL AFROCOLOMBIANA SAS",
	"PARTIDO DE INTEGRACION SOCIAL", "PARTIDO LIBERAL COLOMBIANO", "PARTIDO DE INTEGRACION NACIONAL", "PARTIDO SOCIAL DE UNIDAD NACIONAL", 
	"PARTIDO CAMBIO RADICAL", "MOVIMIENTO MIRA", "PARTIDO CRISTIANO", "MOVIMIENTO APERTURA LIBERAL", 
	"COMPROMISO CIUDADANO DE COLOMBIA", "VOTO EN BLANCO"
];
var numPartido = -1;
var numCandidato = -1;

function acceder(){
	if (document.getElementById("cedula").value == 123) {
		document.getElementById("login").style.display = "none";
		document.getElementById("tarjeton").style.display = "block";
	}
}

function cancelar() {
	document.getElementById("login").style.display = "block";
	document.getElementById("tarjeton").style.display = "none";
}

function crear_candidatos() {
	for (var i = 1; i <= 100; i++) {
		var boton = document.createElement("button");
		var num = document.createTextNode(i);
		boton.type = "button"
		boton.value = i;
		boton.appendChild(num)
		boton.className = "diseño_candidato";
		boton.addEventListener('click', voto_candidato(boton))
		document.getElementById("candidatos").appendChild(boton);
	}
}

function crear_partidos() {
	for (var i = 0; i < 14; i++) {
		var img = document.createElement("IMG");
		img.type = "IMG";
		img.setAttribute("src", "../image/" + (i+1) + ".png");
		img.className = "diseño_partidos";
		img.addEventListener('click', voto(img, (i)))
		document.getElementById("partidos").appendChild(img);
	}
}

function voto(img, num) {
	img.addEventListener('click', function(){
		if (numPartido == -1) {
			numPartido = num;
			img.className = "select_partido";
		}
		else {
			if (numPartido == num) {
				numPartido = -1;
				img.className = "diseño_partidos";
			}
		}
	})
}

function voto_candidato(boton) {
	boton.addEventListener('click', function(){
		if (numCandidato == -1) {
			numCandidato = boton.value;
			boton.className = "select_candidato";
		}
		else {
			if (numCandidato == boton.value) {
				numCandidato = -1;
				boton.className = "diseño_candidato";
			}
		}
	})
}

function confirmar() {

	if (partidos[numPartido] == "VOTO EN BLANCO") {
		alert("VOTASTE EN BLANCO");
	}
	else if (numCandidato != -1 && numPartido != -1) {
		alert("Votaste por el " + partidos[numPartido] + " y el número de candidato " + numCandidato);
	}

}