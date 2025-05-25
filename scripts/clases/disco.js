class Disco {
        constructor(nombre, artista, id, portada, pistas){
        this.nombre = nombre;
        this.artista = artista;
        this.id = id;
        this.portada = portada;
        this.pistas = pistas;
    }
    
    //devuelve el id de un disco si es valido
    static idValido (id) { //TODO: VALIDAR QUE NO ESTE REPETIDO
      return (!isNaN(id) || id >= 1 || id < 999);
    }
}

