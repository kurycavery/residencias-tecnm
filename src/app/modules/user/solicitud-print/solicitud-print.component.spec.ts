import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudPrintComponent } from './solicitud-print.component';

describe('SolicitudPrintComponent', () => {
  let component: SolicitudPrintComponent;
  let fixture: ComponentFixture<SolicitudPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudPrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
