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

  cambioBusqueda({ detail: { value } }) {
    const pelicula = value;
    this.peliculasService
      .obtenerPeliculas(pelicula)
      .subscribe(({ results }: any) => {
        this.peliculasBusqueda = results;
      });
  }
}
