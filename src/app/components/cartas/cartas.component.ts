import { Component, inject } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { Card, InterfaceCartas } from '../../common/interface-cartas';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [RouterLink, NgbModule],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css'
})
export class CartasComponent {
  private readonly cardService : CardsService = inject(CardsService);
  coleccionCartas: Card[] = [];
  currentPage: number = 1;
  apiData!: InterfaceCartas;

  constructor() {
    this.loadCards();
  }

  protected loadCards() {
    this.cardService.getCardsByPage(this.currentPage).subscribe( {
      next: (value: InterfaceCartas) => {
        this.coleccionCartas = value.data;
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
