import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BizComponent} from './biz.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: BizComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BizRoutingModule { }
