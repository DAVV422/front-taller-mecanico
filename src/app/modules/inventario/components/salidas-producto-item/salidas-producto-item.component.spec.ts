import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidasProductoItemComponent } from './salidas-producto-item.component';

describe('SalidasProductoItemComponent', () => {
  let component: SalidasProductoItemComponent;
  let fixture: ComponentFixture<SalidasProductoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalidasProductoItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalidasProductoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
