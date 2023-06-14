import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoEmprestimoComponent } from './solicitacao-emprestimo.component';

describe('SolicitacaoEmprestimoComponent', () => {
  let component: SolicitacaoEmprestimoComponent;
  let fixture: ComponentFixture<SolicitacaoEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoEmprestimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
