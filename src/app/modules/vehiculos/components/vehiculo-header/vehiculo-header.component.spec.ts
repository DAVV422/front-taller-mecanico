import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoHeaderComponent } from './vehiculo-header.component';

describe('VehiculoHeaderComponent', () => {
  let component: VehiculoHeaderComponent;
  let fixture: ComponentFixture<VehiculoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehiculoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
