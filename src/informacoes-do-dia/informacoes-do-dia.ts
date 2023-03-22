import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

const days = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];

@Component({
  selector: 'informacoes-do-dia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacoes-do-dia.html',
  styleUrls: ['./informacoes-do-dia.css']
})
export class InformacoesDoDia implements OnInit {
  @Input() diaMes: string;
  @Input() nomeDiaria: string;
  @Input() nomePernoite: string;

  hoje = new Date();
  adverbioTempo: string;
  diaSemana: string;

  ngOnInit() {
    this.adverbioTempo = this.getAdverb();
    this.diaSemana = this.getWeekDay(this.diaMes);
  }

  getAdverb(): string {
    return this.diaMes === this.hoje.toLocaleDateString() ? 'HOJE' : 'AMANHÃ';
  }

  getWeekDay(inputDiaMes: string): string {
    const numeralWeekDay = new Date( this.invertDate(inputDiaMes) ).getDay();
    const weekDay = days[ numeralWeekDay + 1 ];
    return weekDay;
  }

  invertDate(inputDate: string): string {
    const elements = inputDate.split("/");
    const newFormat = elements[2] + '-' + elements[1] + '-' + elements[0];
    return newFormat;
  }
}
