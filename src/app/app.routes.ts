import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ResultadoComponent } from './ahorcado/components/resultado/resultado.component';
import { LogicaAhorcado } from './ahorcado/components/logica-ahorcado/logica-ahorcado';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'ahorcado', component: LogicaAhorcado },
  { path: 'resultado', component: ResultadoComponent },
];
