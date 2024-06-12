import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalidaProductoComponent } from './new-salida-producto.component';

describe('NewSalidaProductoComponent', () => {
  let component: NewSalidaProductoComponent;
  let fixture: ComponentFixture<NewSalidaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSalidaProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSalidaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
