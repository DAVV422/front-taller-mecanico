import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPersonalComponent } from './show-personal.component';

describe('ShowPersonalComponent', () => {
  let component: ShowPersonalComponent;
  let fixture: ComponentFixture<ShowPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
