import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyServiceSocialComponent } from './verify-service-social.component';

describe('VerifyServiceSocialComponent', () => {
  let component: VerifyServiceSocialComponent;
  let fixture: ComponentFixture<VerifyServiceSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyServiceSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyServiceSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
