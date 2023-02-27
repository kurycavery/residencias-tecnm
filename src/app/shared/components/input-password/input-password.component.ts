import { FormControl, Validators } from '@angular/forms';
import { InputsService } from '../../services/inputs/inputs.service';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { InputErrorCatalogInterface } from '../../interfaces/input-error-catalog.interface';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordComponent implements OnInit {

  @Input() label = '';
  @Input() idInput = 'inputPassword';
  @Input() placeholder!: string;
  @Input() control!: FormControl;
  @Input() submit!: boolean;
  @Input() customErrorMessages: InputErrorCatalogInterface = {};
  public alertMessage = '';
  public showPassword = false;
  public required = false;

  constructor(
    public inputsService: InputsService,
  ) {}

  ngOnInit(): void {
    this.required = this.control.hasValidator(Validators.required);
  }

  public changeVision(): void {
    this.showPassword = !this.showPassword;
  }

}
