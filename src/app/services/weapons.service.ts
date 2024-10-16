import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arma } from '../common/interface-armas';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly URL = "https://mhw-db.com/weapons/";

  constructor() { }

  getWeapons() : Observable<Arma[]> {
    return this.http.get<Arma[]>(this.URL);
  }
}
