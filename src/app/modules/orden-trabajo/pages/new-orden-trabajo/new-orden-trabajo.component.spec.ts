import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrdenTrabajoComponent } from './new-orden-trabajo.component';

describe('NewOrdenTrabajoComponent', () => {
  let component: NewOrdenTrabajoComponent;
  let fixture: ComponentFixture<NewOrdenTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewOrdenTrabajoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewOrdenTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
