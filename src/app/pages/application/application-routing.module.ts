import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicationComponent} from './application.component';
import {AppMembersComponent} from './app-members/app-members.component';
import {AppSetInformationComponent} from './app-set-information/app-set-information.component';
import {AppSetClusterComponent} from './app-set-cluster/app-set-cluster.component';
import {AppSetClusterEditComponent} from './app-set-cluster-edit/app-set-cluster-edit.component';
import {AppClusterInstanceComponent} from './app-cluster-instance/app-cluster-instance.component';
import {AppHostDetailsComponent} from './app-host-details/app-host-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: ApplicationComponent},
  {
    path: 'members',
    component: AppMembersComponent,
  },
  {path: 'set-information', component: AppSetInformationComponent},
  {path: 'set-cluster', component: AppSetClusterComponent},
  {path: 'cluster-edit', component: AppSetClusterEditComponent},
  {path: 'cluster-instance', component: AppClusterInstanceComponent},
  {path: 'host-details', component: AppHostDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
