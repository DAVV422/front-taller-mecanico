import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDetalleSalidaComponent } from './list-detalle-salida.component';

//import { ListDetalleSalidaComponent } from './list-detalle-salida.component';

describe('ListDetalleSalidaComponent', () => {
  let component: ListDetalleSalidaComponent;
  let fixture: ComponentFixture<ListDetalleSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDetalleSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDetalleSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
