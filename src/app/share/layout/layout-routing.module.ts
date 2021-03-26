import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {NotfoundComponent} from '../../pages/notfound/notfound.component';
import {RoutesGuardService} from '../services/routesGuardService';

const routes: Routes = [
  {
    path: 'biz',
    component: LayoutComponent,
    // canActivateChild: [RoutesGuardService],
    // canActivate: [RoutesGuardService],
    loadChildren: () => import('../../pages/biz/biz.module').then(m => m.BizModule)
    // loadChildren: () => import('../biz-layout/biz-layout.module').then(m => m.BizLayoutModule)
  },
  {
    path: 'model',
    component: LayoutComponent,
    loadChildren: () => import('../../pages/model/model.module').then(m => m.ModelModule)
  },
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
