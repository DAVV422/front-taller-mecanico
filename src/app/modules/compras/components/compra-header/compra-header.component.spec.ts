import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraHeaderComponent } from './compra-header.component';

describe('CompraHeaderComponent', () => {
  let component: CompraHeaderComponent;
  let fixture: ComponentFixture<CompraHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompraHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompraHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
