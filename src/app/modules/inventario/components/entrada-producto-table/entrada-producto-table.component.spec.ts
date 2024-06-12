import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaProductoTableComponent } from './entrada-producto-table.component';

describe('EntradaProductoTableComponent', () => {
  let component: EntradaProductoTableComponent;
  let fixture: ComponentFixture<EntradaProductoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaProductoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradaProductoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
