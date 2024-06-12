import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVehiculoComponent } from './show-vehiculo.component';

describe('ShowVehiculoComponent', () => {
  let component: ShowVehiculoComponent;
  let fixture: ComponentFixture<ShowVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
