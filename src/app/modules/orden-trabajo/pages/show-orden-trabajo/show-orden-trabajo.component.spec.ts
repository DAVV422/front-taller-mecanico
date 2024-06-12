import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrdenTrabajoComponent } from './show-orden-trabajo.component';

describe('ShowOrdenTrabajoComponent', () => {
  let component: ShowOrdenTrabajoComponent;
  let fixture: ComponentFixture<ShowOrdenTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowOrdenTrabajoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowOrdenTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
