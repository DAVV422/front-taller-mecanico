import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServicioComponent } from './list-servicio.component';

describe('ListServicioComponent', () => {
  let component: ListServicioComponent;
  let fixture: ComponentFixture<ListServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
