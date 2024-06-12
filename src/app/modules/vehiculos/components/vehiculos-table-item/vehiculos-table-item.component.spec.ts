import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosTableItemComponent } from './vehiculos-table-item.component';

describe('VehiculosTableItemComponent', () => {
  let component: VehiculosTableItemComponent;
  let fixture: ComponentFixture<VehiculosTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculosTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculosTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
