
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
        if (id < 1 || id > 999 || discos.some( disco => disco.id === id)) {
            alert("El ID ya existe para el album " + discos.find(disco => disco.id === id).nombre + ". Por favor ingrese un ID diferente.");
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
