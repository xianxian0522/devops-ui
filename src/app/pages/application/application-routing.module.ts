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
  {path: '', redirectTo: ':appId/index', pathMatch: 'full'},
  // {path: 'index/:id', component: ApplicationComponent},
  {path: ':appId/index', component: ApplicationComponent},
  {
    path: ':appId/members',
    component: AppMembersComponent,
  },
  {path: ':appId/set-information', component: AppSetInformationComponent},
  {path: ':appId/set-cluster', component: AppSetClusterComponent},
  {path: ':appId/set-cluster/edit/:clusterId', component: AppSetClusterEditComponent},
  // {path: 'cluster-instance', component: AppClusterInstanceComponent},
  {path: ':appId/set-cluster/instance/:clusterId', component: AppClusterInstanceComponent},
  {path: ':appId/host-details', component: AppHostDetailsComponent},
  {path: ':appId/host-details/instance/:hostId', component: AppHostInstanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
