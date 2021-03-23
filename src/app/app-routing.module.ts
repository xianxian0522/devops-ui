import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MiddleComponent} from './pages/middle/middle.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/middle', pathMatch: 'full'},
  {path: 'middle', component: MiddleComponent },
  {path: 'login', component: LoginComponent},
  {
    path: '', loadChildren: () => import('./share/layout/layout.module').then(m => m.LayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
