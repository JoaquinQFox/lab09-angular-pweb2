import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Word {

  private words = [
    'Amigos', 'Montana', 'Ventana', 'Camisa', 'Sombrero', 'Zapato', 'Pelota', 'Escoba',
    'Carroza', 'Callejon', 'Frutero', 'Espejo', 'Silla', 'Cuchara', 'Tenedor', 'Viento',
    'Bailar', 'Caballo', 'Caminar', 'Pintura', 'Libro', 'Librero', 'Florero', 'Telefono',
    'Escuela', 'Montaje', 'Helados', 'Pastel', 'Galleta', 'Cocina', 'Paredes', 'Pintor',
    'Escritor', 'Maestro', 'Carpeta', 'Cartera', 'Computadora', 'Teclado', 'Pantalla',
    'Ratones', 'Animal', 'Plantas', 'Cactus', 'Reptil', 'Cabello', 'Limpieza', 'Aventura',
    'Cochera', 'Lampara', 'Zapallo', 'Bananas', 'Sandias', 'Tomates', 'Pescado', 'Camaron',
    'Girasol', 'Papelon', 'Cartuchera', 'Maletas', 'Cinturon', 'Carteles', 'Cuaderno',
    'Lapices', 'Colores', 'Balones', 'Futbol', 'Basquet', 'Bicicleta', 'Tractor', 'Aviones',
    'Barcos', 'Cielito', 'Globito', 'Sombras', 'Montanas', 'Colinas', 'Pradera', 'Desierto',
    'Bosques', 'Islotes', 'Castillo', 'Tormenta', 'Niebla', 'Temblor', 'Tsunami', 'Huracan',
    'Estrella', 'Cometas', 'Planeta', 'Galaxia', 'Universo', 'Escalera', 'Ventilador',
    'Motoras', 'Tornillos', 'Martillo', 'Agujero'
  ];

  constructor() { }

  getRandomWord(): string {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }
}
