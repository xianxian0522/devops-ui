import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: 'biz',
    component: LayoutComponent,
    loadChildren: () => import('../../pages/biz/biz.module').then(m => m.BizModule)
  },
  {
    path: 'model',
    component: LayoutComponent,
    loadChildren: () => import('../../pages/model/model.module').then(m => m.ModelModule)
  },
  {path: '**', component: LayoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
