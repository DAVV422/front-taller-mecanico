import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServicioComponent } from './show-servicio.component';

describe('ShowServicioComponent', () => {
  let component: ShowServicioComponent;
  let fixture: ComponentFixture<ShowServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
