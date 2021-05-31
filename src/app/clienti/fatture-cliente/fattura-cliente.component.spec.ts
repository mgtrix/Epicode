import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatturaClienteComponent } from './fatture-cliente.component';

describe('FatturaClienteComponent', () => {
  let component: FatturaClienteComponent;
  let fixture: ComponentFixture<FatturaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatturaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
