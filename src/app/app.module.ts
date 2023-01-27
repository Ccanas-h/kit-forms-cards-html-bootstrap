import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminLteFormsComponent } from './modules/admin-lte-forms/admin-lte-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLteFormsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
