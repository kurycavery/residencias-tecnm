import {
  Input,
  Output,
  OnInit,
  Component,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InputsService } from '../../services/inputs/inputs.service';
import { InputErrorCatalogInterface } from '../../interfaces/input-error-catalog.interface';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputTextComponent implements OnInit {

  @Input() label = '';
  @Input() idInput = 'inputText';
  @Input() placeholder!: string;
  @Input() control!: FormControl;
  @Input() submit!: boolean;
  @Input() readOnly = false;
  @Input() withNumbers = false;
  @Input() maxlength = 18;
  @Input() minlength = 4 ;
  @Input() maskRule = '';
  @Input() customErrorMessages: InputErrorCatalogInterface = {};
  @Output() valueChange = new EventEmitter<boolean>();
  public alertMessage = '';
  public required = false;

  constructor(
    public inputsService: InputsService,
  ) {}

  ngOnInit(): void {
    this.required = this.control.hasValidator(Validators.required);
    if ( !this.withNumbers ){
      this.control.addValidators( Validators.pattern(/[a-zA-Z]/));
      this.control.updateValueAndValidity();
    }
  }

  public changeText(): void {
    this.control.setValue(this.control.value.trim());
  }

}
