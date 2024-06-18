import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleServiceTableItemComponent } from './detalle-service-table-item.component';

describe('DetalleServiceTableItemComponent', () => {
  let component: DetalleServiceTableItemComponent;
  let fixture: ComponentFixture<DetalleServiceTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleServiceTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleServiceTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
