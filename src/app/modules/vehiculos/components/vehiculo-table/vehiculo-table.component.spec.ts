import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoTableComponent } from './vehiculo-table.component';

describe('VehiculoTableComponent', () => {
  let component: VehiculoTableComponent;
  let fixture: ComponentFixture<VehiculoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
