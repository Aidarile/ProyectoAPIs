import { Component, inject, NgModule } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Personaje } from '../../common/interface-personajes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  private readonly charService : CharactersService = inject(CharactersService);
  personajes : Personaje[] = [];

  constructor() {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.charService.getCharacters().subscribe( {
      next: (value: Personaje[]) => {
        this.personajes = value;
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
