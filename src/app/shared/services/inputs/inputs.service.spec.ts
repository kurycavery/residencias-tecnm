import { TestBed } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { InputsService } from './inputs.service';
import { TranslateModule } from '@ngx-translate/core';

describe('GIVEN InputsService', () => {
  let service: InputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
    ],
    });
    service = TestBed.inject(InputsService);
  });

  it('WHEN init THEN should be created', () => {
    expect(service).toBeTruthy();
  });

  it('WHEN control is valid THEN return emply', () => {
    const TESTCONTROL = new FormControl('test', Validators.required);
    expect(service.getErrorString(TESTCONTROL)).toBe('');
  });

  it('WHEN control is required and is invalid THEN return an error string', () => {
    const TESTCONTROL = new FormControl(null, Validators.required);
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.required');
  });

  it('WHEN control is required and invalid BUT have custom message THEN return an error string', () => {
    const TESTCONTROL = new FormControl(null, Validators.required);
    expect(service.getErrorString(TESTCONTROL, {required: 'inputAlerts.custom'})).toBe('inputAlerts.custom');
  });

  it('WHEN control have minLength and is invalid THEN return an error string', () => {
    const TESTCONTROL = new FormControl('test', Validators.minLength(100));
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.minLenght100');
  });

  it('WHEN control have minLength and is invalid BUT have custom message THEN return an error string', () => {
    const TESTCONTROL = new FormControl('test', Validators.minLength(100));
    expect(service.getErrorString(TESTCONTROL, {minlength: 'inputAlerts.custom'})).toBe('inputAlerts.custom');
  });

  it('WHEN the maxlength error is true THEN return an error string', () => {
    const TESTCONTROL = new FormControl('test', Validators.maxLength(1));
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.maxLenght1');
  });

  it('WHEN the maxlength error is true BUT have custom message THEN return an error string', () => {
    const TESTCONTROL = new FormControl('test', Validators.maxLength(1));
    expect(service.getErrorString(TESTCONTROL, {maxlength: 'inputAlerts.custom'})).toBe('inputAlerts.custom');
  });

  it('WHEN the min error is true THEN return an error string', () => {
    const TESTCONTROL = new FormControl(10, Validators.min(100));
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.min100');
  });

  it('WHEN the min error is true BUT have custom message THEN return an error string', () => {
    const TESTCONTROL = new FormControl(10, Validators.min(100));
    expect(service.getErrorString(TESTCONTROL, {min: 'inputAlerts.custom'})).toBe('inputAlerts.custom');
  });

  it('WHEN the max error is true THEN return an error string', () => {
    const TESTCONTROL = new FormControl(10, Validators.max(1));
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.max1');
  });

  it('WHEN the max error is true BUT have custom message THEN return an error string', () => {
    const TESTCONTROL = new FormControl(10, Validators.max(1));
    expect(service.getErrorString(TESTCONTROL, {max: 'inputAlerts.custom'})).toBe('inputAlerts.custom');
  });

  it('WHEN the minDate error is true THEN return an error string', () => {
    const TESTCONTROL = new FormControl(null, Validators.required);
    TESTCONTROL.setErrors({ minDate: true});
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.minDateundefined');
  });

  it('WHEN the minDate error is true BUT have custom message THEN return an error string', () => {
    const TESTCONTROL = new FormControl(null, Validators.required);
    TESTCONTROL.setErrors({ minDate: true});
    expect(service.getErrorString(TESTCONTROL, {minDate: 'inputAlerts.custom'})).toBe('inputAlerts.custom');
  });

  it('WHEN the maxDate error is true THEN return an error string', () => {
    const TESTCONTROL = new FormControl(null, Validators.required);
    TESTCONTROL.setErrors({ maxDate: true});
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.maxDateundefined');
  });

  it('WHEN the maxDate error is true BUT have custom message THEN return an error string', () => {
    const TESTCONTROL = new FormControl(null, Validators.required);
    TESTCONTROL.setErrors({ maxDate: true});
    expect(service.getErrorString(TESTCONTROL, {maxDate: 'inputAlerts.custom'})).toBe('inputAlerts.custom');
  });

  it('WHEN the email error is true THEN return an error string', () => {
    const TESTCONTROL = new FormControl('test', Validators.email);
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.email');
  });

  it('WHEN the confirmedValidator error is true THEN return an error string', () => {
    const TESTCONTROL = new FormControl(null, Validators.required);
    TESTCONTROL.setErrors({ confirmedValidator: true });
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.confirmedValidator');
  });

  it('WHEN the requiredMask error is true THEN return an error string', () => {
    const TESTCONTROL = new FormControl(null, Validators.required);
    TESTCONTROL.setErrors({ mask: { requiredMask : '00000' } });
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.zipCode');
  });

  it('WHEN the rfc error is true THEN return an error string', () => {
    const TESTCONTROL = new FormControl('1', Validators.pattern('^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$'));
    expect(service.getErrorString(TESTCONTROL)).toBe('inputAlerts.rfc');
  });

  it('WHEN the control is invalid without especific error THEN return an error string', () => {
    const TESTCONTROL = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
    expect(service.getErrorString(TESTCONTROL)).toBe('unknown error');
  });

});
