import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMarcaComponent } from './show-marca.component';

describe('ShowMarcaComponent', () => {
  let component: ShowMarcaComponent;
  let fixture: ComponentFixture<ShowMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMarcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
