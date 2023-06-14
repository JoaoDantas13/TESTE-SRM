import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacaoDialogComponent } from '../confirmacao-dialog/confirmacao-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Emprestimo } from 'src/app/model/emprestimo.interface';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-solicitacao-emprestimo',
  templateUrl: './solicitacao-emprestimo.component.html',
  styleUrls: ['./solicitacao-emprestimo.component.scss']
})
export class SolicitacaoEmprestimoComponent implements OnInit {
  emprestimos: Emprestimo[] = []; // Variável para armazenar os empréstimos realizados

  nome!: any;
  valorParcelas!: number;
  numeroParcelas!: number;
  totalJuros!: number;
  simulacaoRealizada!: boolean;
  loading: boolean = false;

  formulario!: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      parcelas: ['', Validators.required],
    });
  }

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router
  ) { }

  simularEmprestimo() {
    localStorage.setItem('nome', this.formulario.value.nome);
    const valor = this.formulario.value.valor;
    const nome = this.formulario.value.nome;
    const parcelas = this.formulario.value.parcelas;

    if (!this.formulario.valid) {
      this.toastr.warning('Preencha o formulario corretamente!', 'Ops!', {
        timeOut: 3000,
      });
      this.simulacaoRealizada = false;
    } else {
      this.nome = localStorage.getItem('nome');
      console.log('formualrio', this.formulario.value)
      // Simulação do backend (valores fictícios)
      setTimeout(() => { this.loading = true }, 2000);
      this.valorParcelas = valor / parcelas;
      this.numeroParcelas = parcelas;
      this.totalJuros = valor + (valor * 0.05);
      this.loading = false;
      this.simulacaoRealizada = true;
    }
  }

  confirmarEmprestimo() {
    // Abrir popup com os dados de confirmação
    const confirmacao = `Valor das parcelas: ${Math.round(this.valorParcelas)}\n` +
      `Número de parcelas: ${this.numeroParcelas}\n` +
      `Total do valor com juros: ${this.totalJuros}`;
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      data: confirmacao
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Adicionar empréstimo à lista
        const novoEmprestimo: Emprestimo = {
          nome: this.formulario.value.nome,
          valor: this.formulario.value.nome,
          parcelas: this.formulario.value.parcelas,
          valorParcelas: this.valorParcelas,
          numeroParcelas: this.numeroParcelas,
          totalJuros: this.totalJuros
        };
        this.emprestimos.push(novoEmprestimo);
        const teste = JSON.stringify(this.emprestimos);
        // Redirecionar para a tela de sucesso
        this.router.navigate(['/sucessoEmprestimo']);
      }
    });
  }

}
