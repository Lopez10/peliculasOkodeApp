import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const { url, apiKey } = environment;

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http: HttpClient) {}

  obtenerPeliculas(pelicula: string) {
    return this.http.get(
      `${url}search/movie?api_key=${apiKey}&language=es&include_image_language=es&query=${pelicula}`
    );
  }

  obtenerPelicula(id: string) {
    return this.http.get(
      `${url}movie/${id}?api_key=${apiKey}&language=es&include_image_language=es&query=${id}`
    );
  }
}
