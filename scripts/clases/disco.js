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
