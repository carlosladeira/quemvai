import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'informacoes-do-dia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacoes-do-dia.html'
})
export class InformacoesDoDia {
  @Input() dia: string;
  @Input() nomeDiaria: string;
  @Input() nomePernoite: string;
}
