import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaHeaderComponent } from './venta-header.component';

describe('VentaHeaderComponent', () => {
  let component: VentaHeaderComponent;
  let fixture: ComponentFixture<VentaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentaHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
