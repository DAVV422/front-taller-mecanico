import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntradaComponent } from './new-entrada.component';

describe('NewEntradaComponent', () => {
  let component: NewEntradaComponent;
  let fixture: ComponentFixture<NewEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEntradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
