import { Component, inject, Input, OnInit } from '@angular/core';
import { Arma } from '../../common/interface-armas';
import { WeaponsService } from '../../services/weapons.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-monsterhunter-detail',
  standalone: true,
  imports: [NgClass],
  templateUrl: './monsterhunter-detail.component.html',
  styleUrl: './monsterhunter-detail.component.css'
})
export class MonsterhunterDetailComponent implements OnInit{
  @Input("id") id!: number;
  arma!: Arma;
  private rmService: WeaponsService = inject(WeaponsService)

  ngOnInit(): void {
    this.loadArmas();
  }

  private loadArmas() {
    this.rmService.getWeapon(this.id).subscribe({
      next: value => {
        console.log(value);
        this.arma = value;
      },
      error: err => console.error(err),
      complete: () => console.log('Arma cargada')
    })

  }

}
