import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  products = [
    { nombre: 'Monitor', costo: '100000' },
    { nombre: 'Teclado', costo: '20000' },
    { nombre: 'Gabinete', costo: '50000' },
    { nombre: 'Mouse', costo: '30000' },
    { nombre: 'CPU', costo: '150000' },
    { nombre: 'RAM', costo: '80000' },
  ];

  mostrarLista = true;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}
