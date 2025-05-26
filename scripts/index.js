'use strict';

let discos = [];

fetch("/discos.json")
    .then(response => response.json())
    .then(json => {
        json.forEach(disco => {
            discos.push(new Disco(disco.nombre, disco.artista, disco.id, disco.portada, disco.pistas));
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
    
    discos.forEach(disco => {
        const discoDiv = document.createElement("div");
        discoDiv.className = "disco";
        // Mostrar pistas como lista
        let pistasHtml = "";
        if (Array.isArray(disco.pistas)) {
            pistasHtml = "<ul>";
            disco.pistas.forEach(pista => {
                const minutos = Math.floor(pista.duracion / 60);
                const segundos = pista.duracion % 60;
                const duracionFormateada = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
                const color = pista.duracion > 180 ? ' #e62dffbd;' : 'white';
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
}

function cantidadDiscos() {
    const div = document.getElementById('cantidadDiscos');
    div.textContent = "Cantidad de discos: " + discos.length;
}

//function mostrarDisco(id){
//    
//}