import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleSalidaItemComponent } from './detalle-salida-item.component';

//import { DetalleSalidaTableItemComponent } from './detalle-salida-item.component';

describe('DetalleSalidaItemComponent', () => {
  let component: DetalleSalidaItemComponent;
  let fixture: ComponentFixture<DetalleSalidaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSalidaItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleSalidaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
