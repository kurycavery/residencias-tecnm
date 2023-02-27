import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceRequiremntsComponent } from './advance-requirements.component';

describe('AdvanceRequiremntsComponent', () => {
  let component: AdvanceRequiremntsComponent;
  let fixture: ComponentFixture<AdvanceRequiremntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceRequiremntsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceRequiremntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
