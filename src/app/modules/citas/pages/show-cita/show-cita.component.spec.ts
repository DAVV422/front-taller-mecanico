import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCitaComponent } from './show-cita.component';

describe('ShowCitaComponent', () => {
  let component: ShowCitaComponent;
  let fixture: ComponentFixture<ShowCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
