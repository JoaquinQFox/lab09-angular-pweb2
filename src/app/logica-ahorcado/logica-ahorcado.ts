import { Component,OnInit } from '@angular/core';
import { WordService} from '../word.service';

@Component({
  selector: 'app-logica-ahorcado',
  imports: [],
  templateUrl: './logica-ahorcado.html',
  styleUrl: './logica-ahorcado.css'
})
export class LogicaAhorcado  implements OnInit {
  palabra: string = '';
  letrasNoAdivinadas: string='';
  letrasAdivinadas: string[] = [];
  intentos:number = 6;
  estadoJuego:boolean=false;
}
