import { ResidenciasComponent } from './residencias/residencias.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { RequiremntsComponent } from './requirements/requirements.component';
import { VerifyServiceSocialComponent } from './verify-service-social/verify-service-social.component';
import { VerifyExtraSchoolComponent } from './verify-extra-schrool/verify-extra-school.component';
import { AdvanceRequiremntsComponent } from './advance-reticular/advance-requirements.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    InicioComponent,
    SolicitudComponent,
    RequiremntsComponent,
    ResidenciasComponent,
    VerifyExtraSchoolComponent,
    AdvanceRequiremntsComponent,
    VerifyServiceSocialComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
