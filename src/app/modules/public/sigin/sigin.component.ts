import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent {
  public LOGINFORMGROUP!: FormGroup;
  public submit = false;

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.initLoginFormGroup();
  }

  private initLoginFormGroup(): void {
    this.LOGINFORMGROUP = this.formBuilder.group({
      email: [ null, [ 
        Validators.required, 
        Validators.email,
        // eslint-disable-next-line max-len
        Validators.pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i),
      ]],
      password: [ null, [ Validators.required ] ],
    });
  }

  public get loginEmailControl(): FormControl {
    return this.LOGINFORMGROUP.get('email') as FormControl;
  }
  public get loginPasswordControl(): FormControl {
    return this.LOGINFORMGROUP.get('password') as FormControl;
  }

  // ---------- To send form------
  public sendValidate(): void {
    this.submit = true;
    if ( this.LOGINFORMGROUP.valid ) {
      // If is valid send to home 
      this.router.navigateByUrl('user');

    }
  } 

}
