import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ExpanseCategoiesComponent } from './expanse-categoies/expanse-categoies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpanseNotesComponent } from './expanse-notes/expanse-notes.component';



const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'categories', component: ExpanseCategoiesComponent },
    { path: 'notes', component: ExpanseNotesComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
