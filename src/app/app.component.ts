import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'web-dental';
  ngOnInit(): void {
 /* Aqui se rellena el PlanificacionesALL con todos los tipos de enseñanza */
 if (this.planificacionesAll.length == 0) {
  this.tiposEnsenanza.forEach((element) => {
    let planificacion = new Planificacion();
    planificacion.tipoEnsenanza = element;
    this.planificacionesAll.push(planificacion);
  });
}

  }



  tiposEnsenanza: string[] = [
    "Educación Parvularia",
    "Enseñanza Básica",
    "Enseñanza Media",
  ];
  lockTipos = false;
  lockPlanificaciones = false;

  planificacionesAll: Planificacion[] = [];
  planificaciones: Planificacion[] = [];

  seleccionTipoEnsenanza(plan: any, event: any) {
    let check = event.target.checked;
    plan.selected = check;
    // console.log("plan.selected ", plan.selected);
    this.guardarTiposEnsenanza();
  }

  guardarTiposEnsenanza() {
    this.planificaciones = this.planificacionesAll.filter(
      (plan) => plan.selected
    );
  }

  updatePlanificaciones(event: any) {
    let tipo = event.currentTarget.id.split("-")[0];
    let dato: string = event.currentTarget.id.split("-")[1];
    let check = event.target.checked;

    this.planificaciones.forEach((plan) => {
      if (plan.tipoEnsenanza == tipo) {
        if (dato == "oa") plan.oa = check;
        else if (dato == "indicador") plan.indicador = check;
        else if (dato == "habilidad") plan.habilidad = check;
        else if (dato == "conocimiento") plan.conocimiento = check;
        else if (dato == "actitud") plan.actitud = check;
        else if (dato == "dua") plan.dua = check;
        else if (dato == "inicio") plan.inicio = check;
        else if (dato == "desarrollo") plan.desarrollo = check;
        else if (dato == "cierre") plan.cierre = check;
      }
    });

    console.log("this.planificaciones ", this.planificaciones);
  }


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
  tiposEnsenanza2: string[] = [
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


  


  crearAsignatura_Taller(form: any){
 console.log("form.value ", form.value);

    let nombre = form.value.nombre;
    let liquido = form.value.liquido;
    let bruto = form.value.bruto;




    // this.cursosCreados.push(a.value.nombre);
  }


}



export class Planificacion {
  // id? = id;
  tipoEnsenanza: string | undefined;
  selected: boolean = false;
  oa: false = false;
  indicador: false = false;
  habilidad: false = false;
  conocimiento: false = false;
  actitud: false = false;
  dua: false = false;
  inicio: false = false;
  desarrollo: false = false;
  cierre: false = false;
}