import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSalidaTableComponent } from './detalle-salida-table.component';

describe('DetalleSalidaTableComponent', () => {
  let component: DetalleSalidaTableComponent;
  let fixture: ComponentFixture<DetalleSalidaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSalidaTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleSalidaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
