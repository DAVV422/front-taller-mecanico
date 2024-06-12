import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalidaProductoComponent } from './edit-salida-producto.component';

describe('EditSalidaProductoComponent', () => {
  let component: EditSalidaProductoComponent;
  let fixture: ComponentFixture<EditSalidaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSalidaProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSalidaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
