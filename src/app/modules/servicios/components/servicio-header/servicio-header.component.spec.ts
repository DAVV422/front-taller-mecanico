import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioHeaderComponent } from './servicio-header.component';

describe('ServicioHeaderComponent', () => {
  let component: ServicioHeaderComponent;
  let fixture: ComponentFixture<ServicioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
