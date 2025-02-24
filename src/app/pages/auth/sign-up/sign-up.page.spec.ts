import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingUpPage } from './sign-up.page';

describe('SingUpPage', () => {
  let component: SingUpPage;
  let fixture: ComponentFixture<SingUpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
