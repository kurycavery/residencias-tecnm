import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public showMenuMobil = false;
  
  constructor(
    private router: Router ){}
  
  public showOrHideMenu(): void  {
    this.showMenuMobil = !this.showMenuMobil;
  }

  public goToInicio(): void {
    this.router.navigateByUrl('user');
  }

  public goToResidencias(): void {
    this.router.navigateByUrl('user/residencias');
  }

  public goToServices(): void {
    this.router.navigateByUrl('user/verify-service');
  }

  public goToExtraEscolar(): void {
    this.router.navigateByUrl('user/advance-reticular');
  }

}
