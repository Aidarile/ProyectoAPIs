import { Component, inject } from '@angular/core';
import { WeaponsService } from '../../services/weapons.service';
import { InterfaceArmas } from '../../common/interface-armas';

@Component({
  selector: 'app-armas',
  standalone: true,
  imports: [],
  templateUrl: './armas.component.html',
  styleUrl: './armas.component.css'
})
export class ArmasComponent {
  private weaponService : WeaponsService = inject(WeaponsService);
  apiData!: InterfaceArmas;

  constructor() {
    this.loadWeapons();
  }

  private loadWeapons() {
    this.weaponService.getWeapons().subscribe( {
      next: (value: InterfaceArmas) => {
        this.apiData = value;
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
