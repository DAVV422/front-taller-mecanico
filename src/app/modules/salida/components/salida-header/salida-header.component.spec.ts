import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalidaTableItemComponent } from './salida-header.component';

describe('SalidaTableItemComponent', () => {
  let component: SalidaTableItemComponent;
  let fixture: ComponentFixture<SalidaTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalidaTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalidaTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
