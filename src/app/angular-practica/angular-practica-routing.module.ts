import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularPracticaComponent } from './practica/angular-practica.component';

const routes: Routes = [
  // { path: 'home', component: AppComponent },
    { path: 'angular', component: AngularPracticaComponent  },
    // { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularPracticaRoutingModule { }
