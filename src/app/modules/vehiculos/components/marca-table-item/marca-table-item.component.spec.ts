import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaTableItemComponent } from './marca-table-item.component';

describe('MarcaTableItemComponent', () => {
  let component: MarcaTableItemComponent;
  let fixture: ComponentFixture<MarcaTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcaTableItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarcaTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
