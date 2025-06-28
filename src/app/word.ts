import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Word {

  private=['Amor ','Cabeza','Chocolate', 'Papa'];
  constructor() { }

  getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }
}
