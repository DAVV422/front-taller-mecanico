import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDetalleComponent } from './new-detalle.component';

describe('NewDetalleComponent', () => {
  let component: NewDetalleComponent;
  let fixture: ComponentFixture<NewDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
