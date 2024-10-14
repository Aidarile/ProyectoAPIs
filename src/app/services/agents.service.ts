import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfaceAgentes } from '../common/interface-agentes';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
  private http: HttpClient = inject(HttpClient);
  private readonly URL = "https://valorant-api.com/v1/agents/";

  constructor() { }

  getAgents() : Observable<InterfaceAgentes> {
    return this.http.get<InterfaceAgentes>(this.URL);
  }
}