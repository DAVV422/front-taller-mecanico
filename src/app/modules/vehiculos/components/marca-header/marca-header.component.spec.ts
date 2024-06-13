import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaHeaderComponent } from './marca-header.component';

describe('MarcaHeaderComponent', () => {
  let component: MarcaHeaderComponent;
  let fixture: ComponentFixture<MarcaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
