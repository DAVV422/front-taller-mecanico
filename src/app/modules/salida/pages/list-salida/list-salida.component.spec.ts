import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalidaComponent } from './list-salida.component';

describe('ListSalidaComponent', () => {
  let component: ListSalidaComponent;
  let fixture: ComponentFixture<ListSalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSalidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
