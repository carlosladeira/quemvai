import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { InformacoesDoDia } from './informacoes-do-dia/informacoes-do-dia';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, InformacoesDoDia],
  templateUrl: './main.html' 
})
export class App {
  results = [
    {
      diaMes: "22/03/2023",
      nomeDiaria: "Dodó",
      nomePernoite: "Ivanilda"
    },
    {
      diaMes: "23/03/2023",
      nomeDiaria: "Vera",
      nomePernoite: "Sandra"
    }
  ];
}

bootstrapApplication(App);
