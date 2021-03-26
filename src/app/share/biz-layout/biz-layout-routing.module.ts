import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BizLayoutComponent} from './biz-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BizLayoutComponent,
    loadChildren: () => import('../../pages/biz/biz.module').then(m => m.BizModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BizLayoutRoutingModule { }
