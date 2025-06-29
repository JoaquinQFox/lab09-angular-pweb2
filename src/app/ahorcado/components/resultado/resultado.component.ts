import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultado.component.html',
  styleUrls: [
    './resultado.component.css',
    '../../../home/home.css',
    '../logica-ahorcado/logica-ahorcado.css'
  ]
})
export class ResultadoComponent {
  @Input() intentos: number = 0;
  @Input() palabra: string = '';

  comprobarVictoria() {
    if (this.intentos <= 0)
      return false;
    else
      return true;
  }

  get imagenFinal(): string {
    const imagen:string = (this.intentos <= 0)
      ? 'ahorcadoGameOver.png'
      : 'ahorcadoWin.png';

    return '/images/' + imagen;
  }

  constructor(private router: Router) {}
  jugarDeNuevo() {
    window.location.reload();
  }

}
