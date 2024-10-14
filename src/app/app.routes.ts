import { Routes } from '@angular/router';
import { AgentesComponent } from './components/agentes/agentes.component';
import { ArmasComponent } from './components/armas/armas.component';
import { CartasComponent } from './components/cartas/cartas.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { InicioComponent } from './components/inicio/inicio.component';

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
        path: '**',
        component: ErrorPageComponent,
        pathMatch: 'full'
    }   
];
