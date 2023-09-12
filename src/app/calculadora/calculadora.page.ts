import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  constructor() {}

  ngOnInit() {
    
  }

  nota1: number = 0;
  nota2: number = 0;
  media: number = 0;

  calcularMedia() {
    if (this.nota1 && this.nota2) {
      this.media = (this.nota1 + this.nota2) / 2;
    }
  }

}
