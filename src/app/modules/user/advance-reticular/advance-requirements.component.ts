import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { semestre } from 'src/app/shared/interfaces/reticula.interface';

@Component({
  selector: 'app-advance-requirements',
  templateUrl: './advance-requirements.component.html',
  styleUrls: ['./advance-requirements.component.scss']
})
export class AdvanceRequiremntsComponent {
  public LOGINFORMGROUP!: FormGroup;
  public submit = false;

  constructor(private router: Router, private Location: Location){}

  // Datos para avance retucular 
  public  avanceReticular: semestre[] = [
    // Semestre 1
    {
      nombre: 'Semestre 1',
      materias: [
        {
          nombre: 'MATERIA 1',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 2',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 3',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 4',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        }
      ]
    },

    // Semestre 2
    {
      nombre: 'Semestre 2',
      materias: [
        {
          nombre: 'MATERIA 1',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 2',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 3',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 4',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 5',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        }
      ]
    },

    // Semestre 3
    {
      nombre: 'Semestre 3',
      materias: [
        {
          nombre: 'MATERIA 1',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 2',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 3',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 4',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 5',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        }
      ]
    },

    // Semestre 4
    {
      nombre: 'Semestre 4',
      materias: [
        {
          nombre: 'MATERIA 1',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 2',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 3',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 4',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 5',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        }
      ]
    },

    // Semestre 5
    {
      nombre: 'Semestre 5',
      materias: [
        {
          nombre: 'MATERIA 1',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 2',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 3',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 4',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 5',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        }
      ]
    },

    // Semestre 6
    {
      nombre: 'Semestre 6',
      materias: [
        {
          nombre: 'MATERIA 1',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 2',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 3',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 4',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        },
        {
          nombre: 'MATERIA 5',
          creditos: 5,
          status: true,
          active: true,
          color: 'uno'
        }
      ]
    },

    // Semestre 7
    {
      nombre: 'Semestre 7',
      materias: [
        {
          nombre: 'MATERIA 1',
          creditos: 5,
          status: true,
          active: true,
          color: 'dos'
        },
        {
          nombre: 'MATERIA 2',
          creditos: 5,
          status: true,
          active: true,
          color: 'dos'
        },
        {
          nombre: 'MATERIA 3',
          creditos: 5,
          status: true,
          active: true,
          color: 'dos'
        },
        {
          nombre: 'MATERIA 4',
          creditos: 5,
          status: true,
          active: true,
          color: 'dos'
        },
        {
          nombre: 'MATERIA 5',
          creditos: 5,
          status: true,
          active: true,
          color: 'dos'
        },
        {
          nombre: 'MATERIA 5',
          creditos: 5,
          status: true,
          active: true,
          color: 'dos'
        }
      ]
    }
  ]
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

  public goToVerifyExtraSchool(): void {
    this.router.navigateByUrl('user/verify-extra');
  }

}
