import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { InformacoesDoDia } from './informacoes-do-dia/informacoes-do-dia';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, InformacoesDoDia],
  template: `
    <informacoes-do-dia
      dia="Quinta-feira 16/03"
      nomeDiaria="Dodó"
      nomePernoite="Ivanilda"
    />
    <informacoes-do-dia
      dia="Sexta-feira 17/03"
      nomeDiaria="Vera"
      nomePernoite="Sandra"
    />
  `,
})
export class App {
}

bootstrapApplication(App);