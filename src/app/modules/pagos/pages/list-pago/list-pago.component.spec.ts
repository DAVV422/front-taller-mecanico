import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPagoComponent } from './list-pago.component';

describe('ListPagoComponent', () => {
  let component: ListPagoComponent;
  let fixture: ComponentFixture<ListPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPagoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
