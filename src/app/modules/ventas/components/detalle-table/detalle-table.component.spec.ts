import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTableComponent } from './detalle-table.component';

describe('DetalleTableComponent', () => {
  let component: DetalleTableComponent;
  let fixture: ComponentFixture<DetalleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
