import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasProductoItemComponent } from './entradas-producto-item.component';

describe('EntradasProductoItemComponent', () => {
  let component: EntradasProductoItemComponent;
  let fixture: ComponentFixture<EntradasProductoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradasProductoItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradasProductoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
