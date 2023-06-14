import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoEmprestimoComponent } from './sucesso-emprestimo.component';

describe('SucessoEmprestimoComponent', () => {
  let component: SucessoEmprestimoComponent;
  let fixture: ComponentFixture<SucessoEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessoEmprestimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessoEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
