import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-service-social',
  templateUrl: './verify-service-social.component.html',
  styleUrls: ['./verify-service-social.component.scss']
})
export class VerifyServiceSocialComponent {
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

}
