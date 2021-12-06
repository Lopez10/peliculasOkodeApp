import { Component, Input } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Data } from '../../interfaces/interfaces';

@Component({
  selector: 'app-busqueda',
  templateUrl: 'busqueda.component.html',
  styleUrls: ['busqueda.component.scss'],
})
export class BusquedaComponent {
  peliculasBusqueda = [];
  peliculaBuscada = '';

  constructor(private peliculasService: PeliculasService) {}

  onChangeSearch(evento) {
    const pelicula = evento.detail.value;
    this.peliculasService.obtenerPeliculas(pelicula).subscribe((data: Data) => {
      this.peliculasBusqueda = data.results;
    });
  }
}
