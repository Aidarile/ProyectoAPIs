import { RouterLink } from '@angular/router';
import { InterfaceAgentes } from '../../common/interface-agentes';
import { AgentsService } from './../../services/agents.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-agentes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './agentes.component.html',
  styleUrl: './agentes.component.css'
})
export class AgentesComponent {
  private agentService : AgentsService = inject (AgentsService);
  apiData!: InterfaceAgentes;

  constructor() {
    this.loadAgents();
  }

  private loadAgents() {
    this.agentService.getAgents().subscribe( {
      next: (value: InterfaceAgentes) => {
        this.apiData = value;
      },
      error: err => {
        alert(err.message);
      },
      complete: () => {
        console.log('Agentes listos y cargados!!')
      }
    })
  }

}
