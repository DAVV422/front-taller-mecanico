import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaItemComponent } from './salida-item.component';

describe('SalidaItemComponent', () => {
  let component: SalidaItemComponent;
  let fixture: ComponentFixture<SalidaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalidaItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalidaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
