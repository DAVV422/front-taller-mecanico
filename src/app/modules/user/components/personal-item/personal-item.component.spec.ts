import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalItemComponent } from './personal-item.component';

describe('PersonalItemComponent', () => {
  let component: PersonalItemComponent;
  let fixture: ComponentFixture<PersonalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
