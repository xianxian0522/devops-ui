import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ApplicationComponent} from './application.component';
import {AppMembersComponent} from './app-members/app-members.component';
import {AppSetInformationComponent} from './app-set-information/app-set-information.component';
import {AppSetClusterComponent} from './app-set-cluster/app-set-cluster.component';
import {AppSetClusterEditComponent} from './app-set-cluster-edit/app-set-cluster-edit.component';
import {AppClusterInstanceComponent} from './app-cluster-instance/app-cluster-instance.component';
import {AppHostDetailsComponent} from './app-host-details/app-host-details.component';
import {AppHostInstanceComponent} from './app-host-instance/app-host-instance.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  // {path: 'index/:id', component: ApplicationComponent},
  {path: 'index', component: ApplicationComponent},
  {
    path: 'members',
    component: AppMembersComponent,
  },
  {path: 'set-information', component: AppSetInformationComponent},
  {path: 'set-cluster', component: AppSetClusterComponent},
  {path: 'set-cluster/edit/:clusterId', component: AppSetClusterEditComponent},
  // {path: 'cluster-instance', component: AppClusterInstanceComponent},
  {path: 'set-cluster/instance/:clusterId', component: AppClusterInstanceComponent},
  {path: 'host-details', component: AppHostDetailsComponent},
  {path: 'host-details/instance/:hostId', component: AppHostInstanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
