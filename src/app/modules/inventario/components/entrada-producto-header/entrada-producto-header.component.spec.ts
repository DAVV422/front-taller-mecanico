import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaProductoHeaderComponent } from './entrada-producto-header.component';

describe('EntradaProductoHeaderComponent', () => {
  let component: EntradaProductoHeaderComponent;
  let fixture: ComponentFixture<EntradaProductoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaProductoHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradaProductoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
