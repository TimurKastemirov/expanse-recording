import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpanseCategoiesComponent } from './expanse-categoies/expanse-categoies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpanseNotesComponent } from './expanse-notes/expanse-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpanseCategoiesComponent,
    DashboardComponent,
    ExpanseNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
