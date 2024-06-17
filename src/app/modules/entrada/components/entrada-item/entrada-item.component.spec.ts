import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaItemComponent } from './entrada-item.component';

describe('EntradaItemComponent', () => {
  let component: EntradaItemComponent;
  let fixture: ComponentFixture<EntradaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
