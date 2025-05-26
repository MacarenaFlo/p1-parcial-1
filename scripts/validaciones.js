const validarString = function (msg) {
    let str;
    let strValido = true;

    do {
        str = prompt(msg);

        if (str === null) {
            strValido = false;
            alert("dato obligatorio, por favor intentelo nuevamente");
        } else if (str.trim() === "") {
            strValido = false;
            alert("no puede dejar el campo vacio, intentelo nuevamente");
        } else if (!isNaN(str)) {
            strValido = false;
            alert("El dato ingresado no puede ser un numero");
        } else {
            strValido = true;
        }
    } while (!strValido);

    return str;
};

const validarNumero = function (msg) {
    let num;
    let numValido = true;

    do {
        num = parseInt(prompt(msg));
        if (isNaN(num)) {
            numValido = false;
            alert("el dato ingresado no es valido, intentelo nuevamente");
        } else {
            numValido = true;
        }
    } while (!numValido);

    return num;
};

const pedirNombreDeDisco = function () {
    const nombreDisco = validarString("Ingrese el nombre del Disco");
    return nombreDisco;
};

const pedirBanda = function () {
    const banda = validarString("Ingrese el nombre de la banda");
    return banda;
};

const pedirPortada = function () {
    const portada = validarString("Ingrese la portada del disco");
    return portada;
};


const pedirId = function () {
    let id;
    let valido = true;

    do {
        id = validarNumero("Ingrese el numero de identificacion del disco");
        if (id < 0 || id > 999) {
            valido = false;
        } else {
            valido = true;
        }
    } while (!valido);
    return id;
};

const pedirCancion = function() {
    const pista = validarString("Ingrese el nombre de la cancion");
    return pista;
};



const pedirDuracion = function () {
    let duracion;
    let valido = true;

    do {
        
        duracion = validarNumero("Ingrese la duracion de la pista en segundos");
        if (isNaN(duracion) || duracion < 0 || duracion >= 7200) {
            valido = false;
        } else {
            valido = true;
        }
    } while(!valido);
    return duracion;
};

