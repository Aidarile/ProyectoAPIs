import { Agent } from './../../common/interface-agentes';
import { Component, inject, OnInit, Input } from '@angular/core';
import { AgentsService } from '../../services/agents.service';

@Component({
  selector: 'app-valorant-detail',
  standalone: true,
  imports: [],
  templateUrl: './valorant-detail.component.html',
  styleUrl: './valorant-detail.component.css'
})
export class ValorantDetailComponent implements OnInit {
  @Input("id") id!: number;
  agent!: Agent;
  private rmService: AgentsService = inject(AgentsService)

  ngOnInit() : void {
    this.loadAgent();
  }

  private loadAgent() {
    this.rmService.getAgent(this.id).subscribe({
      next: value => {
        console.log(value);
        this.agent = value.data;
      },
      error: err => console.error(err),
      complete: () => console.log('Agente cargado!')
    })
  }
}
