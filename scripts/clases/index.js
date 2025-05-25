let discos;

fetch("discos.json")
.then(response => response.json())
.then(json => {
    discos = json.map(disco => new Disco(disco.nombre, disco.artista, disco.id, disco.portada, disco.portada));
    mostrarDiscos();
})



