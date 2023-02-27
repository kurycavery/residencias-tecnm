import { InputPasswordComponent } from './components/input-password/input-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { CoreModule } from '../core/core.module';
import { InputEmailComponent } from './components/input-email/input-email.component';


@NgModule({
  declarations: [
    InputTextComponent,
    InputEmailComponent,
    InputPasswordComponent
  ],
  exports: [
    InputTextComponent,
    InputEmailComponent,
    InputPasswordComponent
  ],imports: [
    CommonModule,
    CoreModule
  ]
})
export class SharedModule { }
