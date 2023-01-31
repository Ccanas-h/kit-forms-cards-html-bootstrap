import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'web-dental';
  ngOnInit(): void {}

  //Form 1
  cursos = ['1ro Basico, 2do Basico, 3ro Basico, 4to Basico, 5to Basico'];
  escalaNumerica = [{ min: 2.0, minAprobacion: 4.0, max: 7.0 }];
  escalasConceptuales = [
    [
      {
        nombre: 'Logro insuficiente',
        codigo: 'B',
        nota: { min: 1.0, max: 3.9 },
      },
      { nombre: 'Logro básico', codigo: 'LB', nota: { min: 4.0, max: 4.9 } },
      { nombre: 'Logro esperado', codigo: 'LE', nota: { min: 5.0, max: 5.9 } },
      { nombre: 'Logro destacado', codigo: 'LD', nota: { min: 6.0, max: 7.0 } },
    ],
  ];

  //Form 2
  tiposEnsenanza: string[] = [
    'Educación Parvularia',
    'Enseñanza Básica',
    'Educación Básica Adultos (Sin oficios)',
    'Educación Especial (Discapacidad Auditiva)',
    'Enseñanza Media - Plan Común',
    'Enseñanza Media - Humanista Científico (3º y 4º)',
    'Ed. para adultos - Media Humanista Científico',
    'Enseñanza Media - Técnico Profesional',
    'Ed. para adultos - Media TP Comercial',
    'Educación Básica Adultos (Con oficios)',
    'Educación Especial (Discapacidad Intelectual)',
    'Educación Especial (Discapacidad Visual)',
    'Educación Especial Trastornos Específicos del Lenguaje',
    'Educación Especial (Trastornos Motores)',
    'Educación Especial (Autismo)',
    'Educación Especial Discapacidad Múltiple',
    'Educación Especial Sordoceguera',
    'Programa Integración Escolar(PIE) Opción 4',
  ];


  cursosCreados: string[] = [];
  crearAsignatura_Taller(a: any){
 console.log("a ", a);
    this.cursosCreados.push(a.value.nombre);
  }


}
