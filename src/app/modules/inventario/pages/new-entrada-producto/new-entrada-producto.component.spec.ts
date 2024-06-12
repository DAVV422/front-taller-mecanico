import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntradaProductoComponent } from './new-entrada-producto.component';

describe('NewEntradaProductoComponent', () => {
  let component: NewEntradaProductoComponent;
  let fixture: ComponentFixture<NewEntradaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEntradaProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEntradaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
