import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaHeaderComponent } from './cita-header.component';

describe('CitaHeaderComponent', () => {
  let component: CitaHeaderComponent;
  let fixture: ComponentFixture<CitaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
