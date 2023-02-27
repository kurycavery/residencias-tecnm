import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-extra-school',
  templateUrl: './verify-extra-school.component.html',
  styleUrls: ['./verify-extra-school.component.scss']
})
export class VerifyExtraSchoolComponent {
  public LOGINFORMGROUP!: FormGroup;
  public submit = false;

  constructor(private router: Router, private Location: Location){}

  ngOnInit(): void {
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

}
