import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SolicitacaoEmprestimoComponent } from './components/solicitacao-emprestimo/solicitacao-emprestimo.component';
import { SucessoEmprestimoComponent } from './components/sucesso-emprestimo/sucesso-emprestimo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'solicitacaoEmprestimo', component: SolicitacaoEmprestimoComponent },
  { path: 'sucessoEmprestimo', component: SucessoEmprestimoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
