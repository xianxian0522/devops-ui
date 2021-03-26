import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {NotfoundComponent} from '../../pages/notfound/notfound.component';
import {RoutesGuardService} from '../services/routesGuardService';
import {ApplicationComponent} from '../../pages/application/application.component';

const routes: Routes = [
  {
    path: 'biz',
    component: LayoutComponent,
    // canActivateChild: [RoutesGuardService],
    // canActivate: [RoutesGuardService],
    // loadChildren: () => import('../../pages/biz/biz.module').then(m => m.BizModule)
    loadChildren: () => import('../biz-layout/biz-layout.module').then(m => m.BizLayoutModule)
  },
  {
    path: 'app',
    component: LayoutComponent,
    // loadChildren: () => import('../../pages/application/application.module').then(m => m.ApplicationModule)
    loadChildren: () => import('../app-layout/app-layout.module').then(m => m.AppLayoutModule)
  },
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
