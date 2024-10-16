import { Component, inject } from '@angular/core';
import { WeaponsService } from '../../services/weapons.service';
import { Arma } from '../../common/interface-armas';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-armas',
  standalone: true,
  imports: [NgClass],
  templateUrl: './armas.component.html',
  styleUrl: './armas.component.css'
})
export class ArmasComponent {
  private weaponService : WeaponsService = inject(WeaponsService);
  armas: Arma[] = [];

  constructor() {
    this.loadWeapons();
  }

  private loadWeapons() {
    this.weaponService.getWeapons().subscribe( {
      next: (value: Arma[]) => {
        this.armas = value;
      },
      error: err => {
        alert(err.message);
      },
      complete: () => {
        console.log('Armas cargadas!')
      }
    })
  }

}
