import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFatturaClienteComponent } from './delete-fattura-cliente.component';

describe('DeleteFatturaClienteComponent', () => {
  let component: DeleteFatturaClienteComponent;
  let fixture: ComponentFixture<DeleteFatturaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFatturaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFatturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
