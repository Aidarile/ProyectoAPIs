import { InterfaceCartas, Card } from './../../common/interface-cartas';
import { Component, inject, Input, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  @Input("id") id!: number;
  card!: Card;
  private rmService: CardsService = inject(CardsService)

  ngOnInit(): void {
    this.loadCards();
  }

  private loadCards() {
    this.rmService.getCard(this.id).subscribe({
      next: value => {
        console.log(value);
        this.card = value.data;
      },
      error: err => console.error(err),
      complete: () => console.log('Carta cargada')
    })
  }
}
