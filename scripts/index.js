"use strict";

let discos = [];

fetch("/p1-parcial-1/discos.json")
	.then((response) => response.json())
	.then((json) => {
		json.forEach((disco) => {
			discos.push(
				new Disco(
					disco.nombre,
					disco.artista,
					disco.id,
					disco.portada,
					disco.pistas,
				),
			);
		});
		mostrar();
	});

function cargar() {
	let nombreDisco = pedirNombreDeDisco();
	let artista = pedirArtista();
	let id = pedirId();
	let portada = pedirPortada();
	let pistas = [];
	pistas = pedirPistas();
	let disco = new Disco(nombreDisco, artista, id, portada, pistas);
	discos.push(disco);
	mostrar();
}

/**
 * Llamada desde un boton. Muestra todos los discos disponibles.
 */

function mostrar() {
	const div = document.querySelector("#discos");
	div.innerHTML = ""; // Limpiar el contenido previo

	discos.forEach((disco) => {
		const discoDiv = document.createElement("div");
		discoDiv.className = "disco";
		// Mostrar pistas como lista
		let pistasHtml = "";
		if (Array.isArray(disco.pistas)) {
			pistasHtml = "<ul>";
			disco.pistas.forEach((pista) => {
				const minutos = Math.floor(pista.duracion / 60);
				const segundos = pista.duracion % 60;
				const duracionFormateada = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
				const color = pista.duracion > 180 ? " #e62dffbd;" : "white";
				pistasHtml += `<li style="color: ${color};">${pista.nombre} (${duracionFormateada})</li>`;
			});
			pistasHtml += "</ul>";
		}
		discoDiv.innerHTML = `
            <p>Nombre: ${disco.nombre}</p>
            <p>Artista: ${disco.artista}</p>
            <p>ID: ${disco.id}</p>
            <p>Portada:</p>
            <img src="${disco.portada}" alt="${disco.nombre}" style="max-width: 200px;">
            <p>Pistas:</p>
            ${pistasHtml}
        `;
		div.appendChild(discoDiv);
	});
	cantidadDiscos();
    pistaMasLargaTotal();
}

const pedirTexto = function (msg) {
	let str;
	let strValido = false;

	do {
		str = prompt(msg);
		if (str === null) {
			alert("dato obligatorio, por favor intentelo nuevamente");
		} else if (str.trim() === "") {
			alert("no puede dejar el campo vacio, intentelo nuevamente");
		} else if (!isNaN(str)) {
			alert("El dato ingresado no puede ser un numero");
		} else {
			strValido = true;
		}
	} while (!strValido);
	return str;
};

const pedirNumero = function (msg) {
	let num;
	let numValido = false;

	do {
		num = parseInt(prompt(msg));
		if (isNaN(num)) {
			alert("el dato ingresado no es valido, intentelo nuevamente");
		} else {
			numValido = true;
		}
	} while (!numValido);
	return num;
};

function cantidadDiscos() {
	const div = document.getElementById("cantidadDiscos");
	div.textContent = "Cantidad de discos: " + discos.length;
}

function mostrarDisco() {
	const id = pedirNumero("Ingrese el ID del disco que desea mostrar");
    let discoEncontrado = false;
	const div = document.querySelector("#discos");
	div.innerHTML = "";
	discos.forEach((disco) => {
		if (disco.id === id) {
            discoEncontrado = true;
			const discoDiv = document.createElement("div");
			discoDiv.className = "disco";
			// Mostrar pistas como lista
			let pistasHtml = "";
			if (Array.isArray(disco.pistas)) {
				pistasHtml = "<ul>";
				disco.pistas.forEach((pista) => {
					const minutos = Math.floor(pista.duracion / 60);
					const segundos = pista.duracion % 60;
					const duracionFormateada = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
					const color = pista.duracion > 180 ? " #e62dffbd;" : "white";
					pistasHtml += `<li style="color: ${color};">${pista.nombre} (${duracionFormateada})</li>`;
				});
				pistasHtml += "</ul>";
			}
			discoDiv.innerHTML = `
                <p>Nombre: ${disco.nombre}</p>
                <p>Artista: ${disco.artista}</p>
                <p>ID: ${disco.id}</p>
                <p>Portada:</p>
                <img src="${disco.portada}" alt="${disco.nombre}" style="max-width: 200px;">
                <p>Pistas:</p>
                ${pistasHtml}
            `;
			div.appendChild(discoDiv);
            return;
		}
	});
    if (!discoEncontrado){
        alert("Disco no encontrado con ID: " + id);
    }
}

const pistaMasLargaTotal = function () {
    const div = document.getElementById("pistaMasLarga");
    let pistaMasLargaTotal =  new Pista("", -1);
    discos.forEach((disco) => {
        let pistaMasLargaDisco = disco.pistaMasLargaDisco();
        if(pistaMasLargaTotal.duracion < pistaMasLargaDisco.duracion) {
            pistaMasLargaTotal = pistaMasLargaDisco;
        }
    })
    div.innerHTML = "";
    div.textContent = `La pista más larga de todos los discos es: ${pistaMasLargaTotal.nombre} con una duración de ${Math.floor(pistaMasLargaTotal.duracion / 60)}:${(pistaMasLargaTotal.duracion % 60).toString().padStart(2, "0")}`;
}
