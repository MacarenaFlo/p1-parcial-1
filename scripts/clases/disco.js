class Disco {
	constructor(nombre, artista, id, portada, pistas) {
		this.nombre = nombre;
		this.artista = artista;
		this.id = id;
		this.portada = portada;
		this.pistas = pistas;
	}

	agregarPista(pista) {
		this.pistas.push(pista);
	}

	cantidadPistasDisco() {
		return this.pistas.length;
	}

	duracionTotalDisco() {
		let duracionTotal = 0;
		this.pistas.forEach((pista) => {
			duracionTotal += pista.duracion;
		});
		return duracionTotal;
	}

	promedioDuracionPistasDisco() {
		return this.duracionTotalDisco() / this.cantidadPistasDisco();
	}

	pistaMasLargaDisco() {
		let pistaMayor = new Pista("", -1);
		this.pistas.forEach((pista) => {
			if (pista.duracion > pistaMayor.duracion) {
				pistaMayor = pista;
			}
		});
		return pistaMayor;
	}
}

const pedirNombreDeDisco = function () {
	const nombreDisco = pedirTexto("Ingrese el nombre del Disco");
	return nombreDisco;
};

const pedirArtista = function () {
	const artista = pedirTexto("Ingrese el Autor o banda del disco Disco");
	return artista;
};

const pedirPortada = function () {
	const portada = pedirTexto("Ingrese la portada del disco (link a la imagen)");
	return portada;
};

const pedirId = function () {
	let id;
	let valido = true;
	do {
    valido = true;
		id = pedirNumero("Ingrese el numero de identificacion del disco");
    if (id < 1 || id > 999) {
      alert("El ID debe ser un número entre 1 y 999. Inténtelo nuevamente.");
      valido = false;
    } else if (discos.some((disco) => disco.id === id)) {
			alert(
				"El ID ya existe para el album " +
					discos.find((disco) => disco.id === id).nombre +
					". Por favor ingrese un ID diferente.",
			);
			valido = false;
		}
	} while (!valido);
	return id;
};

const pedirPistas = function () {
	let pistas = [];
	let continuar = true;
	while (continuar) {
		let nombrePista = pedirNombreCancion();
		let duracionPista = pedirDuracionCancion();
		let pista = new Pista(nombrePista, duracionPista);
		pistas.push(pista);
		continuar = confirm("¿Desea cargar otra canción?");
	}
	return pistas;
};
