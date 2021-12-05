import { Component, Input } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { Data } from '../interfaces/data';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  @Input() id: string;
  peliculasBusqueda = [];
  peliculaBuscada = '';

  constructor(private peliculasService: PeliculasService) {}

  onChangeSearch(evento) {
    const pelicula = evento.detail.value;
    this.peliculasService.obtenerPeliculas(pelicula).subscribe((data: Data) => {
      this.peliculasBusqueda = data.results;
    });
  }

  verPelicula({ id }) {
    console.log(id);
    this.peliculasService.changeId(id);
  }
}
