import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoHeaderComponent } from './pago-header.component';

describe('PagoHeaderComponent', () => {
  let component: PagoHeaderComponent;
  let fixture: ComponentFixture<PagoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
