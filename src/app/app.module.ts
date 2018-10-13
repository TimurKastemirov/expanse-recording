import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ExpanseCategoiesComponent} from './expanse-categoies/expanse-categoies.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ExpanseNotesComponent} from './expanse-notes/expanse-notes.component';

import { ModalModule } from 'ngx-bootstrap';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import {FormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddExpanseNoteComponent } from './add-expanse-note/add-expanse-note.component';


@NgModule({
    declarations: [
        AppComponent,
        ExpanseCategoiesComponent,
        DashboardComponent,
        ExpanseNotesComponent,
        AddCategoryModalComponent,
        ConfirmModalComponent,
        AddExpanseNoteComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        AddCategoryModalComponent,
        ConfirmModalComponent,
        AddExpanseNoteComponent
    ]
})
export class AppModule {
}
