import { Component,OnInit } from '@angular/core';
import { Word} from '../word';

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

  constructor(private wordService: Word) { }

  ngOnInit(): void {
    this.iniciarJuego();
  }

  iniciarJuego(): void {
    this.palabra = this.wordService.getRandomWord();
    this.letrasAdivinadas = [];
    this.intentos = 6;
    this.estadoJuego = false;
    this.letrasNoAdivinadas = '_ '.repeat(this.palabra.length).trim();
  }
}
