import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoTableComponent } from './pago-table.component';

describe('PagoTableComponent', () => {
  let component: PagoTableComponent;
  let fixture: ComponentFixture<PagoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
