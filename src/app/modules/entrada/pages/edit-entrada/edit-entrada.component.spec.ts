import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEntradaComponent } from './edit-entrada.component';

//import { EditEntradaComponent } from './edit-Entrada.component';

describe('EditEntradaComponent', () => {
  let component: EditEntradaComponent;
  let fixture: ComponentFixture<EditEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditEntradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
