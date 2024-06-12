import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaProductoTableComponent } from './salida-producto-table.component';

describe('SalidaProductoTableComponent', () => {
  let component: SalidaProductoTableComponent;
  let fixture: ComponentFixture<SalidaProductoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalidaProductoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalidaProductoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
