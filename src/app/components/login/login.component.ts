import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDados!: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginDados = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loading = true;
    const email = this.loginDados.value.email;
    const password = this.loginDados.value.password;
    // Lógica de autenticação básica
    if (email === 'consultor@srm.com' && password === '123') {
      // Credenciais válidas, redirecionar para outra tela
      this.router.navigate(['/solicitacaoEmprestimo']);
      this.toastr.success('Login efetuado com sucesso!', 'Bem-Vindo!', {
        timeOut: 3000,
      });
    } else {
      // Credenciais inválidas, exibir mensagem de erro ou tomar ação adequada
      const error = 'Credenciais inválidas'
      this.toastr.error(error, 'Ops!', {
        timeOut: 3000,
      });
      this.loading = false;
    }
  }



}
