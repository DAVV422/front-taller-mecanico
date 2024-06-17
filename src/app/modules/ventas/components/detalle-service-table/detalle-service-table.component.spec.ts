import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleServiceTableComponent } from './detalle-service-table.component';

describe('DetalleServiceTableComponent', () => {
  let component: DetalleServiceTableComponent;
  let fixture: ComponentFixture<DetalleServiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleServiceTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleServiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
