import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BusinessComponent} from './business.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: BusinessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
