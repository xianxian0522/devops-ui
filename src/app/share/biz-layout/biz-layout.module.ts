import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BizLayoutRoutingModule } from './biz-layout-routing.module';
import { BizLayoutComponent } from './biz-layout.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BizLayoutComponent
  ],
  imports: [
    CommonModule,
    BizLayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BizLayoutModule { }
