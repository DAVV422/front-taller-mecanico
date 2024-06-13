import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaTableItemComponent } from './cita-table-item.component';

describe('CitaTableItemComponent', () => {
  let component: CitaTableItemComponent;
  let fixture: ComponentFixture<CitaTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitaTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
