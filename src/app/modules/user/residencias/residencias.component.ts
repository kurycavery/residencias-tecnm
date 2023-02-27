import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residencias',
  templateUrl: './residencias.component.html',
  styleUrls: ['./residencias.component.scss']
})
export class ResidenciasComponent implements OnInit {
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  public goToInicio(): void {
    this.router.navigateByUrl('user');
  }

  public goToRequirements(): void {
    this.router.navigateByUrl('user/requirements');
  }

  public goToSolicitud(): void {
    this.router.navigateByUrl('user/solicitud');
  }

}
