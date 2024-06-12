import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEntradaProductoComponent } from './edit-entrada-producto.component';

describe('EditEntradaProductoComponent', () => {
  let component: EditEntradaProductoComponent;
  let fixture: ComponentFixture<EditEntradaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEntradaProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEntradaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
