import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntradaHeaderComponent } from './entrada-header.component';
//import { EntradaTableItemComponent } from './entrada-header.component';

describe('EntradaTableItemComponent', () => {
  let component: EntradaHeaderComponent;
  let fixture: ComponentFixture<EntradaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntradaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
