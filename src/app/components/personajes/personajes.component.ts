import { Component, inject } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { InterfacePersonajes } from '../../common/interface-personajes';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  private charService : CharactersService = inject(CharactersService);
  apiData!: InterfacePersonajes;

  constructor() {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.charService.getCharacters().subscribe( {
      next: (value: InterfacePersonajes) => {
        this.apiData = value;
      },
      error: err => {
        alert(err.message);
      },
      complete: () => {
        console.log('Personajes cargados!')
      }
    })
  }

}
