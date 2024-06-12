import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoTableComponent } from './orden-trabajo-table.component';

describe('OrdenTrabajoTableComponent', () => {
  let component: OrdenTrabajoTableComponent;
  let fixture: ComponentFixture<OrdenTrabajoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenTrabajoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenTrabajoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
