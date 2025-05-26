'use strict';
let discos = [];



fetch("discos.json")
.then(response => response.json())
.then(json => {
    discos = json.map(disco => new disco(disco.nombre, disco.artista, disco.id, disco.portada, disco.portada));
    mostrarDiscos();
})





function cargar() {
    const nombreDisco = pedirNombreDeDisco();
    const banda = pedirBanda();
    const portada = pedirPortada();
    const id = pedirId();
    const pista = pedirCancion();
    const duracion = pedirDuracion();
}
let disco = {
    nombreDelDisco: nombreDelDisco,
    banda: banda,
    portada: portada,
    id: id,
    pista: pista,
    duracion: duracion,
}

discos.push(disco);


/**
 * Llamada desde un boton. Muestra todos los discos disponibles.
 */
function mostrar() {


    
}

