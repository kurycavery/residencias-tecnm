import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputErrorCatalogInterface } from '../../interfaces/input-error-catalog.interface';

@Injectable({
  providedIn: 'root'
})
export class InputsService {

  constructor() { }

  public getErrorString(
    control: FormControl,
    customErrorMessages: InputErrorCatalogInterface = {}
  ): string {
    // eslint-disable-next-line max-len
    const emailPattern = '/(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])/i';
    if (!control.errors) {
      return '';
    } else {
      if (control.hasError('required')) {
        const ALERT = customErrorMessages.required ?
          customErrorMessages.required :
          'Es requerido';
        return ALERT;
      } else if (control.hasError('minlength')) {
        const ALERT = customErrorMessages.minlength ?
          customErrorMessages.minlength :
          'No cumple con el minimo de caracteres' +
            control.errors['minlength'].requiredLength;
        return ALERT;
      } else if (control.hasError('maxlength')) {
        const ALERT = customErrorMessages.maxlength ?
          customErrorMessages.maxlength :
          'No cumple con el maximo de caracteres' +
            control.errors['maxlength'].requiredLength;
        return ALERT;
      } else if (control.hasError('min')) {
        const ALERT = customErrorMessages.min ?
          customErrorMessages.min :
          'No cumple con el numero menor' +
            control.errors['min'].min;
        return ALERT;
      } else if (control.hasError('max')) {
        const ALERT = customErrorMessages.max ?
          customErrorMessages.max :
          'No cumple con el numero mayor' +
            control.errors['max'].max;
        return ALERT;
      } else if (control.hasError('minDate')) {
        const ALERT = customErrorMessages.minDate ?
          customErrorMessages.minDate :
          'No cumple con la fecha minima' +
            control.errors['date'];
        return ALERT;
      } else if (control.hasError('maxDate')) {
        const ALERT = customErrorMessages.maxDate ?
          customErrorMessages.maxDate :
          'No cumple con la fecha maxima'  +
            control.errors['date'];
        return ALERT;
      } else if (control.hasError('email')) {
        return 'Digite un correo Valido';
      } else if (control.hasError('confirmedValidator')) {
        return 'Las contraseñas no son iguales';
      } else if (control.hasError('mask') && control.errors['mask'].requiredMask === '00000') {
        return 'Digite un codigo postal valido';
      } else if ( control.errors['pattern'].requiredPattern === '^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$' ) {
        return 'Digite un RFC Valido';
      } else if ( control.errors['pattern'].requiredPattern === '/[a-zA-Z]/' ){
        return 'No se permiten espacios en blanco';
      }else if ( control.errors['pattern'].requiredPattern === emailPattern ) {
        return 'digite un correo valido';
      } else if ( control.errors['pattern'].requiredPattern === '^[^\' \']+$' ) {
        return 'Digite la contraseña sin espacios';
      } else {
        return 'unknown error';
      }
    }
  }

}
