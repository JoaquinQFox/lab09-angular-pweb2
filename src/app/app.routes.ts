import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Ahorcado } from './ahorcado/ahorcado';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'ahorcado', component: Ahorcado },
];
