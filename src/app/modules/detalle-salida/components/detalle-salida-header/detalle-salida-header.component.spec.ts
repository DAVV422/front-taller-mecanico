import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSalidaHeaderComponent } from './detalle-salida-header.component';

describe('DetalleSalidaHeaderComponent', () => {
  let component: DetalleSalidaHeaderComponent;
  let fixture: ComponentFixture<DetalleSalidaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSalidaHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleSalidaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
