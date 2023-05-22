import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularPracticaRoutingModule } from './angular-practica/angular-practica-routing.module';
import { AngularPracticaComponent } from './angular-practica/practica/angular-practica.component';
import { AppComponent } from './app.component';


const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'angular', component: AngularPracticaComponent  },
    // {path: 'angular', loadChildren: () => import('./angular-practica/angular-practica.module').then(m => m.AngularPracticaModule)}
    // { path: 'contact', component: ContactComponent }
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }