import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesComponent } from './promes/promes.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
        { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
        { path: 'progress', component: ProgressComponent, data: { title: 'Progress'}},
        { path: 'grafica1', component: Grafica1Component, data: { title: 'Grafica'}},
        { path: 'account', component: AccountSettingsComponent, data: { title: 'Settings'}},
        { path: 'promes', component: PromesComponent, data: { title: 'Promises'}},
        { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJS'}},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
