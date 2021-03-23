import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BizComponent} from './biz.component';
import {BizMembersComponent} from './biz-members/biz-members.component';
import {BizHostDetailsComponent} from './biz-host-details/biz-host-details.component';
import {BizSetInformationComponent} from './biz-set-information/biz-set-information.component';
import {BizSetAppComponent} from './biz-set-app/biz-set-app.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: BizComponent},
  {path: 'members', component: BizMembersComponent},
  {path: 'host-details', component: BizHostDetailsComponent},
  {path: 'set-information', component: BizSetInformationComponent},
  {path: 'app-settings', component: BizSetAppComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BizRoutingModule { }
