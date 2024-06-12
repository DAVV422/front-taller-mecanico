import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdenTrabajoComponent } from './list-orden-trabajo.component';

describe('ListOrdenTrabajoComponent', () => {
  let component: ListOrdenTrabajoComponent;
  let fixture: ComponentFixture<ListOrdenTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOrdenTrabajoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOrdenTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
