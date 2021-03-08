import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModelComponent} from './model.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: ModelComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }
