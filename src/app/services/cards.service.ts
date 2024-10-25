import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceCartas, InterfaceCarta } from '../common/interface-cartas';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly URL = "https://api.pokemontcg.io/v2/cards/";

  constructor() { }

  getCards() : Observable<InterfaceCartas> {
    return this.http.get<InterfaceCartas>(this.URL);
  }

  getCard(id: number): Observable<InterfaceCarta> {
    return this.http.get<InterfaceCarta>(this.URL+id);
  }
}
