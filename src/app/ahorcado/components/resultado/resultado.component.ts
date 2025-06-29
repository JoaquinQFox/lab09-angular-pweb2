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
  @Input() gano: boolean = false;
  @Input() palabra: string = '';

  constructor(private router: Router) {}
  jugarDeNuevo() {
    this.router.navigate(['/']);
  }

}
