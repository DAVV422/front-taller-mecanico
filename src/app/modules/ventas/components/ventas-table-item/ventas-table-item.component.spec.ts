import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasTableItemComponent } from './ventas-table-item.component';

describe('VentasTableItemComponent', () => {
  let component: VentasTableItemComponent;
  let fixture: ComponentFixture<VentasTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentasTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
