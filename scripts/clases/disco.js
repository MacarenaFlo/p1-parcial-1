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
		id = pedirNumero("Ingrese el numero de identificacion del disco");
		if (id < 1 || id > 999 || discos.some((disco) => disco.id === id)) {
			alert(
				"El ID ya existe para el album " +
					discos.find((disco) => disco.id === id).nombre +
					". Por favor ingrese un ID diferente.",
			);
			valido = false;
		} else {
			valido = true;
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

const cantidadPistasDisco = function () {
  return pistas.length;
}

const duracionTotalDisco = function () {
  let duracionTotal = 0;
  this.pistas.forEach((pista) => {
    duracionTotal += pista.duracion;
  });
  return duracionTotal;
}

const promedioDuracionPistasDisco = function () {
  return this.duracionTotalDisco() / this.cantidadPistasDisco();
}

const pistaMasLargaDisco = function () {
  let pistaMayor = new Pista("", -1);
  this.pistas.forEach((pista) => {
    if (pista.duracion > pistaMayor.duracion) {
      pistaMayor = pista;
    }
  } )
  return pistaMayor;
}