import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServicioComponent } from './edit-servicio.component';

describe('EditServicioComponent', () => {
  let component: EditServicioComponent;
  let fixture: ComponentFixture<EditServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
