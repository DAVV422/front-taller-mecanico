import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteHeaderComponent } from './cliente-header.component';

describe('ClienteHeaderComponent', () => {
  let component: ClienteHeaderComponent;
  let fixture: ComponentFixture<ClienteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
