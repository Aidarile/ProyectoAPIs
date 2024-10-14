import { Component, inject } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { InterfaceCartas } from '../../common/interface-cartas';

@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css'
})
export class CartasComponent {
  private cardService : CardsService = inject(CardsService);
  apiData!: InterfaceCartas;

  constructor() {
    this.loadCards();
  }

  private loadCards() {
    this.cardService.getCards().subscribe( {
      next: (value: InterfaceCartas) => {
        this.apiData = value;
      },
      error: err => {
        alert(err.message);
      },
      complete: () => {
        console.log('Aquí están tus cartas Pokemon')
      }
    })
  }

}
