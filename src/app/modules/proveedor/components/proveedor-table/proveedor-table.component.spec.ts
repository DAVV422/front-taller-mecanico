import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorTableComponent } from './proveedor-table.component';

describe('ProveedorTableComponent', () => {
  let component: ProveedorTableComponent;
  let fixture: ComponentFixture<ProveedorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedorTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProveedorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
