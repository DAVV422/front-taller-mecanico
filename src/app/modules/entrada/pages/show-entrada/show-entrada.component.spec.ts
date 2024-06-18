import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEntradaComponent } from './show-entrada.component';

describe('ShowEntradaComponent', () => {
  let component: ShowEntradaComponent;
  let fixture: ComponentFixture<ShowEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowEntradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
