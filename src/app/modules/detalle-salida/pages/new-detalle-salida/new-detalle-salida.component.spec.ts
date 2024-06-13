import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDetalleSalidaComponent } from './new-detalle-salida.component';

describe('NewDetalleSalidaComponent', () => {
  let component: NewDetalleSalidaComponent;
  let fixture: ComponentFixture<NewDetalleSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDetalleSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewDetalleSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
