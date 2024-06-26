import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteItemComponent } from './cliente-item.component';

describe('ClienteItemComponent', () => {
  let component: ClienteItemComponent;
  let fixture: ComponentFixture<ClienteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
