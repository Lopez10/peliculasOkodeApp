import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const { url, apiKey } = environment;

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  idiomaURL = 'language=es&include_image_language=es';
  constructor(private http: HttpClient) {}

  obtenerPeliculas(pelicula: string) {
    return this.http.get(
      `${url}search/movie?api_key=${apiKey}&${this.idiomaURL}&query=${pelicula}`
    );
  }

  obtenerPelicula(id: string) {
    return this.http.get(
      `${url}movie/${id}?api_key=${apiKey}&${this.idiomaURL}&query=${id}`
    );
  }
}
