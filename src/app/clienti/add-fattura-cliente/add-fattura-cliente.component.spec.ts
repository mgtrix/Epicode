import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFatturaClienteComponent } from './add-fattura-cliente.component';

describe('AddFatturaClienteComponent', () => {
  let component: AddFatturaClienteComponent;
  let fixture: ComponentFixture<AddFatturaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFatturaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFatturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
