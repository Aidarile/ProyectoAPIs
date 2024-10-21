import { Routes } from '@angular/router';
import { AgentesComponent } from './components/agentes/agentes.component';
import { ArmasComponent } from './components/armas/armas.component';
import { CartasComponent } from './components/cartas/cartas.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ValorantDetailComponent } from './components/valorant-detail/valorant-detail.component';
import { MonsterhunterDetailComponent } from './components/monsterhunter-detail/monsterhunter-detail.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { FinalspaceDetailComponent } from './components/finalspace-detail/finalspace-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'agentes',
        component: AgentesComponent
    },
    {
        path: 'armas',
        component: ArmasComponent
    },
    {
        path: 'cartas',
        component: CartasComponent
    },
    {
        path: 'personajes',
        component: PersonajesComponent
    },
    {
        path: 'valorant-detail/:id',
        component: ValorantDetailComponent
    },
    {
        path: 'monsterhunter-detail/:id',
        component: MonsterhunterDetailComponent
    },
    {
        path: 'pokemon-detail/:id',
        component: PokemonDetailComponent
    },
    {
        path: 'finalspace-detail/:id',
        component: FinalspaceDetailComponent
    },
    {
        path: '**',
        component: ErrorPageComponent,
        pathMatch: 'full'
    }   
];
