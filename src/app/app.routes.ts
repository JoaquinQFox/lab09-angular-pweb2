import { Routes } from '@angular/router';
import { ResultadoComponent } from './resultado/resultado.component';
import { LogicaAhorcado } from './logica-ahorcado/logica-ahorcado';

export const routes: Routes = [
    { path: 'ahorcado', component: LogicaAhorcado },
    { path: 'resultado', component: ResultadoComponent },
    { path: '', redirectTo: 'ahorcado', pathMatch: 'full' }
];
