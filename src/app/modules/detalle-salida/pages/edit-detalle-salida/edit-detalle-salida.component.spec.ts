import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetalleSalidaComponent } from './edit-detalle-salida.component';

describe('EditDetalleSalidaComponent', () => {
  let component: EditDetalleSalidaComponent;
  let fixture: ComponentFixture<EditDetalleSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDetalleSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditDetalleSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
