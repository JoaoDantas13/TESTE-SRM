import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emprestimo } from 'src/app/model/emprestimo.interface';

@Component({
  selector: 'app-sucesso-emprestimo',
  templateUrl: './sucesso-emprestimo.component.html',
  styleUrls: ['./sucesso-emprestimo.component.scss']
})
export class SucessoEmprestimoComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'parcelas', 'valorParcelas', 'numeroParcelas', 'totalJuros'];

  emprestimos: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const emprestimoString = localStorage.getItem('dados') || '';
    this.emprestimos = JSON.parse(emprestimoString);
  }

}
