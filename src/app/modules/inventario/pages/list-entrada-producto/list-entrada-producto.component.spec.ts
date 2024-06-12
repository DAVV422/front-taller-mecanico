import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntradaProductoComponent } from './list-entrada-producto.component';

describe('ListEntradaProductoComponent', () => {
  let component: ListEntradaProductoComponent;
  let fixture: ComponentFixture<ListEntradaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEntradaProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEntradaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
