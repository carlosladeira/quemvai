import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { bootstrapApplication } from '@angular/platform-browser';
import { InformacoesDoDia } from './informacoes-do-dia/informacoes-do-dia';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, InformacoesDoDia],
  templateUrl: './main.html' 
})
export class App {
}

bootstrapApplication(App);
