import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  lista = [
    { nombre: 'Monotor', costo: '100000' },
    { nombre: 'Teclado', costo: '20000' },
    { nombre: 'Gabinete', costo: '50000' },
  ];

  mostrarLista = true;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}
