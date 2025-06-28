import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  imports: [],
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
