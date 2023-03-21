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
  @Input() dia: string;
  @Input() nomeDiaria: string;
  @Input() nomePernoite: string;

  adverbioTempo: string;
  hoje = new Date().toLocaleDateString();

  ngOnInit() {
    console.log('Dia: ', this.dia);
    console.log('Hoje: ', this.hoje);

    var now = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    console.log(days[ now.getDay() ]);

    this.adverbioTempo = this.dia === this.hoje ? 'HOJE' : 'AMANHÃ';
    //console.log(this.adverbioTempo)
  }
}
