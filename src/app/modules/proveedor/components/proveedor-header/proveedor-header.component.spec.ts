import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorHeaderComponent } from './proveedor-header.component';

describe('ProveedorHeaderComponent', () => {
  let component: ProveedorHeaderComponent;
  let fixture: ComponentFixture<ProveedorHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedorHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProveedorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
