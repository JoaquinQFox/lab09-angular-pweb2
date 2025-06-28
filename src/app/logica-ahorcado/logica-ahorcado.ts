import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Word} from '../word';

@Component({
  selector: 'app-logica-ahorcado',
  imports: [FormsModule],
  templateUrl: './logica-ahorcado.html',
  styleUrl: './logica-ahorcado.css'
})
export class LogicaAhorcado  implements OnInit {
  palabra: string = '';
  letrasNoAdivinadas: string='';
  letrasAdivinadas: string[] = [];
  intentos:number = 6;
  estadoJuego:boolean=false;
  letraIngresada: string = '';

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
    this.letraIngresada = '';
  }

  adivinarLetra(): void {
    if (!this.letraIngresada || this.letraIngresada.length !== 1) {
      return;
    }

    const letra = this.letraIngresada.toUpperCase();
    
    // Verificar si la letra ya fue adivinada
    if (this.letrasAdivinadas.includes(letra)) {
      this.letraIngresada = '';
      return;
    }

    this.letrasAdivinadas.push(letra);

    if (this.palabra.toUpperCase().includes(letra)) {
      // Letra correcta - actualizar palabra mostrada
      this.actualizarPalabraMostrada();
    } else {
      // Letra incorrecta - reducir intentos
      this.intentos--;
    }

    this.verificarEstadoJuego();
    this.letraIngresada = '';
  }

  actualizarPalabraMostrada(): void {
    this.letrasNoAdivinadas = this.palabra
      .split('')
      .map(letra => this.letrasAdivinadas.includes(letra.toUpperCase()) ? letra : '_')
      .join(' ');
  }

  verificarEstadoJuego(): void {
    // Verificar si ganó
    const palabraCompleta = this.palabra
      .split('')
      .every(letra => this.letrasAdivinadas.includes(letra.toUpperCase()));
    
    // Verificar si perdió
    const perdio = this.intentos <= 0;

    if (palabraCompleta || perdio) {
      this.estadoJuego = true;
    }
  }
}
