import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  adverbioTempo: string;
  diaSemana: string;
  days = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
  hoje = new Date();

  ngOnInit() {
    console.log('Dia: ', this.diaMes);
    //console.log('Hoje: ', this.hoje.toLocaleDateString());

    this.diaSemana = this.days[ new Date(this.diaMes).getDay() ];
    //this.diaSemana = this.days[ new Date( this.invertDate(this.diaMes) ).getDay() ];
    console.log(this.diaSemana);
    console.log(this.hoje.getDay());
    // TODO: get weekday given input 'diaMes'

    this.adverbioTempo = this.diaMes === this.hoje.toLocaleDateString() ? 'HOJE' : 'AMANHÃ';
  }

  invertDate(inputDate: string): string {
    // invert order of elements of date
    return '';
  }
}
