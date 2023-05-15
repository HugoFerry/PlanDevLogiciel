import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarteComponent } from './carte/carte.component';

/*const routes: Routes = [
  { path: 'carte', component: CarteComponent }
  // Autres routes de votre application
];*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
