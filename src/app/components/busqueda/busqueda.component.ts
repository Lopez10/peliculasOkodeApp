import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

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
    this.peliculasService.obtenerPeliculas(pelicula).subscribe((data: any) => {
      this.peliculasBusqueda = data.results;
    });
  }
}
