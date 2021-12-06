import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { PeliculaDetalle } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss'],
})
export class DetallePeliculaComponent implements OnInit {
  detallePelicula: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {}

  imagenURL(imagen: string): string {
    return `https://image.tmdb.org/t/p/w500/${imagen}`;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.peliculasService.obtenerPelicula(id).subscribe((data) => {
        this.detallePelicula = data;
      });
    });
  }
}
