import { Component, inject, Input, OnInit } from '@angular/core';
import { Personaje } from '../../common/interface-personajes';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-finalspace-detail',
  standalone: true,
  imports: [],
  templateUrl: './finalspace-detail.component.html',
  styleUrl: './finalspace-detail.component.css'
})
export class FinalspaceDetailComponent implements OnInit {
  @Input("id") id!: number;
  character!: Personaje;
  private rmService: CharactersService = inject(CharactersService);

  ngOnInit(): void {
    this.loadCharacter();
  }

  private loadCharacter() {
    this.rmService.getCharacter(this.id).subscribe ({
      next: value => {
        console.log(value);
        this.character = value;
      },
      error: err => console.error(err),
      complete: () => console.log('Personaje cargado')
    })
  }

}
