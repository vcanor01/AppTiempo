let url = "https://raw.githubusercontent.com/vcanor01/3evaLLMM/main/DatosTiempo.json";
		

//Parte izquierda
const imgDiaActual = document.getElementById("imgDiaActual");
const temperaturaDiaActual= document.getElementById("temperaturaDiaActual");
const estadoDiaActual = document.getElementById("previsionDiaActual");
const ciudad = document.getElementById("ciudad");
const diaActual = document.getElementById("diaActualIzquierda");

//Parte derecha - Abajo
const vientoActual = document.getElementById("vientoDiaActual");
const humedadActual = document.getElementById("humedadDiaActual");


const diasElement= document.getElementsByClassName("dia");
const imgElement = document.getElementsByClassName("imgDia");
const temperaturaElement = document.getElementsByClassName("temperatura-dia");

async function obtenerJSON(url){
	const respuesta = await fetch(url);
	const json = await respuesta.json();
	return json;
}

obtenerJSON(url)
	.then(json=> {

		ciudad.innerText = json.ciudad;
		imgDiaActual.src = json.dias[0].estado.icono;
		temperaturaDiaActual.innerText= json.dias[0].temperatura + "ºC";
		estadoDiaActual.innerText = json.dias[0].estado.nombre;
		diaActual.innerText = json.dias[0].dia;

		vientoActual.innerText =   json.dias[0].viento + " km/h";
		humedadActual.innerText =  json.dias[0].humedad + " %";

		
		
		for (var i = 0; i < diasElement.length ; i++) {
			diasElement[i].innerText = json.dias[i+1].dia;
			temperaturaElement[i].innerText = json.dias[i+1].temperatura + " ºC";
			imgElement[i].src = json.dias[i+1].estado.icono;
		}
		


	});
