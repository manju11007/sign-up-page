import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupConfirmPageComponent } from './signup-confirm-page.component';

describe('SignupConfirmPageComponent', () => {
  let component: SignupConfirmPageComponent;
  let fixture: ComponentFixture<SignupConfirmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupConfirmPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupConfirmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
