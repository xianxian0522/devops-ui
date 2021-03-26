import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzIconModule} from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzSelectModule,
    NzIconModule,
  ]
})
export class AppLayoutModule { }
