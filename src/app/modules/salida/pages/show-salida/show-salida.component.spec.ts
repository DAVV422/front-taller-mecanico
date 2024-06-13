import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSalidaComponent } from './show-salida.component';

describe('ShowSalidaComponent', () => {
  let component: ShowSalidaComponent;
  let fixture: ComponentFixture<ShowSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
