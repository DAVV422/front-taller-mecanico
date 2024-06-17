import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSalidaComponent } from './productosalida.component';

describe('ProductoSalidaComponent', () => {
  let component: ProductoSalidaComponent;
  let fixture: ComponentFixture<ProductoSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
