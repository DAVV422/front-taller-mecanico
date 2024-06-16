import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaTableComponent } from './cita-table.component';

describe('CitaTableComponent', () => {
  let component: CitaTableComponent;
  let fixture: ComponentFixture<CitaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
