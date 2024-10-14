import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfacePersonajes } from '../common/interface-personajes';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://finalspaceapi.com/api/v0/character/";

  constructor() { }

  getCharacters() : Observable<InterfacePersonajes> {
    return this.http.get<InterfacePersonajes>(this.URL);
  }
}
