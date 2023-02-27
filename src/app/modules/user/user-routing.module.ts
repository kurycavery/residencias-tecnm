import { ResidenciasComponent } from './residencias/residencias.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RequiremntsComponent } from './requirements/requirements.component';
import { VerifyServiceSocialComponent } from './verify-service-social/verify-service-social.component';
import { VerifyExtraSchoolComponent } from './verify-extra-schrool/verify-extra-school.component';
import { AdvanceRequiremntsComponent } from './advance-reticular/advance-requirements.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
   children: [
    { path: '', component: InicioComponent },
    { path: 'residencias', component: ResidenciasComponent },
    { path: 'requirements', component: RequiremntsComponent },
    { path: 'solicitud', component: SolicitudComponent },
    { path: 'verify-extra', component: VerifyExtraSchoolComponent },
    { path: 'verify-service', component: VerifyServiceSocialComponent },
    { path: 'advance-reticular', component: AdvanceRequiremntsComponent },
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
