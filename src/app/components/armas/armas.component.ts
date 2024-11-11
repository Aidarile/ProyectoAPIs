import { Component, inject } from '@angular/core';
import { WeaponsService } from '../../services/weapons.service';
import { Arma, InterfaceArmas } from '../../common/interface-armas';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-armas',
  standalone: true,
  imports: [NgClass, RouterLink, NgbModule],
  templateUrl: './armas.component.html',
  styleUrl: './armas.component.css'
})
export class ArmasComponent {
  private readonly weaponService : WeaponsService = inject(WeaponsService);
  armas: Arma[] = [];
  currentPage: number = 1;
  apiData!: InterfaceArmas;

  constructor() {
    this.loadWeapons();
  }

  protected loadWeapons() {
    this.weaponService.getWeaponsByPage(this.currentPage).subscribe( {
      next: (value: InterfaceArmas) => {
        this.apiData = value;
        this.armas = value;
      },
      error: err => {
        console.log(err);
        
        //alert(err.message);
      },
      complete: () => {
        console.log('Armas cargadas!')
      }
    })
  }

}
