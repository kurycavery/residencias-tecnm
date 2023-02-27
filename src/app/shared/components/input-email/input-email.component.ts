import { FormControl, Validators } from '@angular/forms';
import { InputsService } from '../../services/inputs/inputs.service';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { InputErrorCatalogInterface } from '../../interfaces/input-error-catalog.interface';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputEmailComponent implements OnInit {

  @Input() label = '';
  @Input() idInput = 'inputEmail';
  @Input() placeholder!: string;
  @Input() control!: FormControl;
  @Input() submit!: boolean;
  @Input() readOnly = false;
  @Input() maskRule = '';
  @Input() customErrorMessages: InputErrorCatalogInterface = {};
  public minlength = 4 ;
  public maxlength = 360;
  public alertMessage = '';
  public required = false;

  constructor(
    public inputsService: InputsService,
  ) {}

  ngOnInit(): void {
    this.required = this.control.hasValidator(Validators.required);
  }

  public changueLowerCase(): void {
    this.control.setValue(this.control.value.toLowerCase());
  }

}
