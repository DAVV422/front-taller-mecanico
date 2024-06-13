import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetalleSalidaComponent } from './show-detalle-salida.component';

describe('ShowDetalleSalidaComponent', () => {
  let component: ShowDetalleSalidaComponent;
  let fixture: ComponentFixture<ShowDetalleSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDetalleSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDetalleSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
