import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetalleComponent } from './list-detalle.component';

describe('ListDetalleComponent', () => {
  let component: ListDetalleComponent;
  let fixture: ComponentFixture<ListDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
