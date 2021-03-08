import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout.component';

const routes: Routes = [
  {
    path: 'business',
    component: LayoutComponent,
    loadChildren: () => import('../../pages/business/business.module').then(m => m.BusinessModule)
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
