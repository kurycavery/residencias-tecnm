import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequiremntsComponent {
  public LOGINFORMGROUP!: FormGroup;
  public submit = false;

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  public goToInicio(): void {
    this.router.navigateByUrl('user');
  }

  public goToBack(): void {
    this.router.navigateByUrl('user/residencias');
  }

  public goToVerifyServiceSocial(): void {
    this.router.navigateByUrl('user/verify-service');
  }

  public goToVerifyExtraSchool(): void {
    this.router.navigateByUrl('user/verify-extra');
  }
  
  public goToAdvanceReticular(): void {
    this.router.navigateByUrl('user/advance-reticular');
  }
}
