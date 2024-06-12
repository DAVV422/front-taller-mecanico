import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosTableItemComponent } from './productos-table-item.component';

describe('ProductosTableItemComponent', () => {
  let component: ProductosTableItemComponent;
  let fixture: ComponentFixture<ProductosTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductosTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
