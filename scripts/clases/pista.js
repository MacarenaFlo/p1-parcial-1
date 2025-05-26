class Pista {
	constructor(nombre, duracion) {
		this.nombre = nombre;
		this.duracion = duracion; // en segundos
	}
}

const pedirNombreCancion = function() {
    const pista = pedirTexto("Ingrese el nombre de la cancion");
    return pista;
};

const pedirDuracionCancion = function () {
    let duracion;
    let valido = false;
    do {
        duracion = pedirNumero("Ingrese la duracion de la pista en segundos");
        if (duracion >= 0 && duracion <= 7200) { // Validar que la duración sea positiva y menor a 2 horas
            valido = true;
        } else {
            alert("La duración debe ser un número positivo menor a 7200 segundos (2 horas). Inténtelo nuevamente.");
        }
    } while (!valido);
    return duracion;
};