import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSalidaProductoComponent } from './show-salida-producto.component';

describe('ShowSalidaProductoComponent', () => {
  let component: ShowSalidaProductoComponent;
  let fixture: ComponentFixture<ShowSalidaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSalidaProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSalidaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
