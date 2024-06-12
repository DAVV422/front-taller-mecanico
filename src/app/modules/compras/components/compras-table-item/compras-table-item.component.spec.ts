import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasTableItemComponent } from './compras-table-item.component';

describe('ComprasTableItemComponent', () => {
  let component: ComprasTableItemComponent;
  let fixture: ComponentFixture<ComprasTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprasTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprasTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
