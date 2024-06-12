import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaProductoHeaderComponent } from './salida-producto-header.component';

describe('SalidaProductoHeaderComponent', () => {
  let component: SalidaProductoHeaderComponent;
  let fixture: ComponentFixture<SalidaProductoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalidaProductoHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalidaProductoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
