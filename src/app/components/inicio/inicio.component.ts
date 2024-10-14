import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  imagenes:  { imagen: string; ruta: string; } [] = [
    {
      imagen: "/images/valorant.jpg",
      ruta: '/agentes'
    },
    {
      imagen: "/images/monsterhunter.jpg",
      ruta: '/armas'
    },
    {
      imagen: "/images/pokemoncards.jpg",
      ruta: '/cartas'
    },
    {
      imagen: "/images/finalspace.jpeg",
      ruta: '/personajes'
    }    
    
  ]

}
