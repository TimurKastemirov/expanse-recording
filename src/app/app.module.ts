import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ExpanseCategoiesComponent} from './expanse-categoies/expanse-categoies.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ExpanseNotesComponent} from './expanse-notes/expanse-notes.component';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';

import { ModalModule } from 'ngx-bootstrap';




@NgModule({
    declarations: [
        AppComponent,
        ExpanseCategoiesComponent,
        DashboardComponent,
        ExpanseNotesComponent,
        AddCategoryModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [AddCategoryModalComponent]
})
export class AppModule {
}
