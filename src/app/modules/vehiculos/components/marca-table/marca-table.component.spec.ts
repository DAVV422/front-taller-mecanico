import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaTableComponent } from './marca-table.component';

describe('MarcaTableComponent', () => {
  let component: MarcaTableComponent;
  let fixture: ComponentFixture<MarcaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
