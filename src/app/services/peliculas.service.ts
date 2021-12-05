import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

const { url, apiKey } = environment;

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  private message = new BehaviorSubject<string>('En espera de un id');

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public obtenerId = this.message.asObservable();

  constructor(private http: HttpClient) {}

  changeId(id: string): void {
    this.message.next(id);
  }

  obtenerPeliculas(pelicula: string) {
    return this.http.get(
      `${url}search/movie?api_key=${apiKey}&language=es&include_image_language=es&query=${pelicula}`
    );
  }

  obtenerPelicula(id: string) {
    return this.http.get(
      `${url}search/movie?api_key=${apiKey}&language=es&include_image_language=es&query=${id}`
    );
  }
}
