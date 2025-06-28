import { Routes } from '@angular/router';
import { ResultadoComponent } from './resultado/resultado.component';

export const routes: Routes = [
    { path: 'resultado', component: ResultadoComponent },
    { path: '', redirectTo: 'resultado', pathMatch: 'full' }
];
