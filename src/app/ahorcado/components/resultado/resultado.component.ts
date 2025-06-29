import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
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

  constructor(private router: Router) {}
  jugarDeNuevo() {
    window.location.reload();
  }

}
