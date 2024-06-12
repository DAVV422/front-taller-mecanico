import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEntradaProductoComponent } from './show-entrada-producto.component';

describe('ShowEntradaProductoComponent', () => {
  let component: ShowEntradaProductoComponent;
  let fixture: ComponentFixture<ShowEntradaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowEntradaProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowEntradaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
