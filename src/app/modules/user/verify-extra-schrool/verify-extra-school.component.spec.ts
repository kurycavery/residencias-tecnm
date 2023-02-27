import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyExtraSchoolComponent } from './verify-extra-school.component';

describe('VerifyExtraSchoolComponent', () => {
  let component: VerifyExtraSchoolComponent;
  let fixture: ComponentFixture<VerifyExtraSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyExtraSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyExtraSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
