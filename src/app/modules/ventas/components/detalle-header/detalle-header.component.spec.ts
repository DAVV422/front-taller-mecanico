import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleHeaderComponent } from './detalle-header.component';

describe('DetalleHeaderComponent', () => {
  let component: DetalleHeaderComponent;
  let fixture: ComponentFixture<DetalleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
