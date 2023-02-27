import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CertifiedGenerationService } from 'src/app/shared/services/certificate-pdf/certified-generation.service';
import { pdfInfoSolicitud } from 'src/app/shared/services/certificate-pdf/interface.interface';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent {
  public FIRSTFORMGROUP!: FormGroup;
  public submit1 = false;
  public SECONDFORMGROUP!: FormGroup;
  public submit2 = false;
  public THIRDFORMGROUP!: FormGroup;
  public submit3 = false;
  public FOURFORMGROUP!: FormGroup;
  public submit4 = false;

  public title = 'DATOS DEL SOLICITANTE';
  public actualForm = 'first';
  public description = 'Verifica tu información personal, si algun dato es incorrrecto favor de acuduir a servicios escolares';
  public showFirst = true;
  public showSecond = false;
  public showThird = false;
  public showFour = false;

  public showEnd = false;
  public textButtton = 'Siguiente >';

  constructor(
    private router: Router, 
    private Location: Location,
    private pdfService: CertifiedGenerationService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initFirstFormGroup();
    this.initSecondFormGroup();
    this.initThirdFormGroup();
    this.initFourFormGroup();
  }

  private initFirstFormGroup(): void {
    this.FIRSTFORMGROUP = this.formBuilder.group({
      noControl: [null, Validators.required],
      name: [null, Validators.required],
      numberPhone: [null, Validators.required],
      socialSecurity: [null, Validators.required],
      carrera: [null, Validators.required],
      domicilio: [null, Validators.required],
      numerodeseguro: [null, Validators.required],
      email: [ null, [ 
        Validators.required, 
        Validators.email,
        // eslint-disable-next-line max-len
        Validators.pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i),
      ]],
    });
  }

  public get noControlControl(): FormControl {
    return this.FIRSTFORMGROUP.get('noControl') as FormControl;
  }
  public get nameStudentControl(): FormControl {
    return this.FIRSTFORMGROUP.get('name') as FormControl;
  }
  public get phoneStudentControl(): FormControl {
    return this.FIRSTFORMGROUP.get('numberPhone') as FormControl;
  }
  public get socialSecurityControl(): FormControl {
    return this.FIRSTFORMGROUP.get('socialSecurity') as FormControl;
  }
  public get carreraControl(): FormControl {
    return this.FIRSTFORMGROUP.get('carrera') as FormControl;
  }
  public get domicilioControl(): FormControl {
    return this.FIRSTFORMGROUP.get('domicilio') as FormControl;
  }
  public get numerodeSeguroControl(): FormControl {
    return this.FIRSTFORMGROUP.get('numerodeseguro') as FormControl;
  }
  public get emailControl(): FormControl {
    return this.FIRSTFORMGROUP.get('email') as FormControl;
  }

  private initSecondFormGroup(): void {
    this.SECONDFORMGROUP = this.formBuilder.group({
      periodoProyevtdo: [null, Validators.required],
      nameProyecto: [null, Validators.required],
      option: [null, Validators.required],
      numberResidentes: [null, Validators.required],
    });
  }

  public get periodoProyevtdoControl(): FormControl {
    return this.SECONDFORMGROUP.get('periodoProyevtdo') as FormControl;
  }

  public get nameProyectotdoControl(): FormControl {
    return this.SECONDFORMGROUP.get('nameProyecto') as FormControl;
  }

  public get optionControl(): FormControl {
    return this.SECONDFORMGROUP.get('option') as FormControl;
  }

  public get numberResidentesControl(): FormControl {
    return this.SECONDFORMGROUP.get('numberResidentes') as FormControl;
  }

  private initThirdFormGroup(): void {
    this.THIRDFORMGROUP = this.formBuilder.group({
      nombreEmpresa: [null, Validators.required],
      RFC: [null, Validators.required],
      giro: [null, Validators.required],
      calleNumber: [null, Validators.required],
      nombretitular: [null, Validators.required],
      puestoTitular: [null, Validators.required],
      asesorExterno: [null, Validators.required],
      puestoAsesor: [null, Validators.required],
    });
  }

  public get nombreEmpresaControl(): FormControl {
    return this.THIRDFORMGROUP.get('nombreEmpresa') as FormControl;
  }
  public get RFCControl(): FormControl {
    return this.THIRDFORMGROUP.get('RFC') as FormControl;
  }
  public get giroControl(): FormControl {
    return this.THIRDFORMGROUP.get('giro') as FormControl;
  }
  public get calleNumberControl(): FormControl {
    return this.THIRDFORMGROUP.get('calleNumber') as FormControl;
  }
  public get nombretitularControl(): FormControl {
    return this.THIRDFORMGROUP.get('nombretitular') as FormControl;
  }
  public get puestoTitularControl(): FormControl {
    return this.THIRDFORMGROUP.get('puestoTitular') as FormControl;
  }
  public get asesorExternoControl(): FormControl {
    return this.THIRDFORMGROUP.get('asesorExterno') as FormControl;
  }
  public get puestoAsesorControl(): FormControl {
    return this.THIRDFORMGROUP.get('puestoAsesor') as FormControl;
  }
  private initFourFormGroup(): void {
    this.FOURFORMGROUP = this.formBuilder.group({
      colonia: [null, Validators.required],
      cp: [null, Validators.required],
      telefonoEmpresa: [null, Validators.required],
      ciudadEstado: [null, Validators.required],
      nombreTitular: [null, Validators.required],
      puestoIntermediario: [null, Validators.required],
      mision: [null, Validators.required],
    });
  }

  public get coloniaControl(): FormControl {
    return this.FOURFORMGROUP.get('colonia') as FormControl;
  }
  public get cpControl(): FormControl {
    return this.FOURFORMGROUP.get('cp') as FormControl;
  }
  public get ciudadEstadoControl(): FormControl {
    return this.FOURFORMGROUP.get('ciudadEstado') as FormControl;
  }
  public get telefonoEmpresaControl(): FormControl {
    return this.FOURFORMGROUP.get('telefonoEmpresa') as FormControl;
  }
  public get nombreTitularControl(): FormControl {
    return this.FOURFORMGROUP.get('nombreTitular') as FormControl;
  }
  public get puestoIntermediarioControl(): FormControl {
    return this.FOURFORMGROUP.get('puestoIntermediario') as FormControl;
  }
  public get misionControl(): FormControl {
    return this.FOURFORMGROUP.get('mision') as FormControl;
  }
  public goToInicio(): void {
    this.router.navigateByUrl('user');
  }

  public goToBack(): void {
    this.Location.back();
  }

  public goToVerifyServiceSocial(): void {
    this.router.navigateByUrl('user/verify-service');
  }

  public goToVerifyExtraSchool(): void {
    this.router.navigateByUrl('user/verify-extra');
  }

  public rfcChange(): void {
    this.RFCControl.setValue( this.RFCControl.value.toLocaleUpperCase());
  }

  public nextForm( type: string ): void {
   
    if( type === 'first') {
      this.submit1 = true;
    } else if( type === 'second') {
      this.submit2 = true;
    } else if( type === 'third') {
      this.submit3= true;
    } else if( type === 'four') {
      this.submit4 = true;
    }
    if( type === 'first' && this.FIRSTFORMGROUP.valid) {
      this.showFirst = false;
      this.showSecond = true;
      this.showThird = false;
      this.showFour = false;
      this.showEnd = false;
      this.title = 'DATOS DEL PROYECTO'
      this.actualForm = 'second';
    } else if( type === 'second' && this.SECONDFORMGROUP.valid ) {
      this.showFirst = false;
      this.showSecond = false;
      this.showThird = true;
      this.showFour = false;
      this.showEnd = false;
      this.title = 'DATOS DE LA EMPRESA'
      this.actualForm = 'third';
    } else if( type === 'third' && this.THIRDFORMGROUP.valid ) {
      this.showFirst = false;
      this.showSecond = false;
      this.showThird = false;
      this.showFour = true;
      this.showEnd = false;
      this.actualForm = 'four';
      this.textButtton = 'Finalizar';
    } else if( type === 'four' && this.FOURFORMGROUP.valid ) {
      this.showFirst = false;
      this.showSecond = false;
      this.showThird = false;
      this.showFour = false;
      this.showEnd = true;
      this.actualForm = 'end';
      this.title = 'DATOS DEL SOLICITANTE';
      this.textButtton = 'Siguiente >';
    } else if( type === 'end' && this.FOURFORMGROUP.valid ) {
      this.showFirst = false;
      this.showSecond = false;
      this.showThird = false;
      this.showFour = false;
      this.showEnd = true;
      this.actualForm = 'end';
      this.title = 'DATOS DEL SOLICITANTE';
      this.textButtton = 'Siguiente >';
    } 
  }

  public modifyAgain(): void {
    this.title = 'DATOS DEL SOLICITANTE';
    this.actualForm = 'first';
    this.description = 'Verifica tu información personal, si algun dato es incorrrecto favor de acuduir a servicios escolares';
    this.showFirst = true;
    this.showSecond = false;
    this.showThird = false;
    this.showFour = false;
  
    this.showEnd = false;
    this.textButtton = 'Siguiente >';
  }


  // When need print the request

  public printPDF(): void {
    if( this.FIRSTFORMGROUP.valid && this.SECONDFORMGROUP.valid && this.THIRDFORMGROUP.valid && this.FOURFORMGROUP.valid ) {
      const bodyToPDF: pdfInfoSolicitud = {
        noControl: this.noControlControl.value,
        nombre: this.nameStudentControl.value,
        telefono: this.phoneStudentControl.value,
        seguroSocial: this.socialSecurityControl.value,
        email: this.emailControl.value,
        carrera: this.carreraControl.value,
        domicilio: this.domicilioControl.value,
        noSeguro: this.numerodeSeguroControl.value,
        periodoProyect: this.periodoProyevtdoControl.value,
        nombreProyecto: this.nameProyectotdoControl.value,
        opcionelEgida: this.optionControl.value,
        noResidentes: this.numberResidentesControl.value,
        nameEmpresa: this.nombreEmpresaControl.value,
        rfc: this.RFCControl.value,
        giro: this.giroControl.value,
        calleNumber: this.calleNumberControl.value,
        titularName: this.nombretitularControl.value,
        puestotitular: this.puestoTitularControl.value,
        asesorExt: this.asesorExternoControl.value,
        puestoAseExt: this.puestoAsesorControl.value,
        colonia: this.coloniaControl.value,
        cp: this.cpControl.value,
        ciudadEstado: this.ciudadEstadoControl.value,
        telefonoEmpresa: this.telefonoEmpresaControl.value,
        intermediarioName: this.nombreTitularControl.value,
        puestoIntermediario: this.puestoIntermediarioControl.value,
        misionEmpresa: this.misionControl.value
    }

      this.pdfService.downLoadPdf( bodyToPDF );
    }
  }

}
