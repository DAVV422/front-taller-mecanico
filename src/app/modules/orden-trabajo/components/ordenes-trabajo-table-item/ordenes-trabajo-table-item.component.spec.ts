import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesTrabajoTableItemComponent } from './ordenes-trabajo-table-item.component';

describe('OrdenesTrabajoTableItemComponent', () => {
  let component: OrdenesTrabajoTableItemComponent;
  let fixture: ComponentFixture<OrdenesTrabajoTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenesTrabajoTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenesTrabajoTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
