import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDetalleServicioComponent } from './new-detalle-servicio.component';

describe('NewDetalleServicioComponent', () => {
  let component: NewDetalleServicioComponent;
  let fixture: ComponentFixture<NewDetalleServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDetalleServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDetalleServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
