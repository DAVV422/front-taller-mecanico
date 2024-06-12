import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalidaProductoComponent } from './list-salida-producto.component';

describe('ListSalidaProductoComponent', () => {
  let component: ListSalidaProductoComponent;
  let fixture: ComponentFixture<ListSalidaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSalidaProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSalidaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
