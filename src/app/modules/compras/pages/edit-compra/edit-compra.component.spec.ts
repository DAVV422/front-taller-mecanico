import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompraComponent } from './edit-compra.component';

describe('EditCompraComponent', () => {
  let component: EditCompraComponent;
  let fixture: ComponentFixture<EditCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCompraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
