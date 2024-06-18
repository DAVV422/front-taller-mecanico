import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTableItemComponent } from './detalle-table-item.component';

describe('DetalleTableItemComponent', () => {
  let component: DetalleTableItemComponent;
  let fixture: ComponentFixture<DetalleTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
