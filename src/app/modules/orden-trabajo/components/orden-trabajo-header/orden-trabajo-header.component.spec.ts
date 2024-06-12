import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoHeaderComponent } from './orden-trabajo-header.component';

describe('OrdenTrabajoHeaderComponent', () => {
  let component: OrdenTrabajoHeaderComponent;
  let fixture: ComponentFixture<OrdenTrabajoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenTrabajoHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdenTrabajoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
