class Disco {
    constructor(nombre, artista, id, portada, pistas){
        this.nombre = nombre;
        this.artista = artista;
        this.id = id;
        this.portada = portada;
        this.pistas = pistas;
    }

    toHTML() {

        let html = `<div class="card" style="width: 18rem;">`;
        html += `<div class="card-body">`;
        html += `<h5 class="card-title">${this.nombre}</h5>`;
        html += `<p class="card-text">${this.artista}</p>`;
        html += `<img src="${this.portada}" class="card-img-top" alt="${this.portada}">`;
        html += `</div>`;
        html += `<ul class="list-group list-group-flush">`;
        html += `<li class="list-group-item">Id: ${this.id}</li>`;
        html += `<li class="list-group-item">Pistas: ${this.pistas}</li>`;
        html += `</ul>`;
        html += `<div class="card-body">`;
        html += `<a href="#" class="card-link">Card link</a>`;
        html += `<a href="#" class="card-link">Another link</a>`;
        html += `</div>`;
        html += `</div>`;

        return html;

    }
}