class Pista {
      constructor(nombre, duracion) {
        this.nombre = nombre;
        this.duracion = duracion; // en segundos
      }
    }

    class Disco {
      constructor(nombre, autor, portada, codigo) {
        this.nombre = nombre;
        this.autor = autor;
        this.portada = portada;
        this.codigo = codigo;
        this.pistas = [];
      }

      agregarPista(pista) {
        this.pistas.push(pista);
      }
    }

    const discos = [];

    function cargar() {
      let nombre, autor, portada, codigo;



    }