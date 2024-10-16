import { Component, inject } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { Card, InterfaceCartas } from '../../common/interface-cartas';

@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css'
})
export class CartasComponent {
  private readonly cardService : CardsService = inject(CardsService);
  coleccionCartas: Card[] = [];

  constructor() {
    this.loadCards();
  }

  private loadCards() {
    this.cardService.getCards().subscribe( {
      next: (value: InterfaceCartas) => {
        this.coleccionCartas = value.data;
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
