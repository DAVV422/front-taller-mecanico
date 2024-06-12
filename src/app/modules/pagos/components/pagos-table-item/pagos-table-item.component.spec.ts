import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosTableItemComponent } from './pagos-table-item.component';

describe('PagosTableItemComponent', () => {
  let component: PagosTableItemComponent;
  let fixture: ComponentFixture<PagosTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagosTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagosTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
