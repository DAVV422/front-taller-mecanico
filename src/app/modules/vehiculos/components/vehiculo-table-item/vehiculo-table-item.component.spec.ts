import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoTableItemComponent } from './vehiculo-table-item.component';

describe('VehiculoTableItemComponent', () => {
  let component: VehiculoTableItemComponent;
  let fixture: ComponentFixture<VehiculoTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculoTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
