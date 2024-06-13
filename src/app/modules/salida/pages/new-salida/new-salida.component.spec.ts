import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalidaComponent } from './new-salida.component';

describe('NewSalidaComponent', () => {
  let component: NewSalidaComponent;
  let fixture: ComponentFixture<NewSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
