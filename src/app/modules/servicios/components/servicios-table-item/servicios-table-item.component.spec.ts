import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosTableItemComponent } from './servicios-table-item.component';

describe('ServiciosTableItemComponent', () => {
  let component: ServiciosTableItemComponent;
  let fixture: ComponentFixture<ServiciosTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
