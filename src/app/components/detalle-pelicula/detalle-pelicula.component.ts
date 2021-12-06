import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { PeliculaDetalle } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss'],
})
export class DetallePeliculaComponent implements OnInit {
  id: string;

  detallePelicula;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculasService.obtenerId.subscribe((id) => {
      this.id = id;
      this.peliculasService.obtenerPelicula(id).subscribe((data) => {
        this.detallePelicula = data;
      });
    });
  }
}
