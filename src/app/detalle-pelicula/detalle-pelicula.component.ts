import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss'],
})
export class DetallePeliculaComponent implements OnInit {
  id: string;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculasService.obtenerId.subscribe((id) => {
      this.id = id;
      console.log(id);
    });
  }
}
