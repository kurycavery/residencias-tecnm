import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CertifiedGenerationService } from 'src/app/shared/services/certificate-pdf/certified-generation.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  constructor( private router: Router, private pdf: CertifiedGenerationService ) {}

  public gotoResidencias(): void {
    this.router.navigateByUrl('user/residencias')
  }

  public goToVerifyServiceSocial(): void {
    this.router.navigateByUrl('user/verify-service');
  }

  public goToAdvanceReticular(): void {
    this.router.navigateByUrl('user/advance-reticular');
  }

  public generate(): void {
    // this.pdf.downLoadPdf();
  }

}
