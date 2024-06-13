import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorItemComponent } from './proveedor-item.component';

describe('ProveedorItemComponent', () => {
  let component: ProveedorItemComponent;
  let fixture: ComponentFixture<ProveedorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedorItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProveedorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
