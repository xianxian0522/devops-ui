import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from './app-layout.component';

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    loadChildren: () => import('../../pages/application/application.module').then(m => m.ApplicationModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
